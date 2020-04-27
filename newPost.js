const fs = require('fs')

let title;

if (process.argv[2]) {
    title = process.argv[2]
} else {
    title = 'new'
}

function pad(n) {
    if (n < 10) {
        return '0' + n;
    }
    return n;
}

let d = new Date()
let year = pad(d.getFullYear());
let month = pad(d.getMonth() + 1);
let day = pad(d.getDay() + 1);
let filename = `${year}-${month}-${day}-${title}.md`
let file = `
---
layout: post
title: ${title}
date: ${d.toISOString()}
tags: ""
includesMath: false
includesMusic: false
intro: ""
section: writing
---
`

fs.writeFileSync(`./_posts/${filename}`, file, 'utf-8')
