---
layout: ../../layouts/post.astro
title: 🎙️ iOS Astronauts — “How to Replace People with Robots”
description: A talk I gave at the iOS Astronauts meetup in London about how our team at Moonpig transformed our iOS development process — from slow, manual releases to a fully automated continuous delivery pipeline.
dateFormatted: October, 2018
---

**Event:** iOS Astronauts (London)  
**Company:** Moonpig  

> During my time at **Moonpig**, our iOS team evolved from manual releases and slow test cycles to a fully automated, continuous delivery pipeline.  
>  
> This talk captures that transformation — how we replaced repetitive, error-prone processes with automation, improved confidence in our testing, and learned when to let go of “best practices” that no longer served us.  
>  
> It’s a story about engineering pragmatism, team adaptation, and the balance between people and the robots that help them ship better software.

---

<!-- 🎥 Embedded YouTube Video -->
<iframe 
  src="https://www.youtube.com/embed/bEu2aUmUZNM?enablejsapi=1"
  title="iOS Astronauts — How to Replace People with Robots (Alberto Solano)"
  width="100%"
  height="450"
  frameborder="0"
  allowfullscreen
  style="display: block; width: 100%; border-radius: 8px; margin-bottom: 1rem;">
</iframe>

<!-- 🧾 Scrollable Transcript -->
<div style="width: 100%; max-height: 400px; overflow-y: auto; padding: 1rem; border: 1px solid #ddd; border-radius: 8px; background-color: #fafafa; line-height: 1.5;">

## 0:00 Introduction

**00:06**  
Hi everyone! I see many familiar faces around, but let me introduce myself for those who don’t know me.  
I’m **Alberto**, and I started working at **Moonpig** a little more than a year ago.  

**00:24**  
Let me introduce the team I found when I joined the company.  

**00:28**  
Back in **May 2017**, the team consisted of **seven developers** (including myself) and **two CI agents**.  
Today, I’d like to focus on our **Continuous Integration (CI)** process,  
the transformation that took place, and how it eventually became **Continuous Delivery (CD)**.  

**00:54**  
So tonight, I want to give you a snapshot of how that process looked back then —  
let’s start with our **Test Pyramid**.

## 1:06 Test Pyramid

**01:09**  
At that time, we had tons of **unit tests** at the bottom,  
and a large chunk of **UI tests** on top — about **90 in total**.  
Running them took around **three hours**.

**01:27**  
Those UI tests covered complete app journeys, which meant lots of overlap —  
for example, multiple tests repeated sign-in or registration flows.

**01:51**  
All network requests were proxied through **Charles**,  
redirected into a **mock server** written in Java using **MockServerPlayer**.  
The goal was to avoid the non-deterministic world of real network requests.

**02:16**  
However, we didn’t have a clear strategy for maintaining these tests.  
Everyone added their own mocks, which increased complexity and runtime —  
eventually, the suite became slow and unreliable.

## 2:38 The Old Development Pipeline

**02:43**  
Here’s how our pipeline looked back then:

1. Start a new feature and develop it using **TDD**.  
2. Get early feedback from your Product Owner or UX designer.  
3. Once happy, open a **pull request**, which triggered all unit tests  
   and uploaded a build to **Crashlytics Beta**.  
4. A **QA engineer** performed manual testing while a teammate did a **code review**.  
5. After approval from Product, UX, QA, and engineering, the ticket moved to **Approved**.  
6. Overnight, all **90 UI tests** ran on our CI (since they took too long to run during the day).

**03:57**  
The next morning, if everything was green, we considered the feature ready to go.  


## 4:30 Manual Release Process

**04:35**  
Now let’s talk about how releases worked.  
The first time I had to release the app, I wrote a **step-by-step document** with all the actions required.  

**04:50**  
That document had **21 manual steps** just to deliver the app to the App Store.  
Yes — 21 steps.

**05:07**  
This was the setup I found when I joined Moonpig.  
So let’s move on and see how things evolved from there.


## 5:18 Early Problems

**05:21**  
Starting with our testing setup —  
everyone was maintaining their own JSON files and mocks,  
which led to inconsistencies and duplication.  

**05:46**  
We began seeing frequent overnight failures and unclear reasons for them.  
Every morning stand-up started with,  
> “Does anyone know why the navigation test failed last night?”

**06:23**  
We played a guessing game — “Maybe it’s because of the new feature?” —  
but we didn’t really know. Debugging was painful and slow.

**06:32**  
At that point, we had two options:  
either fix the regression and wait overnight again,  
or fix it and rerun everything manually during the day — blocking development.


## 6:50 The 21-Step Release Problem

**06:55**  
The 21-step release process wasn’t just tedious — it slowed everyone down.  
We even started creating **Jira tickets** just for releases.  

**07:26**  
The problem wasn’t the number of steps — it was the **manual** nature of them.  
Mistakes were easy to make.

**07:37**  
One day, I made a pretty embarrassing mistake:  
I asked my manager for the new App Store copy,  
and he sent me a message with a note saying  
> “Check that Apple Pay is added as a payment method.”  
I didn’t read carefully and accidentally **submitted the question itself** in the App Store description.

**08:15**  
Luckily, I noticed it just before pressing *Publish*.  
But it shows how fragile our process was.

## 9:00 Evolution: From UI Tests to Screen Tests

**09:22**  
In September 2017, we started a new feature and realized our old UI tests weren’t reliable.  
We needed something faster and easier to maintain — so we introduced **Screen Tests**.

**09:52**  
These tests focused on individual screens or features rather than full journeys.  
They defined both the **mocked data** and **screen state** using **launch arguments**.  
That made it possible to test specific scenarios like error states.

**10:24**  
The main advantage was speed and isolation —  
no overlapping tests, and easier debugging.  
However, as we built new features, the old Mock Server became obsolete,  
and we eventually stopped maintaining it.

## 11:01 Team Restructuring

**11:07**  
By early 2018, things changed dramatically.  
Our team was reduced from **seven developers to three**.  
Two moved to another company project, and three contractors finished their terms.  

**11:36**  
With only three engineers left, keeping the same testing and release setup would’ve been impossible.  
We had to **rethink everything** — from the test pyramid to the release pipeline.

## 12:10 A More Pragmatic Approach

**12:13**  
We decided to simplify.  
We removed the Mock Server tests and Screen Tests (too costly to maintain),  
and focused on **snapshot testing** and a small set of **end-to-end tests**.

**13:03**  
Snapshot tests are fast, reliable, and close to unit tests —  
perfect for validating UI states visually without heavy setup.  
We used the **Uber-maintained SnapshotTesting** library (originally from Facebook).

**13:42**  
We also kept **nine end-to-end tests**,  
covering the most common user journeys — from browsing to checkout.

**14:15**  
These tests ran against **real environments**,  
but we sped them up by skipping repeated sign-ins and injecting test states via **launch arguments**.

## 15:00 Handling Flaky Tests

**15:42**  
Running tests against real environments came with challenges:  
What if the server was down? What if data changed mid-test?

**16:13**  
To mitigate this, we used **Postman** to run lightweight API tests  
before executing UI tests.  
That way, we knew whether failures were due to our app or the backend.

**17:27**  
We also implemented a **retry policy** —  
if a test action failed, it retried up to three times before marking as failed.  
We used **Fastlane Test Center** with a custom multi-scan action to achieve this.

**18:02**  
Finally, we added **XCTest HTML Reports**,  
which provided clear visual reports with screenshots for every test step.  
It became easy to identify exactly why a test failed.


## 20:00 New Pipeline & Automation

**20:03**  
With all these improvements, our pipeline became much smoother.  
When working on a UI component, snapshot tests ran automatically in the pull request.  

**20:45**  
After approvals from Product, UX, and code review,  
we merged the branch into `develop`, triggering an **integration job**.  
This job ran the full suite — unit, snapshot, and end-to-end tests —  
and automatically uploaded a **beta build** to the team.

**21:53**  
We wanted everyone to always use the latest internal version,  
so builds were deployed automatically for internal testing.

## 22:00 Automating the Release Process

**22:04**  
Before, releases took almost a full day every two weeks.  
Now, with automation, releasing became as simple as pressing two buttons in **TeamCity**:  

- “Release” → builds and uploads to the App Store  
- “Publish” → once approved, pushes it live

**22:31**  
The release job also automatically:  
- Closed completed Jira tickets  
- Created a new Jira release  
- Generated release notes from ticket summaries  
- Uploaded metadata (stored in Git for version control)

**23:31**  
This change meant every metadata update went through a pull request,  
so no more accidental “question text box” errors.

## 24:00 Smarter Release Notes

**24:06**  
Sometimes we didn’t want to announce specific features,  
so we created a **pool of generic App Store messages**.  
If no custom “What’s New” text was set,  
the system picked one automatically from the pool for that release.

## 24:33 Final Steps & Communication

**24:36**  
When the app was approved, we triggered the **Publish** job,  
which tapped the App Store Connect button automatically,  
and sent a Slack message to the team with release details and links to **Crashlytics**.

**25:09**  
All powered by a few plugins, custom Groovy scripts,  
and integrations with Jira and GitHub.

## 25:27 Learnings & Takeaways

**25:30**  
A few lessons from this journey:

- **Best practices** are guidelines, not rules — always adapt them to your context.  
- If you maintain a test suite you don’t trust, stop and fix it — or remove it.  
- Processes exist to help you, not block you. If a process slows you down, change it.

**26:47**  
The goal of automation isn’t to replace people with robots —  
it’s to let people focus on meaningful work.

**27:07**  
Hopefully next year, I’ll be back talking about  
how to replace **robots with people**.  

Thank you for listening!

---

👏 *[Applause]*  
</div>
