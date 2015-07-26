---
layout: post
title: "Mobile Navigation Study"
date: "February 2015"
categories: work
featured: true
thumbnail: "../assets/img/portfolio/mobile-navigation-study-thumbnail.png"
slug: "Evolving a design for clarity and ease of use."
---

A concept evaluation to show how some small changes to a navigation structure can make big changes for the user—especially for mobile apps.

We were creating a RSS-like news reader for a large consumer package goods company with numerous product lines and employees across the world. The company needed to make sure their employees were up-to-date on things happening company-wide, not just within their teams. The app would exist on the web and as a native app for tablet and mobile. Other configurations are to come for non-interactive digital signage.

The content is categorized into channels, like "Customer Service," "Finance," and "Logistics." Users can pick a channel to see stories and then pick a story to read. When the user reaches the end of the story, they can easily move on to the next.

Since commenting was in scope, we were also planning on including a user profile. Other tools like favoriting stories, search, and app settings were also in the mix.

We began designing before scope was fully signed-off, and out first revision reflected this. The app’s structure was bare-bones: it started with a view of all channels and drilled down into an individual channel and then finally into a story.

{% image ../assets/img/portfolio/navigation-ribbon-2.png Navigation Ribbon 2 %}

In this concept, profile, favorites, and settings would be rolled up into the photo/name lockup on the top left. We thought that, while simple, backing all the way out from a story was unnecessarily difficult. We thought about (see the screenshot below) including a navigation shortcut on a story view, where tapping the channel title in the top bar would fly out a horizontally swipeable list of channels.

{% image ../assets/img/portfolio/navigation-ribbon-1.png Navigation Ribbon 1 %}

This shortcut was nice and all, but suffered from discoverability. Turns out it didn’t matter because our next changes were to add some editorial enhancements that shook up the app’s structure.

Given that users could subscribe to channels they liked, we added a Top Stories section that was the union of unread stories across all subscribed channels. The next revision reflects this:

{% image ../assets/img/portfolio/navigation-drawer-2.png Navigation Drawer 2 %}

Top Stories is now the app’s “home” view, and we’ve added a more conventional navigation drawer. There are now shortcuts to the channels a user has subscribed to, and a Browse Channels button to hit when they want to find more or read others. We’ve also separated settings from the other profile bits.

Then subscribed tags entered the picture: users could always navigate related stories with tags, but now they could subscribe to any tag they were interested in. We needed method of navigating to these as well:

{% image ../assets/img/portfolio/navigation-drawer-3.png Navigation Drawer 3 %}

This version adds a list of subscribed tags and bumps down the list title size (those aren’t tappable), and merges (again) the settings and profile tools.

Speaking of the profile–we found that Favorites was getting lost. It required tapping on the user profile button… even though conceptually it’s a list of stories. So we detached it from the profile and moved it up top with all the other story items.

Cool, cool, but that Browse Channels button sticks out badly. Why the lone verb ‘browse’? Why is it a button when it just navigates? And can we simplify the two subscription lists?

{% image ../assets/img/portfolio/navigation-drawer-4.png Navigation Drawer 4 %}

Right on. Now let’s add some context in the form of unread counts. That way people with limited time in the app can be a bit strategic.

{% image ../assets/img/portfolio/navigation-drawer-5.png Navigation Drawer 5 %}

We arrive at the present day. The profile is up at the top, which provides a nice symmetry for the signed out state. It also has the side benefit of conveying ownership to the remainder of the navigation items:

{% image ../assets/img/portfolio/navigation-drawer-6.png Navigation Drawer 6 %}

The Channels button takes one, predictably, to a list of channels. Their subscriptions are simply an extension of that label, indented to imply containment with the parent item. Since subscribed channels and subscribed tags are both a list of stories, we simplify things by joining the list, with channels first and tags second.

Here’s everything in sequence as a .gif:

{% image ../assets/img/portfolio/nav-animation.gif Nav Animation %}
