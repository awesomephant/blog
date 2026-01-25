---
layout: post
title: Everything I know about alt text
date: 2022-02-25
updated: 2026-01-21
includesMath: false
includesMusic: false
intro: "A big part of my job is telling peo­ple to use alt text. To make my life eas­ier, here are all my notes and references in one place."
tags: post
draft: false
is_featured: true
thumb: https://www.maxkohler.com/assets/fruit-type-2.png
---

## What is alt text?

"Alt text" is short for "alternative text". It's a short piece of text that's used _in place_ of an image when it is unavailable. This happends when someone uses a text-only or audio version of your website, they turned off images to save bandwidth, or the network request failed. Alt text also makes your images more readable for machines, both your own and those [built by others](https://developers.google.com/search/docs/advanced/guidelines/google-images?hl=en#use-descriptive-alt-text).

It's different to an image caption, which provides _additional_ context to an image and is visible to everyone, or an extended description.

## Why should you use alt text?

Alt text is a straightforward way to give more people access to your content. This includes people who are blind or have low vision and rely on screen readers and other assistive technology, but also people who are cooking, driving, on a slow internet connection, or in some other situation where an audio or text-only version of your website is just more convenient.

If your organisation takes public money, you're probably required to provide alt text by your country's accessibility laws. In the U.S. the relevant standards are [Section 508](https://www.access-board.gov/ict/) of the 1973 [Rehabilitation Act](https://www.access-board.gov/about/law/ra.html) and Title II/III of the 1990 [Americans with Disabilities Act (ADA)](https://beta.ada.gov/)[^1], in the United Kingdom it's the 2018 [Public Sector Bodies Accessibility Regulation](https://www.gov.uk/guidance/accessibility-requirements-for-public-sector-websites-and-apps#meeting-accessibility-requirements), and European member states all have local laws implementing an directive called [EU 2016/2102](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32016L2102).

Thankfully, all of these laws refer to a common standard called the [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/), which requires that ["all non-text content is also available in text"](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv.html) (Success Criterion 1.1)

## How do you write good alt text?

### Content

Alt text should give people the same information as the image it replaces. This means you need to ask what the _purpose_ of the image is in the context it's in and write different alt text depending on the answer.

Let's say your website has a phone number with an icon of a phone next to it. The purpose of that icon is just to indicate that what follows is, in fact, a phone number – so the alt text should do the same. The word "Phone" would be enough to do that. Any other details would be distracting.

If the point of an image is to show what something looks like, the alt text should be a visual description of that thing, focusing on the important details. If the image is a photo of a boat you're trying to sell, you should focus on the boat rather than the landscape in the background. However, if you used the same image as an example of your landscape photography, describing the background, the light, and the overall composition would make sense.

People have come up with more [formal categories of images](https://www.w3.org/WAI/tutorials/images/) and rules for writing alt texts for each. These can be useful, but ultimately these are editorial decisions you need to make using your own judgement.

### Style

I think it's helpful to remind yourself that writing alt text is still _writing_. It's not fundamentally different from any other writing you do on your website. This means you can use everything you know about your audience, structure, tone, editing and so on, and be as nuanced and expressive as you are in other contexts. If you think of it as a literary endeavour rather than a technical chore, writing alt text can be fun and you'll likely produce better results.

This being said, some basic style tips are generally accepted:

- Write in the simple present.
- Aim for a length of 20 words or less.
- Don't repeat information that's already present in the image caption or elsewhere on the page.
- If the image contains important text, transcribe it in full.
- Don't use <span class="small-caps">all-caps</span> for emphasis – some screen readers will read each letter separately, which is frustrating.
- Don't say it's an image – [screen readers will add that information themselves](https://axesslab.com/alt-texts/#dont-say-its-an-image).

## How do you add alt text?

It depends on your situation. If you're working with HTML, you write the alt text right into your markup using the `alt` attribute:

```html
<img alt="Charcoal drawing of apples on checked blanket" src="apples.jpg" />
```

Inline SVGs don't support the `alt`-attribute, [but you can use](https://axesslab.com/alt-texts/#svg) `role="img"` and `aria-label` instead:

```html
<svg role="img" aria-label="Diagram of an internal combustion engine" viewBox="0 0 100 100">…</svg>
```

If you're not editing your site's HTML directly, you need to figure out how to add alt text through your content management system. Most popular ones have built-in tools to do it:

- [Twitter](https://help.twitter.com/en/using-twitter/picture-descriptions)
- [Instagram](https://help.instagram.com/503708446705527)
- [Facebook](https://www.facebook.com/help/214124458607871)
- [Wordpress](https://make.wordpress.org/accessibility/handbook/content/alternative-text-for-images/#visual-example)
- [Medium](https://help.medium.com/hc/en-us/articles/215679797-Images)
- [Substack](https://support.substack.com/hc/en-us/articles/4414829453204-How-can-I-edit-images-on-a-Substack-post-)
- [Tumblr](https://brownandtrans.tumblr.com/post/613978932163772416/how-to-write-alt-text-and-image-descriptions-for) (only in iOS and Android apps)
- [Squarespace](https://support.squarespace.com/hc/en-us/articles/206542357-Adding-alt-text-to-images)
- [Datawrapper](https://academy.datawrapper.de/article/330-how-to-write-good-alternative-descriptions-for-your-data-visualization)

If your platform doesn't support alt text, you can work around the problem by adding captions or describing the image in the main text.

## Can you automate this?

Some organisations do generate alt text automatically when no hand-written text is available, notably [Facebook and its properties](https://www.facebook.com/help/216219865403298) and [Microsoft Edge](https://www.theverge.com/2022/3/18/22984474/microsoft-edge-automatic-image-labels-accessibility-feature).

The problem with these systems is that they have no way of knowing what you were trying to communicate with a particular image. They just produce a general, more [or less accurate](https://cripritual.com/haagaard/) description of it, which isn't always what your readers need ([see above](#how-do-you-write-good-alt-text%3F)). Still, in most situations it's probably better than no description at all.

## Further reading

- [The Hidden Image Descriptions Making the Internet Accessible](https://www.nytimes.com/interactive/2022/02/18/arts/alt-text-images-descriptions.html). A really well-produced introduction to alt text from both technical and cultural perspectives by Meg Miller and Ilaria Parogni in the New York Times.
- [Cooper Hewitt Guidelines for Image Description](https://www.cooperhewitt.org/cooper-hewitt-guidelines-for-image-description/). This is the most detailed guide I've found on writing good image descriptions, captions, and alt text. It has particularly thoughtful guidelines on describing people.
- The idea to frame alt text as a literary endeavour comes from a project called [Alt text is poetry](https://alt-text-as-poetry.net/) by the artists Bojana Coklyat and Shannon Finnegan. Their website is like a breath of fresh air when you've been knee-deep in the WCAG spec all day.

[^1]: The U.S Department of Justice has some re­ally well-writ­ten guid­ance on how the [ADA re­lates to web ac­ces­si­bilty](https://beta.ada.gov/web-guidance/).
