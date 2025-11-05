---
layout: ../../layouts/post.astro
title: Cross-Platform Evolution at Memrise · Part 1 – Finding Parity
description: First chapter of a six-year study case on how our team at Memrise evolved cross-platform development — introducing Kotlin Multiplatform to unify spaced-repetition logic across iOS, Android, and Web.
dateFormatted: January, 2024
---

## Introduction

Sometimes in this industry, people don’t stay long enough in a company to see how a solution evolves — how an idea matures, adapts, and is eventually replaced by something different.  

In my case, I’ve had the opportunity to watch one evolve over **six years**: the introduction and growth of **Kotlin Multiplatform (KMP)** libraries at **Memrise**.

We often chase the perfect solution — the “one framework to rule them all” that promises to solve every single one of our problems.
But reality is never that easy. A truly valuable solution reveals itself **over time**, not in a “to-do list” demo.  

Over the years, I’ve seen debates come and go:
- Should we keep the UI native and share only the business logic?
- Should we go fully cross-platform with a single code base?
- Does writing once actually make us faster?

All of these approaches aim to solve the same thing — **speed of delivery**.  
But being “slow” is not a problem by itself; it’s usually the **symptom** of a deeper issue.  
Sometimes the answer *is* to use a cross-platform solution. Other times, it’s to simplify and focus.  
In my experience, what works best depends entirely on your **context** and **team setup**.

This series is my reflection on that journey — the **cross-platform evolution** we went through at Memrise, from our first KMP library to the architectural decisions that shaped the product years later.
I’ve structured this series around **context**, **problem**, and **solution**, because each of these parts is crucial to understanding not only *what* we built, but *why* we made those decisions at each stage.

---

## Context - Rapid expansion

The use case begins when I joined **Memrise**, a language-learning platform that helps users acquire new vocabulary using spaced-repetition algorithms, immersive real-world content, and in-app communication tools.  
(You can learn more about the story behind Memrise [here](https://www.memrise.com/blog/the-memrise-story).)

At that time, the company was in a period of rapid expansion. When I joined, each platform — **iOS**, **Android**, and **Web** — had grown to around 6–8 developers. Each team had its own delivery pace, roadmap, and release process.

As a result, the three codebases started to evolve at different speeds.  
We were running continuous A/B tests, adding new feature flags, and iterating quickly which slowly started to create **parity issues** between platforms.

---

## Problem - Lack of Parity

Sooner or later, the product began to suffer from a **lack of parity**.  
Users noticed that the **Web app** offered a different experience than the **mobile apps**, and even between **Android** and **iOS**, there were visible inconsistencies.

Examples included:

- Different logic for marking answers as correct or incorrect.  
- Variations in how many points a correct answer awarded.  
- Inconsistent rules determining which test to show next.

To fix this, we defined the **critical points of parity** — the key elements of the learning experience that should behave identically across all platforms.

- Which items should the user see next?
- Which tests should be shown for each item?
- When should a session finish?
- How fast should an item grow (progression curve)?

---

## Solution — Unifying the Learning Experience

The decision was to **unify the core learning experience** by consolidating the “parity-critical” logic into a shared cross-platform library that could be used by **iOS**, **Android**, and **Web** teams.

We chose to experiment with **Kotlin Multiplatform (KMP)** and introduced a shared library written in Kotlin and integrated across all three platforms.

It became a cross-platform learning engine powering the presentation and business logic of learning sessions, allowing us to write key business rules once and share them across clients.  
It was not designed to handle cross-platform networking, persistence, or UI — only the **core learning logic** that defined the user’s experience.

<div style="width: 100%; max-width: 100%; gap: 12px;">
  <img 
    src="/assets/images/projects/memrise/kmp_learning_sessions.png" 
    alt="KMP learning sessions"
    style="width: 100%; height: auto; border-radius: 0; display: block;"
  >
</div>

---

## ✅ Outcome

What started as an experiment slowly became part of the product.  
After solving some memory management issues and stabilising the library, the KMP library was fully adopted across all platforms.  

### 👍 Pros
- **Write the core learning logic once:** All the business rules lived in a single place.  
- **Parity across platforms:** iOS, Android, and Web followed exactly the same behaviour.  
- **Shared understanding:** Everyone discussed learning logic in the same language.  
- **Better test coverage:** Shared tests and scenarios helped catch regressions earlier.  

### ⚠️ Trade-offs
- **Learning curve:** Getting comfortable with Kotlin Multiplatform took time, especially for iOS and Web engineers.  
- **Maintenance overhead:** Updating dependencies, handling releases, and managing the library version across projects required extra coordination.  
- **Breaking changes:** Sometimes you wanted to build a feature, but another team had introduced a breaking change in the shared module — so you’d have to wait for fixes or coordinate a joint release.  
- **Harder than native:** Debugging through Kotlin/Native and dealing with memory or threading issues on iOS wasn’t always straightforward.  
- **Release sync:** Even small updates meant synchronising all three platforms to bump versions and retest.

Despite the extra complexity, the trade-off was worth it for our context at that time.  

---

*Next up → [Part 2 – Rebuilding Together](/post/crossplatform_case_study_part_2)*
