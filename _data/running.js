const EleventyFetch = require("@11ty/eleventy-fetch")
const { parse } = require("csv-parse/sync")
const paginate = require("../paginate.js")

const googleSheetUrl = `https://docs.google.com/spreadsheets/d/e/2PACX-1vT5eA9WWINY_KNPzlqlz8-R8xet0gk2V2b3pi61NwZZcTpMi_f_7Mx52gZda-frtl_WlbC45xMHVpMO/pub?gid=505921132&single=true&output=csv`

const timeToSeconds = function (t) {
  const [hours, minutes, seconds] = t.split(":")
  const total = parseInt(hours, 10) * 3600 + parseInt(minutes, 10) * 60 + parseInt(seconds, 10)
  return total
}

const itemsPerPage = 20

module.exports = async () => {
  let csv = await EleventyFetch(googleSheetUrl, {
    duration: "0s",
    type: "text",
  })

  let data = parse(csv, { columns: true, skip_empty_lines: true }).reverse()
  data = data.slice(0, itemsPerPage * 5)

  let paceMax = 0
  let paceMin = 99999
  const pbs = {}

  data.forEach((row) => {
    const ps = timeToSeconds(row["AVG 1K"])
    const d = parseFloat(row["D (KM)"])
    paceMax = ps > paceMax ? ps : paceMax
    paceMin = ps < paceMin ? ps : paceMin
    if (pbs[d]) {
      pbs[d] = pbs[d] > ps ? ps : pbs[d]
    } else {
      pbs[d] = ps
    }
  })

  data = data.filter((row) => {
    return row.DATE !== "" && row.TIME !== "" && row["AVG 1K"] !== ""
  })

  const result = paginate(
    data.map((row) => {
      const ps = timeToSeconds(row["AVG 1K"])
      const d = parseFloat(row["D (KM)"])
      return {
        date: row.DATE,
        distance: d,
        time: row.TIME,
        pace: row["AVG 1K"],
        url: row["URL"],
        relative_pace: (ps - paceMin) / (paceMax - paceMin),
        location: row.LOCATION,
        isPB: pbs[d] === ps,
      }
    }),
    itemsPerPage,
    "RUNNING"
  )

  return result
}
