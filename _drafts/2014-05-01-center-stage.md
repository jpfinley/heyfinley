---
layout: post
title: "Center Stage"
date: "May 2014"
categories: work
thumbnail: "../assets/img/portfolio/center-stage-thumbnail.jpg"
slug: "A radically new retail experience."
---

Samsung partnered with The Barbarian Group to develop Center Stage, an interactive digital showroom for their wide range of home appliances sold all over the world.

## A new approach to retail 

For a shopper at Besy Buy, Center Stage is a totally new way to shop. For retailers like Best Buy, however, a fully interactive physical computing installation represents a transformation in how they approach… floor space.

As a retailer, you only have so many square feet to devote to any particular product. Managing your space to generate as much revenue as possible is the goal, and big-box retailers must decide between placing the maximum number of SKUs and providing a pleasant shopping experience.

For the first time, Center Stage allows retailers to stop compromising. They can replace fixed rows of fluorescent-lit, unplugged appliances with an engaging experience for an unlimited number of products shown at actual size. All of this within 20 square feet.

{% vimeo 99379887 %}

## A challenging form factor

Designing for Center Stage meant approaching interface design in a way that was different from how we would with a web site or app. This is a multitouch screen… but it’s 85 inches on the diagonal. Our first step in wrapping our heads around the new orm factor—before the displays even arrived—was to mock it up in foam board.

The plain, white foam board protptype was one of the best things we ever made on this project. Many assumptions evaporated. A client, on a whim, rearranged the right-side HD panels in a subtle curve; that arrangement would make it into the final design. The prototype also told us that while Center Stage was something for one person to use, the thing is 12' wide and their activity would be on display for other shoppers. We took advantage of this by devoting much of the display space to big type, beautiful product renderings, and other tactics to get the attention of our “second audience.”

![Center Stage Review 1](../assets/img/portfolio/center-stage-review-1.jpg)

Giving up so much screen area might seem a great loss to the shopper actually using Center Stage. The reality is since you are only a foot and a half from the screen, that area is outside your field of vision. It ends up working out rather well.

## Attract loop & start screen

The experience starts before the shopper arrives with a full-screen video, what we call the attract loop. The loop is a series of beautiful vignettes, such as silverware flocking out of a dishwasher and loads of laundry flying out of the dryer and landing folded just so.

{% video ../assets/video/center-stage-attract.mp4 ../assets/img/portfolio/center-stage-attract-poster.png loop %}

This video displays across all screens and is punctuated with a giant call to action for people to get started. Our research found some people would be intimidated by the sheer scale of Center Stage and our messaging was designed to make it clear that this was in fact something you could come up and use.

When the user taps on the call to action they are presented with a welcome screen that explains the basics of navigation within this unusual experience. After that they are free to explore and interact at their own pace.

![Center Stage Category](../assets/img/portfolio/center-stage-category.jpg)

*Category view*

![Center Stage Product](../assets/img/portfolio/center-stage-product.jpg)

*Product view*

## Navigation and Information display

Determining where to place interface controls was easily the biggest single design problem I encountered on Center Stage. We had more pixels to work with than any other project I’ve ever encountered, but we were still constrained by the fact that only the single large screen is touch-enabled. In addition, the client specified that all products must be rendered at life-size, leaving virtually no room for anything else when you display a refrigerator or other large appliance. 

![Center Stage Wireframes](../assets/img/portfolio/center-stage-wireframes.gif)

*Rejected navigation iterations.*

We experimented early on with massive pull-down sheets, zooming interfaces, and something that could be described as a “two-dimensional carousel.” We settled on a navigation module whose content was contextual and could be minimized when not in use.

![Center Stage Menu 3](../assets/img/portfolio/center-stage-beta-menu-poster.png)

![Center Stage Menu 1](../assets/img/portfolio/center-stage-menu-1.png)

![Center Stage Menu 2](../assets/img/portfolio/center-stage-menu-2.png)

The radial nav kept things compact (and Fitts-ian) on the big screen and let the content take the spotlight. It also kept things from feeling too web- or app-like, both of which didn't feel exciting enough or fitting for an experience like this.

In addition to category and product navigation, we also designed a filtering mechanism and a set of product tools for alternate viewing angles, zooming, and placing the product in the context of a home.

{% video ../assets/video/center-stage-ui.mp4 ../assets/img/portfolio/center-stage-ui-poster.png %}

Special product features were shown in an interactive “sandbox” where shoppers could see how, say, WaterWall works.

![Center Stage Feature](../assets/img/portfolio/center-stage-feature.jpg)

## Aside: High-tech retail

Center Stage was envisioned as a way to showcase some of Samsung’s forward-thinking display technologies. The system’s hardware is composed of a PC (with heavy-duty GPUs) pushing a tremendous amount of pixels to nine individually-addressed displays. If your high definition TV at home is 1K, Samsung Center Stage is 12K.

(As far as we can tell, it’s the first consumer experience with such a resolution. The engineering problems that emerge when we began to build this simply were not encountered by anyone else; Andrew Bell, the lead developer on this project, had to build his own video codec capable of ultra-ultra-ultra-HD. For a better glimpse into the engineering of Center Stage, check out [his interview with Motionographer](http://motionographer.com/2015/03/02/interactive-experiences-at-the-human-scale-making-centerstage-with-andrew-bell-and-lutz-vogel/).)

One of the reasons we can get away with such an exotic technology set up is by developing Center Stage in [Cinder](http://libcinder.org), our open-source creative coding framework. Cinder is able to provide cinema-grade visual effects, dynamic data, and responsive interaction and it was perfectly suited to the task.

![Center Stage Review 2](../assets/img/portfolio/center-stage-review-2.jpg)

## Press

- [PSFK: the Future of Retail](http://www.psfk.com/2015/01/keith-butters-in-store-immersion.html)
- [Motionographer: Interactive experiences at the human scale](http://motionographer.com/2015/03/02/interactive-experiences-at-the-human-scale-making-centerstage-with-andrew-bell-and-lutz-vogel/)
- [AdAge: Samsung Puts Fridges and Stoves on Center Stage With High-Tech Showroom](http://adage.com/article/digital/samsung-barbarian-group-introduce-digital-showroom/294085/)
- [Behind the scenes](https://vimeo.com/119857543) with Lutz Vogel, Center Stage's Creative Director
