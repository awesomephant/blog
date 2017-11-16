---
layout: post
title:  "Teaching machines to draw"
date: 2017-10-01 10:00:00
tags: ""
thumb: ""
intro: ""
---

## November 28, 2017
Turns out my steppers and drivers worked just fine, I just didn't have enough voltage. 9V battery does the trick. I also found out my first EasyDriver is in fact perfectly fine, which is good news. 

## October 3, 2017

Managed to solder pins on my EasyDrivers, they fit nicely into the breadboards now. Hopefully I didn't cook any of the components.

![Driver](/assets/unit-10/driver.jpg)
BA Graphic Design level soldering

![Driver](/assets/unit-10/arduino.jpg)

## October 15, 2017
I found out you can get AutoCAD for free as a student, so I used that to draw up the shaft supports I need to build. What a good piece of software. (I can't believe I ever thought it was a good idea to do this in Illustrator) 

![Mounting](/assets/unit-10/mounting.png)

## October 17
Bought some more components to help with the wood:

- 1 x 16mm Auger bit (To drill a hole that will take a ball bearing)
- 1 x 8mm General purpose bit (to make supports for the slide shafts)
- Mounting brackets
- Machine screws

## October 18, 2017
Had a good talk with a technician at Camberwell today concerning cutting my MDF (shouldn't be a problem) and drilling holes for my shaft supports (might be a problem). Turns out the 40cm drill bit I bought yesterday is going to be useless - you can chuck it in a drill press, but because it's so long it will wobble and make it impossible to drill a precise hole. The workshop has some special drill router bits that should work better. 

Cutting the 5mm steel rod isn't a problem, he says. I'm starting to think having two shafts at the end might be useful, it allows me to tighten each timing belt seperately (but then again I'm increasing friection and I could probably cut both belts to the same lengths with reasonable precision)

Workshops are closed Wednesday afternoons, and they're doing inductions Thursday - So I'll be cutting my MDF Friday afternoon.

Also I held some screws up agains things and found out that I do have the correct machine screws to go in my linear bearings, and my wood screws will fit in my angle brackets.

![Parts](/assets/unit-10/hardware.jpg)

## October 20, 2017

Got my MDF cut to size - turns out I couldn't get 15 pieces because you loose 3mm with each cut (the width of the saw blade). I managed to put together a version of the slide mechanism using MDF blocks and mounting brackets.

![MDF slide mechanism](/assets/unit-10/mdf-shaft-support.jpg)

Because the rods are so long, there is quite a lot of springy-ness to them - hoping this won't be too much of a problem since there isn't going to be much weight on them.

### Problems:

 - It's difficult to get the MDF blocks to sit straight using mounting brackets - it always pulls them in one direction or the other
 - MDF doesn't work too well as a shaft support - the rods move around in the holes, causing the slide to get stuck.

I've ordered some machine-made [aluminium shaft supports](https://www.gearsandsprockets.co.uk/pillar-shaft-support-mount-for-linear-guide-rails-8mm-sk8uu.html) which should solve both problems at the same time.

Hoping to install the drive shaft (with temporary support) and do a test with the motor by the end of next week.

## October 25, 2017

The aluminium shaft supports arrived:
![Aluminium shaft supports](/assets/unit-10/metal-shaft-suport.jpg)

With them installed, everything seems much more stable. There's also the added benefit that the slide sits much lower over the table surface, which means the eventual pen won't be too far from the paper. The aluminium supports are also much lighter than the MDF ones. Still, the slide doesn't run perfectly smooth, but I'm hoping some small adjustments and a bit of oil will solve that.

![Driveshaft mount](/assets/unit-10/driveshaft-mount.jpg)

Following my disillusionment with the MDF shaft supports, I got an aluminium part to take the driveshaft. A few layers of paper to bring it to the height of the motor shaft.

I came up with this arrangement to mount the timing belts:

![Driveshaft mount](/assets/unit-10/belt-mount.jpg)

It consists of two corner braces, an M5 screw and some nuts, all of which I had already. However I doubt this will be stable enough to support the belt once it's under tension. 

I'm mounting the belt as close to the linear bearing as possible, so there's the least amount of leverage to get it stuck.

## October 31, 2017

I came up with this arrangement to attach the sliding platform to the timing belt:

It consists of a [mending plate](https://www.screwfix.com/p/mending-plates-zinc-plated-76-x-16-x-10-pack/16034) which mounts with M4 screws. The belt is squeezed between it and the platform - originally I was going to use two plates below the platform, but this is simpler and has the added benefit of holding the belt up (which means it needs less tension). This way I don't need to worry about trying to join the two ends of the belt together. I can also adjust the tension when I need to.

I repeated this on both sides, connected by the driveshaft. I then connected the stepper (happy to report the EasyDriver survived my soldering) and it works! 

<video loop controls autoplay src='/assets/unit-10/motor.mp4'></video>

It's moving _very_ slowly at the moment, but I should be able to fix that by going from 1/8 microstepping to 1/4 or 1/2 - effectively reducing the resolution by half and doubling the speed. The EasyDriver has two ports two do this which means I'll be able to adjust speed/resolution based on the drawing I'm trying to do.

Still missing a shaft support and stepper for the Y-axis.

## November 2, 2017

I managed to double the speed of the slide using this logic table:

|MS1|MS2| Microstep Resolution
|---|---|--------------------
|Low  | Low | Full Step (2 Phase)
|High  | Low	| Half Step
|Low  | High	| Quarter Step
|High  | High	| Eigth Step

[Logic table source](https://learn.sparkfun.com/tutorials/easy-driver-hook-up-guide#hardware-overview)

However apparently you get less torque the bigger the steps are? The lowest that would work reliably is quarter steps. [This article would suggest it's way more complicated](http://www.geckodrive.com/microstep-full-step-torque)

I've also laid out the x-axis platform, which needs to fit a stepper, the belt attachment, two shaft supports and its own belt support. I'm running the belt in between the two bearings so it shouldn't get stuck. I've realised the pen should probably go between the bearings as well to reduce leverage that could twist the platform.

Ordered some wire to connect the second stepper once it arrives.

## November 9, 2017

I wrote the most basic script to run the machine I could think of. Here's some pseudo code:

```
while i < 1000
    Set stepper one to direction 0 or 1
    Set stepper two to direction 0 or 1
    Do 500 steps on each stepper
    i++
```

This draws a sort of diagonal grid - the very first work to come out of the drawing machine! Mostly this is a way to have the machine moving continuously so I can tinker with things. 

The whole thing is quite wobbly, however some of this might be remedied when I find a beter way than masking tape to attach the pen to the drawing platform. Bringing the pen as close to the slide as possible should help: reduces the amount of leverage.

Tracey makes the point that the wobbly-ness might be part of the work: My individual handwriting is showing through me not being able to drill a hole in th right place. Though I'm hoping to get things at least a little more steady.

On the Y-axis I'm clearly running at the upper limit of torque that the stepper can put out. When there is two much resistance it gets stuck and makes an awful noise. The range of motion is limited by the belt going into a skewed angle, but it's still over a metre.

I have full range of motion on the X-Axis, which is about 90cm. Because the slide is much lighter and shorter (hence less tension on the belt) there aren't any torque issues. 

## November 10, 2017

Killed my laptop.

I made the mistake of messing with the wiring while the machine was running. My best guess is that I made a short, which sent 12V from the motor circuit into the Arduino and my laptop's USB port. The laptop went dark immediately and wouldn't turn on anymore, needed professional repair: Wrong assumptions:

1. The Arduino is idiot-proof. It's clearly not.
2. 12V isn't enough to do any harm. It clearly is.
3. Laptops have fuses in the usb ports. Maybe? My machine didn't need a board replacement, which indicates the 12V did get stopped somewhere.  

I've bought something called a [USB Isolator](https://www.amazon.co.uk/gp/product/B00HFUDI66/ref=oh_aui_detailpage_o00_s00?ie=UTF8&psc=1) which is designed to prevent this exact thing from happening. It goes up to 30.000V - should do. Also not going to touch any wires while there's voltage on them again.

## November 13, 2017

Tutorial w/ Tracey