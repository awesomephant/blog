const EleventyFetch = require("@11ty/eleventy-fetch")
const { parse } = require("csv-parse/sync")
const paginate = require("../paginate.js")

const googleSheetUrl = `https://docs.google.com/spreadsheets/d/e/2PACX-1vT5eA9WWINY_KNPzlqlz8-R8xet0gk2V2b3pi61NwZZcTpMi_f_7Mx52gZda-frtl_WlbC45xMHVpMO/pub?gid=505921132&single=true&output=csv`

const timeToSeconds = function (t) {
  const [hours, minutes, seconds] = t.split(":")
  const total = parseInt(hours, 10) * 3600 + parseInt(minutes, 10) * 60 + parseInt(seconds, 10)
  return total
}

module.exports = async () => {
  let csv = await EleventyFetch(googleSheetUrl, {
    duration: "0s",
    type: "text",
  })

  const data = parse(csv, { columns: true, skip_empty_lines: true })

  data.reverse()
  let paceMax = 0
  let paceMin = 99999

  data.forEach((row) => {
    const ps = timeToSeconds(row["AVG 1K"])
    paceMax = ps > paceMax ? ps : paceMax
    paceMin = ps < paceMin ? ps : paceMin
  })

  const result = paginate(
    data.map((row) => {
      const ps = timeToSeconds(row["AVG 1K"])
      return {
        date: row.DATE,
        distance: row["D (KM)"],
        time: row.TIME,
        pace: row["AVG 1K"],
        url: row["URL"],
        relative_pace: (ps - paceMin) / (paceMax - paceMin),
        location: row.LOCATION,
      }
    }),
    15
  )

  return result
}
