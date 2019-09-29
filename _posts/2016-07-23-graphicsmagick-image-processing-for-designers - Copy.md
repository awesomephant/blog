---
layout: post
title:  "GraphicsMagick"
date: 2016-09-14 10:01:32
tags: ""
thumb: ""
intro: "Graphicsmagick is a free command-line tool for editing images - It's great for making simple changes to a whole bunch of images at once."
---

Having to scale a bunch of images to three different sizes while also changing the file type is something that's been coming up in my work lately. This is easy enough to do in Lightroom, but it feels icky to fire up a massive piece of software just for one simple task. GraphicsMagick does things like rotate, scale and convert images just as well, but with a much smaller footprint.

I'll keep using Lightroom for more advanced photo editing, but for the simple stuff Graphicsmagick is great.


## (This is a command-line thing)
If you're already comfortable with the command-line skip right ahead. If not, stick around - it's really not that hard to use. Jim Hoskins has a [very good introduction to the Mac OS X Command Line](http://blog.teamtreehouse.com/introduction-to-the-mac-os-x-command-line) on Treehouse. Once you read that you'll be ready to follow along with the rest of the article.

(If you're on Windows like myself, read the Treehouse article anyway. The Windows command-line is fundamentally the same thing as the Mac OS X command-line - you'll figure it out pretty quickly.)

## Let's install Graphicsmagick

**On a Mac** the easiest way to install Graphicsmagick is through [Homebrew](http://brew.sh/). Homebrew is a command-line app that makes it easier to install other command-line apps. Once you've got it set up, run the following command to install Graphicsmagick:

```
brew install graphicsmagick
```

**On Windows** grab the [latest version from the project website](http://www.graphicsmagick.org/index.html) and follow the instructions.

Once the setup is complete, open a new command line and type ```gm``` (short for Graphicsmagick). If everything is set up correctly you should see the following result:

```
> gm
GraphicsMagick 1.3.24 2016-05-30 Q8 http://www.GraphicsMagick.org/
Copyright (C) 2002-2016 GraphicsMagick Group.
```

And you're good to go! Here's some examples of things to do:

## Resize a folder of images
```
gm mogrify -output-directory your-output-folder -create-directories -resize 400x200 *.jpg
```

Let's look at this one bit at a time. 
```gm``` is short for GraphicsMagick. ```mogrify``` is the command we're using - it handles scaling, resizing and other basic transformations.

Next, we'll pass a number of arguments to ```mogrify``` that tell it exactly what to do.

```-output-directory your-output-folder``` specifies a folder where gm will save the resized images. If we didn't do this, gm would overwrite the source files. ```-create-directories``` tells gm to create the output directory if it doesn't exist yet.

```-resize 400x200``` is what triggers the actual resizing. GM will resize each image so that it fits within those dimensions - so the resized images will be _at most_ 400px wide and _at most_ 200px tall. If you want to resize an image to exact dimensions (and possibly strech it in the process) use ```-resize 400x200!``` (with and exclamation mark).

```*.jpg``` defines the source images we're working with - in this case any JPG image in the current folder.

This ```gm [command] [arguments] [source]``` structure remains largely the same regardless of which command you're using. Here's some more examples:

## Convert a folder of images to a different format

```
gm mogrify -output-directory output -format png *.jpg
```

GM will convert pretty much any image file into anything you could think of - the [list of supported file types is impressive](http://www.graphicsmagick.org/GraphicsMagick.html#desc)

## Create an animated gif from a folder of images
```
gm convert -delay 100 *.jpg animation.gif
```

```-delay``` defines the delay between each frame of the animation in milliseconds.

## Generate a grid from a folder of images

```
gm montage -tile 5x5 -geometry 250x250+5+5 *.jpg grid.jpg
```

```-tile``` specifies how many columns and rows the montage should have. 
```-geometry``` defines the dimensions of each individual image in the montage and the spacing around it - in this case 250px by 250x with 5px spacing on either side.

## RGB to CMYK Separations

I've written a batch script based on [this Stack Overflow answer](https://stackoverflow.com/questions/32662618/need-to-generate-separate-cmyk-images-in-color-from-pdf):

```
gm convert %1.jpg -colorspace CMYK %1-cmyk.jpg
gm convert %1-cmyk.jpg -operator All negate 1 %1-cmyk.jpg

gm convert %1-cmyk.jpg -channel Cyan %1-cyan.png
gm convert %1-cmyk.jpg -channel Yellow %1-yellow.png
gm convert %1-cmyk.jpg -channel Magenta %1-magenta.png
gm convert %1-cmyk.jpg -channel Black %1-key.png
```

Usage:

```
rgbToCMYK.bat myImage
```

Where ```myImage``` is the filename _without the file extension_.

## Write the filename into the image

```
gm mogrify  -output-directory output -fill white -pointsize 25 -font Arial -draw "text 10,30 '%t'" *.png
```

## The coolest thing: You can combine any of these commands
This is the great thing about command-line tools like this: They don't make any assumptions about what you are going to use them for. So you could combine any of these commands ([and many more](http://www.graphicsmagick.org/GraphicsMagick.html)) in any order you liked with just a few keystrokes.

As an example, you might want to create an animated gif from a folder of images but also scale the gif so you don't end up with a massive file. Just pass a ```-resize``` argument to ```convert``` and you're set.

```
gm convert -resize 200x200 -delay 100 *.jpg animation.gif
```

These are some of the ways I use GM in my work - let me know if you have any more suggestions!