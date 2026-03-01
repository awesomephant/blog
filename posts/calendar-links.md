---
layout: post
title: Add-to-calendar links
date: 2022-03-06
updated: 2026-03-01
includesMath: false
includesMusic: false
intro: 'Add-to-calendar links are a simple, HTML-only way to enhance event websites.'
tags: post
draft: false
thumb:
---

## TLDR

Add-to calendar links let people add your event to their own calendar:

{% include "fig.liquid", src: "/assets/google-calendar.gif", caption: "", alt: "Add Event screen in Google Calendar", class: "" %}

Support varies between calendar apps:

### Google calendar

Google [took down the documentation](https://web.archive.org/web/20120225150257/http://www.google.com/googlecalendar/event_publisher_guide_detail.html) for ATC link, but they do work.

The base URL is `calendar.google.com/calendar/render?action=TEMPLATE` followed by one or more query parameters for your event data:

- `text` (required) – Event title
- `dates` (required) – Start and end dates/times in UTC format (`YYYYMMDDThhmmssZ`), separated by `/`.
  - Omit the times for all-day events.
  - All dates are in GMT by default. Omit the trailing `Z` to use the user's local timezone, or use the `ctz` parameter to specify a custom timezone (see below).
- `details` - Event description. Basic HTML is supported.
- `location` – Event location.
- `ctz` – Custom timezone from the [tz database](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones), for example: `America/New_York`
- `recur` – Specify a recurring event with an [RFC-5545 RRULE](https://icalendar.org/iCalendar-RFC-5545/3-8-5-3-recurrence-rule.html) string. Example: `recur=RRULE:FREQ=DAILY;INTERVAL=3`. There's also an online [generator to make those strings](https://icalendar.org/rrule-tool.html).
- `crm` – Show as available/busy. Possible values are `AVAILABLE`, `BUSY`, and `BLOCKING`.
- `add` – Semicolon-separated list of email adresses to add as event guests. If you set this parameter, it'll also add the user clicking the button as an event organiser.

### Office 365 + Outlook Live

There is no official documentation, but I found some [useful information here](https://github.com/InteractionDesignFoundation/add-event-to-calendar-docs/blob/main/services/outlook-web.md). Office 365 and Outlook Live use different base URLs:

- Outlook Live: `outlook.live.com/calendar/0/deeplink/compose?path=path=/calendar/action/compose&rru=addevent`
- Office 365: `outlook.office.com/calendar/0/deeplink/compose?path=path=/calendar/action/compose&rru=addevent`

The query parameters are the same:

- `subject` (required) – Title
- `startdt` (required) – Start date/time in ISO 8601 format (`YYYY-MM-DDTHH:mm:SSZ`). Omit the time for all-day events. All dates are in UTC by default. Omit the trailing `Z` to use the user's local timezone. To specify all-day events use the YYYY-MM-DD format.
- `enddt` (required) – End date/time in ISO 8601 format (`YYYY-MM-DDTHH:mm:SSZ`). Omit the time for all-day events.
- `body` – Description of the event
- `location` – Location
- `allday` – Is this an all-day event? `true`/`false`
- `to` – Comma-separated list of emails of required attendees.
- `cc` – Comma-separated list of emails of optional attendees

## Microsoft Teams

There is [official documentation](https://docs.microsoft.com/en-us/microsoftteams/platform/concepts/build-and-test/deep-links#deep-linking-to-the-scheduling-dialog), but I can't for the life of me get it to work. Maybe it's only designed to work from _within_ a text chat on Teams? Who knows.

## ICS

Most other calendar apps (like the Mac OS calendar and the Windows calendar app) support events in a file format called `ICS`. They look like this:

{% codetitle "event.ics" %}

```yaml
BEGIN: VCALENDAR
VERSION: 2.0
BEGIN: VEVENT
DTSTAMP: 20220714T170000Z
DTSTART: 20220714T170000Z
DTEND: 20220714T190000Z
DESCRIPTION: Description
SUMMARY: Title
LOCATION: Location
END: VEVENT
END: VCALENDAR
```

The lines between `BEGIN: VEVENT` and `END: VEVENT` contain your event data. ICS has a lot of features, but the most useful ones for our scenario are:

- `SUMMARY` – Title
- `DESCRIPTION` – Description
- `LOCATION` – Location
- `DTSTART` – (required) Start date in the `YYYYMMDDThhmmssZ` format. All dates are in UTC by default, prepend a timezone name and omit the trailing `Z` to specify a local timezone: `TZID=America/New_York:20220119T143000`.
- `DTEND` - (required) End date in the `YYYYMMDDThhmmssZ` format
- `DTSTAMP` – (required) Calendar apps can use this parameter to [resolve conflicting events](https://datatracker.ietf.org/doc/html/rfc5545#section-3.8.7.2). In our scenario, setting it to the same value as DTSTART seems to be enough.

You could make an `ICS` file server-side and point a link at it, but they're small enough to fit into a data URL:

```html
<a
	href="data:text/calendar;charset=utf-8,BEGIN:VCALENDAR%0D%0AVERSION:2.0%0D%0ABEGIN:VEVENT%0D%0ADTSTAMP:20220714T170000Z%0D%0ADTSTART:20220714T170000Z%0D%0ADTEND:20220714T190000Z%0D%0ADESCRIPTION:The event description%0D%0ASUMMARY:The event title%0D%0ALOCATION:Location%0D%0ASTATUS:CONFIRMED%0D%0ASEQUENCE:0%0D%0AEND:VEVENT%0D%0AEND:VCALENDAR"
	>Download ICS</a
>
```

## Demo

<a href="https://codepen.io/maxakohler/full/podYgQB" class="button">View on Codepen</a>

## Background

When you're building a website for a timed event like a talk or a workshop, you want to make it _really_ easy for people to add your event to their own calendar. Once you get someone to do that, there's a pretty high chance they'll actually come to your event, which is why you're building the site in the first place.

An add-to-calendar button is a great way to do that. When people click it, it opens the "Add an Event" screen of their calendar app with all the event information already filled in, so all they need to do is hit "save". It doesn't replace showing the event information visually on your website, but it's a nice enhancement.

Different calendar apps have different standards (see above), so you'll have to compromise and probably show a few buttons at once, but the cost of that is relatively low because add-to-calendar links are HTML-only.

## Notes

- This is probably one of the rare cases where forcing the link to open in a new tab by adding `target="_blank"` is a good idea.
- The [ICS Spec](https://datatracker.ietf.org/doc/html/rfc5545#section-3.8.2.7)
