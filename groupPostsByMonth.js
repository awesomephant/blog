export default function groupPostsByMonth(posts, key = "date") {
  let gp = [];
  posts.forEach((p) => {
    const d = new Date(p.data[key]);
    const y = d.getFullYear();
    const m = d.getMonth();
    if (gp.length === 0 || gp[gp.length - 1]?.year !== y) {
      gp.push({
        year: d.getFullYear(),
        months: [
          {
            month: m,
            date: d.toISOString(),
            posts: [p],
          },
        ],
      });
    } else {
      const gpidx = gp.length - 1;
      if (gp[gpidx].months[gp[gpidx].months.length - 1].month === m) {
        gp[gpidx].months[gp[gpidx].months.length - 1].posts.push(p);
      } else {
        gp[gpidx].months.push({
          month: m,
          date: d.toISOString(),
          posts: [p],
        });
      }
    }
  });
  return gp;
}
