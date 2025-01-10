---
title: "Why Is Everything P0?"
date: 2025-01-10
description: "A repost of an internal post I made during my time at Meta Reality Labs about when prioritisation goes wrong."
layout: post.njk
tags: ["blog", "startups", "process"]
---

While digging around in my notes app I found this old essay from my time at Meta Reality Labs that was originally posted internally.  We were right in the middle of a team wide planning cycle and, as always, things were getting tense.  At the time, we were using the very popular [P0, 1, 2, 3, 4](https://clickup.com/blog/p1-p2-p3-p4-priority/) system for prioritisation and, in a way that's probably very familiar to you all, everything was P0...

### Everything is P0

There are always way more things that we should/want to/need to do that we have time for on any project that is worth doing.  In fact, if you are struggling to think of things to improve/fix on your project it’s a very good indication that it's dead. Picking the most impactful thing to spend your time on at any point in time is the most important decision we all make every day.  

Do we work on this thing or that thing or split our time or put 50% of our time into both? The hard fact here is that this is a zero sum game - if you spend time/money/resources on one thing you are not spending on something else.  Making decisions on what to focus on is really hard and there’s often lots of things that add noise to this process; comment from leadership on random Workplace thread, partner team loudly requesting help, you like working on a certain problem, the list goes on.  

The tool we often use to make this decision is some notion of priority. Given we’re in an OKR driven org the definition of priority is pretty clear: 

__Priority is the amount of positive impact we expect a given item to have on reaching our objectives__. 

We’re going through org-wide planning right now and we’re all finding ourselves looking at a hell of a lot of P0s.  To take a planning document that’s open in my browser at random (not picking on this in particular but I think this is representative) There are 342 P0s, 96 P1s, a single P2 and finally, 17 P?s.  Here’s a handy pie chart of that to annoy [data scientist on the team who hates pie charts].

<img src="/img/posts/P0pie0.png" alt="A pie chart showing the proportion of priorities assigned to tasks" style="width: 100%">

Here's a handy key:

* __P0__ - We think its valuable and would like to do it at some point in time period X
* __P1__ - We aren’t completely sure of its value yet and probably won’t do it in time period X
* __P2+__ - Dream on, dreamer.

This system does have some utility.  It points out what a given team thinks is valuable and intends to do in the given time period but it’s got some big limitations.

#### It doesn’t help us make decisions as to which P0 to work on now

What to work on right now is, as I mentioned previously, the most important decision we’re all making day to day.  If there’s more than one P0 (or ~75% of all things are P0!) then you’ve got no extra information to determine what to work on next and worse still, if everything is the same critical priority then you may feel compelled to work on many of them at once.  Doing 10% of ten P0s is definitely less impactful than doing 100% of one P0.  P0 can be a focus killer.

#### It lets us pretend that we’re not playing a zero sum game

If you are spending time on one thing then you are not spending time on another thing.  If you are trying to do two things at once they will both end up 50% done (or less - context switching has a cost).  However, we can add as many P0 as we like.  How many P0s is too many P0s?  We can’t know.  The only question we can try to answer is what is the most impactful thing to do next.  

Another situation which comes up is the tie breaker. For example, a dependency comes in from another team which would mean that we would spend less time on other team objectives so there’s some discussion as to whether it should get added to the roadmap.  Eventually, these kind of tie breaker situations end up with leadership and we ask them “Is this dependency really a P0?” and the answer is normally effectively “Yes, it is P0 and put it on to the big pile of P0s”. We’re not putting them in a position to answer the question effectively.  There’s no way for them to make a trade off when we don’t clearly present them with that data.

We need to give ourselves the right tools to figure out what the best thing to do next is.

So how might we fix that?

### Ps out, lists in
For anything task related in our teams we should discard the Ps and use ordered lists. This should include objectives, task boards, roadmaps and everything else where we might spend resources on one thing rather than another.

Why?

#### It constantly reminds us that we are playing a zero sum game

You add a work item to a list.  The other stuff moves down and maybe some stuff drops off the end.  You can’t stop it, that’s how lists work.  No, you can’t put two items on the same line of the list, you scamps :)  This allows us to make very conscious trade-offs between work instead of deferring or even ignoring that thought process.  A new dependency comes in - does it go above or below this other critical item? It forces us to ask the questions to make a real choice every time and helps us explain to others who might be championing a certain work item (eg. a team with a dependency or QA with a bug report) how we have prioritised it and gives them an opportunity to discuss that decision with us. In cases where a tie breaker is required it helps us offer a more crisp decision to leadership: do we work on this first or that first? We can add this item to our roadmap but it increases the chance that some of these other projects might slip this half, are you okay with that?

#### It tells us what to do next

Working with lists is simple.  Take the work item on the top, “ask can I meaningfully contribute to this” if so, work on that, if not look at the next item on the list and repeat.  There’s a lot of reasons why we might not be able to contribute to the top item. It might be blocked in some way, maybe there are enough people working on it already and you don’t think that you’d be able to help ship it faster, maybe you don’t have the skillset to contribute to it.  That’s fine but the result is that we are broadly working to make sure that we put 100% effort into whatever item is at the top of the list at any point in time and if we’ve ordered correctly that means that we are always put maximum effort into the thing we think has the most impact.  We’re no longer feeling compelled to put 10% effort into the 10 P0s on our roadmap at the same time.

When do we reorder, add or remove items? _All the time_.  

We constantly learn new info that changes how we think about the impact of projects and (hopefully) we constantly think of good new ideas.  The list should be living and constantly changing as we learn more.

So yeah, Ps out, ordered lists in.  Who's with me?
