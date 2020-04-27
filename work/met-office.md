---
layout: post
title: Met Office YCN Brief
date: 2017-01-01
images: 
  - /assets/projects/gradient-prints.jpg
  - /assets/projects/bot.png
  - /assets/projects/bot-2.PNG
  - /assets/projects/scan-table.JPG
tags: work
---

For this project I set out to explore different modes of data visualisation and science communication in the context of weather data. The UK Met Office makes the majority of its data publicly available, including current weather observations, weather forecasts and historical records reaching back hundreds of years.

Initially I worked on a chatbot that could serve as an intuitive interface to the Met Office's datasets. A chatbot is a natural-language interface that exists within existing messaging applications such as Whatsapp, SMS or Facebook Messenger. I propose this as a more personal, lightweight alternative to traditional weather applications.

The robot is built on the [Microsoft Bot Framework](https://dev.botframework.com/), which uses machine learning to understand natural language. Location-based inputs  such as "How's the weather in Manchester" are parsed using the [Google Maps API](https://developers.google.com/maps/) before the appropriate weather information is requested from the [Met Office API](http://www.metoffice.gov.uk/datapoint). The resulting data is then converted back into natural language and presented to the user. The source code is [available on Github](https://github.com/awesomephant/weatherbot).

Next, I focused on a [dataset containing historical weather observations going back as far as 1853](http://www.metoffice.gov.uk/public/weather/climate-historic/#?tab=climateHistoric). I made a series of attempts to visualise the roughly 50.000 data points it contains.

- [Spreadsheet listing observation sites](https://docs.google.com/spreadsheets/d/1xYVZw5wCWfg2fKV-0gaZSlzr7ntLmdzHnBz4iSKLSI4/pubhtml)
- [Spreadsheet showing the Central England Temperature Record](https://docs.google.com/spreadsheets/d/1ueKlVpeMMa2wtQkjnEVAhhlANF2IMqUdLAslqiblDsY/pubhtml#)
- [Map showing site locations](http://www.maxkoehler.com/metoffice-graphic/map.html)
- [Significant Events](http://www.maxkoehler.com/metoffice-graphic/table.html)
- [Line Graph](http://www.maxkoehler.com/metoffice-graphic/oxford-line.html)
- [Animated bar chart showing monthly temperatures](http://www.maxkoehler.com/metoffice-graphic/steps.html) - Y axis showing temperature, X Axis showing 25 different observation sites, colour coding showing the amount of rain.
- [Animated bar chart showing annual average temperatures](http://www.maxkoehler.com/metoffice-graphic/yearly.html) - Y axis showing temperature, X Axis showing different observation sites.

Eventually I found [a successful way to show average](http://www.maxkoehler.com/metoffice-graphic/) temperatures as colours on a spectrum. This was the first approach I discovered that made global warming easily visible.

All visualisations were built using [d3.js](https://d3js.org/). The source code is [available on Github](https://github.com/awesomephant/metoffice-graphic).

I have some thoughts on [design competitions](http://www.maxkoehler.com/2017/design-competitions/).