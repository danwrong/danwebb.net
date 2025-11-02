---
title: "Safety First"
date: 2025-11-02
description: "If you want high scaling engineering teams to move quickly remove the risk from shipping code."
layout: post.njk
tags: ["blog", "startups", "engineering", "software"]
---

As an advisor, this is familiar story: CEOs and CTOs are confused about why their engineering team has got slower as they've added engineers. "We've doubled the team but we're shipping less than we did with five people." The assumption is always that it's a people problem - wrong hires, bad process, too many meetings.  It's not about tech debt, it's not about whether you've got a monorepo or microservices.  It's simpler than that - nine times out of ten, your engineers are scared to change things.

The system that worked fine when you had three engineers deploying to 100 users is now a liability with fifteen engineers deploying to 10,000 users. You've scaled the team but the stakes have got much higher and your team's knowledge is much more scattered, and now everyone's afraid to knock over the house of cards.

### The fear tax

When it's risky to make changes, teams slow down. Obviously. But it's not just the deploy process that gets slower - it's everything.

Every deploy gets batched up with loads of changes because deploys are painful. Which makes them scarier. Which makes teams batch up even more changes. A vicious cycle. The team gets bigger but ships slower. They avoid refactoring. Bold architectural changes get shelved. You have talented people being conservative because the cost of failure is too high.

I've seen this at companies growing fast - new engineers joining every week, user numbers exploding, everything feeling fragile. Brilliant people given access to systems where making changes is terrifying.

### Breaking the cycle

What changes everything isn't hiring more carefully or adding more process. It's systematically removing the fear.

* Automate everything: if you want something done consistently, don't rely on checklists and documentation - make it happen automatically. This goes for tests, accessibility, security, everything you possiblity can.
* Detect when things are broken quickly: Engineering should be the first to know when something is wrong - if your customer happiness team or your CEO are telling you about problems then you've got work to do. Implement monitoring for all the vital signs, trigger alerts on anomalies, try canary deploys so you can detect issues early.
* Feature flags: Add feature flags so you can roll out your new features progressively and leave the flags in so you can dark mode functionality if its causing issues. Also, consider using feature flags to be able to disable (with reasonable fallbacks) calls to third party services or internal APIs if they are misbehaving.
* If you do make a mistake, make it easy to escape: Make sure your deploys are quick and you've got an automated roll forward/back strategy.  If the above fails this can save your sanity/revenue/users.

Each safety catch you add means the team moves a little bit more confidently. Deployments go from nerve-wracking events to routine operations.  This is a huge win for onboarding new starters and means you can successfully hire less experienced engineers.  If it's hard to break things they won't nervously wait for senior engineers to help them, they'll just get busy and do stuff.

### This is a solved problem

This isn't new - any engineer that's worked at a reasonably mature company knows what this looks like and there's huge ecosystems of tools to help.  Companies like [Netflix](https://netflixtechblog.medium.com/tips-for-high-availability-be0472f2599c) built their entire infrastructure around safe, fast rollbacks. [Feature flag tools](https://www.getunleash.io/blog/canary-deployment-what-is-it) like [LaunchDarkly](https://launchdarkly.com/), [Unleash](https://www.getunleash.io/), and [Flagsmith](https://www.flagsmith.com/) let you kill problematic features instantly. Static analysis tools like [Semgrep](https://semgrep.dev/) and [Snyk Code](https://snyk.io/product/snyk-code/) catch vulnerabilities before they ship. [OWASP maintains a list](https://owasp.org/www-community/Source_Code_Analysis_Tools) of what these tools catch.

You'll see all of this at mature companies like Stripe, which processes [1,145 pull requests per day](https://saile.it/1145-pull-requests-per-day/) with minimal downtime.

### Build the machine

So, if its so obvious, what's the point of this post? I want to tell you that you need to do this work early. You're a hungry startup so you want to ship feature after feature but what you really need to do is build the feature shipping machine.  Then you can ship fast and keep shipping fast as the team scales.  Do it now.

When you add AI agent based coding into the mix this becomes even more critical. This is exactly why [Tom's work that I wrote about recently](https://danwebb.net/posts/ai_is_about_to_change_product_development/) is so compelling. He built a complete safety system - tests, CI/CD, security scanning - that lets AI make bold changes because the guard rails catch problems early. Without that infrastructure you're going to vibe code yourself into a deep dark hole.

The same principle applies whether it's humans or AI writing the code. Safety isn't about preventing change, it's about enabling it.

When you get the safety infrastructure right, deployments become boring. And boring deployments are the dream. They mean you're moving fast, shipping confidently, and your team can focus on building great things instead of being paralysed by fear.

Safety isn't about being slow and careful. It's about being fast and confident.