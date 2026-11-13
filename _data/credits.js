import Fetch from "@11ty/eleventy-fetch";
import groupPostsByMonth from "../groupPostsByMonth.js";
import { DateTime } from "luxon";

export default async function () {
  const ft = await Fetch("https://www.ft.com/max-k%C3%B6hler?format=rss", {
    duration: "1w",
    type: "parsed-xml",
  });

  const d = ft.children[0].children[0].children
    .filter((el) => el.name === "item")
    .map((item) => {
      return {
        data: {
          publication: "Financial Times",
          title: item.children[0].children[0].text,
          url: item.children[2].children[0].text.split("?")[0],
          date: DateTime.fromFormat(
            item.children[4].children[0].text,
            "ccc, dd LLL yyyy hh:mm:ss z",
          ),
        },
      };
    });

  const grouped = groupPostsByMonth([...d], "date");
  return grouped;
}
