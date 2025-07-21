---
layout: post
title: Datawrapper Recipes
date: 2024-11-01
includesMath: false
includesMusic: false
tags: post
draft: false
---

## Show a tooltip with column values in descending order

Assuming your data columns are `column_a`, `column_b` and `column_c`, you can display all three values in descending order in a HTML table using the following tooltip template code:

```liquid
{%- raw -%}
<table>
    {{JOIN(MAP(f(el)=CONCAT("<tr><th>", SLICE(["Column A","Column B", "Column C"], NUMBER(SLICE(SPLIT(el, "_"), 0, 1)), NUMBER(SLICE(SPLIT(el, "_"), 0, 1)) + 1), "</th><td>", FORMAT(SLICE(SPLIT(el, "_"), 1), "0.0[0]%"), "</td></tr
    >"), SORT(MAP(f(v,i)=CONCAT(i, "_", v), [column_a, column_b, column_c]),FALSE,f(el)=NUMBER(SLICE(SPLIT(el, "_"), 1)))), "")}}
</table>
{% endraw %}
```

This uses Datawrapper's [tooltip template syntax](https://academy.datawrapper.de/article/237-i-want-to-change-how-my-data-appears-in-tooltips#minitable). The full list of supported tags [is available here](https://github.com/datawrapper/chart-core/blob/master/docs/parser.md). We use two undocumented features:

- `SORT` accepts [a function argument](https://github.com/datawrapper/chart-core/blob/master/lib/dw/utils/parser.mjs#L659), not [just a string](https://github.com/datawrapper/chart-core/blob/master/docs/parser.md#sortarray-boolean-string--array).
- `MAP` is [passed the index](https://github.com/datawrapper/expr-eval/blob/d09ab58435d4743cced31cfa5b2eafadee578a92/src/functions.js#L277), not [just the current value](https://github.com/datawrapper/chart-core/blob/master/docs/parser.md#sortarray-boolean-string--array).
