---
layout: post
title: Wordpress deployment checklist
date: 2021-03-28
includesMath: false
includesMusic: false
intro: ""
tags: post
draft: true
---

This assumes we have a dev/staging/production kind of setup.

- Install Wordpress on production
- Make a temporary admin account on production
- Install every staging plugin on production
- FTP into production
- Download a copy of production ```wp-config``` so you're ready to change the table prefix
- WP Migrate on production: Pull from staging with media files.
- Change the table prefix in ```wp-config``` and upload.
- You'll now be logged out of production. Log back in with your staging credentials.
- FTP the theme to production
- Activate the theme on production and do any cleanup you might need
- Uninstall WP Migrate on production 
- (Later) Spin down staging.
