---
layout: post
title: Everything I know about alt text
date: 2022-02-25
includesMath: false
includesMusic: false
intro: "About half my job is telling peo­ple to use alt texts. To make my life eas­ier, here are all my notes and references in one place."
tags: post
draft: false
canonical: https://maxakohler.medium.com/everything-i-know-about-alt-text-3e1c8567c4f5
thumb: 
    src: /assets/fruit-type-2.png
    alt: "Apples on checked blanket with overlaid text: Apples on checked blanket"
---

## What is alt text?

"Alt text" is short for "alternative text". It's a short piece of text that's used when the image itself isn't available because someone is using a text-only or audio version of your website, they turned off images to save bandwidth, or the network request failed. Alt text also makes your images more readable for machines, both your own and those [built by others](https://developers.google.com/search/docs/advanced/guidelines/google-images?hl=en&visit_id=637812413922396034-4279629001&rd=1#use-descriptive-alt-text).

It's different to an image caption, which provides _additional_ context to an image and is visible to everyone, or an extended description.

## Why should you use alt text?

Alt text is a straightforward way to give more people access to your content. This includes people who are blind or have low vision and rely on screen readers and other assistive technology, but also people who are cooking, or driving, or are in some other situation where a text-only version of your website is just more convenient.

If your organisation takes public money, you're probably required to provide alt text by your country's accessibility laws. In the U.S. the relevant standard is [Section 508](https://www.access-board.gov/ict/) of the Rehabilitation Act, in Britain it's the [Public Sector Bodies (Websites and Mobile Applications) (No. 2) Accessibility Regulations 2018](https://www.gov.uk/guidance/accessibility-requirements-for-public-sector-websites-and-apps#meeting-accessibility-requirements), and European member states all implement a directive called [EU 2016/2102](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32016L2102). All of these laws refer to a common standard called the [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/), which requires that ["all non-text content is also available in text"](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv.html).

## How do you write good alt text?

### Content

Alt text should give people the same information as the image it replaces. This means you need to ask what the _purpose_ of the image is in the context it's in and write different alt text depending on the answer.

Let's say your website has a phone number with an icon of a phone next to it. The purpose of that icon is just to indicate that what follows is, in fact, a phone number - so the alt text should do the same. The word "Phone" would probably be enough to do that – any other details would be distracting.

If the point of an image is to show what something looks like, the alt text should be a visual description of that thing, focusing on the important details. If the image is a photo of a boat you're trying to sell, you should focus on the boat rather than the landscape in the background. However, if you used the same image as an example of your landscape photography, describing the background, the light, and the overall composition would make sense.

People have come up with more [formal categories of images](https://www.w3.org/WAI/tutorials/images/) and rules for writing alt texts for each. These can be useful, but ultimately these are editorial decisions you need to make on your own.

### Style

I think it's helpful to remind yourself that writing alt text is _writing_. This means you can use everything you know about your audience, structure, tone, editing and so on, and be as nuanced and expressive as you are in other contexts. It's a difficult, interesting, literary endeavour.

This being said, there are some basic style tips that are generally accepted:

- Write in the simple present
- Don't go longer than 15–20 words
- Don't repeat information that's already present in the image caption or elsewhere on the page.
- If the image contains important text, transcribe it in full.
- Avoid lead-ins like _This is an image of..._ – [screen readers will add that themselves](https://axesslab.com/alt-texts/#dont-say-its-an-image).

## How do you add alt text?

It depends on your situation. If you're working with plain HTML, you write the alt text right in your markup with an `alt` attribute:

```html
<img alt="Charcoal drawing of apples on checked blanket" src="apples.jpg" />
```

If you're not, you need to figure out how to add alt text through whichever platform you're using to publish content. Most popular ones have built-in tools to do it:

- [Twitter](https://help.twitter.com/en/using-twitter/picture-descriptions)
- [Instagram](https://help.instagram.com/503708446705527)
- [Facebook](https://www.facebook.com/help/214124458607871)
- [Medium](https://help.medium.com/hc/en-us/articles/215679797-Images)
- [Wordpress](https://make.wordpress.org/accessibility/handbook/content/alternative-text-for-images/#visual-example)

If your tool doesn't support alt text, you may need to work around the problem by adding captions, or describing the image in the text.

## Can we automate this?

Some people do, notably [Facebook and its properties](https://www.facebook.com/help/216219865403298).

The problem with these systems isn't just that they have no way of knowing what you were trying to communicate with a particular image. They just produce a more [or less accurate](https://cripritual.com/haagaard/) visual description of it, which isn't always what your readers need. 

## Further reading

- [The Hidden Image Descriptions Making the Internet Accessible](https://www.nytimes.com/interactive/2022/02/18/arts/alt-text-images-descriptions.html). A really well-produced introduction to alt text from both technical and cultural perspectives.
- [Cooper Hewitt Guidelines for Image Description](https://www.cooperhewitt.org/cooper-hewitt-guidelines-for-image-description/). This is the most detailed guide I've found on writing good image descriptions, captions, and alt text. It has particularly thoughtful guidelines on describing people.
- The idea to frame alt text as a literary endeavour comes from a project called [Alt text is poetry](https://alt-text-as-poetry.net/) by the artists Bojana Coklyat and Shannon Finnegan. Their website is like a breath of fresh air when you've been knee-deep in the WCAG spec all day.