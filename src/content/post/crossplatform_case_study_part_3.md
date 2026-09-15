---
layout: ../../layouts/post.astro
title: Cross-Platform Evolution at Memrise · Part 3 – Knowing When to Let Go
description: Final chapter of our six-year cross-platform journey at Memrise — how going online-only changed the value of one KMP library, and how AI helped us migrate its API layer in a month.
dateFormatted: September, 2026
---

*← Previous: [Part 2 – Rebuilding Together](/post/crossplatform_case_study_part_2)*

*← Start here: [Part 1 – Finding Parity](/post/crossplatform_case_study_part_1)*

---

## Introduction — Revisiting a Good Decision

In [Part 2](/post/crossplatform_case_study_part_2), we introduced a second **Kotlin Multiplatform (KMP)** library to help an unevenly staffed mobile team deliver a new learning experience together.

With three iOS developers and one Android developer, sharing the core of that experience allowed the Android engineer to focus on the UI. We accepted extra work on iOS because it helped the mobile team deliver together. Looking back, the successful Beta release justified that decision.

But a successful release is one point in the life of a solution. Over the following years, the product and the team changed again. We needed to revisit what we were sharing, what it cost us, and whether it still helped us move faster.

## Context — Going Online-Only

Product decided to move to an **online-only experience**. That changed the responsibilities of the newer KMP library significantly.

When we built it, the library contained use cases, repositories, networking, persistence, and the strategies that decided how to use those data sources. It gave both mobile platforms a shared foundation for managing the new content structure.

After the move online, its role had narrowed to **an API layer**. Much of the complexity that had justified that shared foundation was no longer part of the problem we needed to solve.

<figure>
  <a href="/assets/images/projects/memrise/kmp_online_only.png" target="_blank" rel="noopener" aria-label="Open the full-size diagram of the library's changing responsibilities">
    <img src="/assets/images/projects/memrise/kmp_online_only.png" alt="The second KMP library shrinks from a shared domain with persistence, networking and data policies to an API layer after the product moves online-only." width="1800" height="2280" loading="lazy" decoding="async" style="width: 100%; height: auto; border-radius: 0; margin: 0;" />
  </a>
  <figcaption>The second library's responsibilities narrowed, while its maintenance and release overhead remained.</figcaption>
</figure>

The team had changed too. **Android had grown from one engineer to three**, so the imbalance that shaped our original decision had eased.

We were still maintaining two KMP libraries. We also had years of experience with the costs involved, including the memory management issues on iOS and the period when Kotlin/Native limitations prevented us from building the app on M1 Macs. Those earlier difficulties were part of the history of the investment, alongside the benefits it had delivered.

Meanwhile, **AI tools were becoming part of development**, opening up another way to approach migration work.

## Problem — The Overhead Had Outlasted the Need

The newer library still brought the overhead of a shared dependency: maintenance, versioning, release cycles, and coordination around breaking changes.

Previously, we had accepted those costs to share a substantial part of the product and help a smaller Android team keep pace. Now we were paying them for a much narrower API layer, with a more balanced mobile team.

Adding features was less straightforward than we wanted, and the team was moving more slowly than we needed. The question was whether this particular library still earned its place in our architecture.

**The context that made it valuable had changed.** We needed to evaluate it against our current needs.

## Solution — Retiring One Library

We decided to **remove the newer KMP library and migrate its API layer out of it**. MemLearning, our original shared learning library, remained.

That distinction matters when looking at the whole journey. MemLearning had been introduced to keep learning behaviour consistent across platforms. The second library had helped us rebuild the product with an uneven team. Each had its own purpose, and we could reconsider one without treating both as a single architectural commitment.

We used **AI to help with the migration**. It made the work more manageable, and we completed the API migration in **one month**.

For me, the order of those decisions matters: first understand why the library should go, then use the available tools to help carry out the change. AI helped us make the transition; the product and team context gave us the reason to make it.

<figure>
  <a href="/assets/images/projects/memrise/kmp_library_migration.png" target="_blank" rel="noopener" aria-label="Open the full-size diagram of the KMP library migration">
    <img src="/assets/images/projects/memrise/kmp_library_migration.png" alt="Before migration, Android and iOS use two KMP libraries. After a one-month AI-assisted migration, each platform owns its API layer and both retain the shared MemLearning library." width="1800" height="2610" loading="lazy" decoding="async" style="width: 100%; height: auto; border-radius: 0; margin: 0;" />
  </a>
  <figcaption>We retired the second KMP library and kept MemLearning's shared learning logic.</figcaption>
</figure>

## Outcome — A Simpler Stack and Faster Delivery

Removing the library substantially improved the team's delivery speed. We had one fewer shared library to maintain, and changes to that API layer no longer had to go through its separate release cycle.

There was still a trade-off. Moving the API layer out of the shared library meant giving up that single implementation across the mobile apps. We accepted that in the context of an online-only product and a larger Android team.

## Looking Back Across Six Years

Each stage of this journey started with a different problem:

- **A large team needed parity.** MemLearning brought the core learning rules together across iOS, Android, and Web.
- **An uneven mobile team needed to deliver a new experience.** A second KMP library let the iOS engineers take on more shared work and helped Android catch up.
- **An online-only product and a more balanced team needed simpler delivery.** Retiring that second library reduced overhead that no longer brought enough value.

<figure>
  <a href="/assets/images/projects/memrise/kmp_six_year_evolution.png" target="_blank" rel="noopener" aria-label="Open the full-size diagram of Memrise's cross-platform evolution">
    <img src="/assets/images/projects/memrise/kmp_six_year_evolution.png" alt="Three stages of cross-platform evolution: MemLearning for parity across iOS, Android and Web; a second shared mobile domain for an uneven team; then platform-owned API layers with MemLearning retained." width="1800" height="3015" loading="lazy" decoding="async" style="width: 100%; height: auto; border-radius: 0; margin: 0;" />
  </a>
  <figcaption>Each stage answered a different problem. Stages 2 and 3 focus on the mobile architecture.</figcaption>
</figure>

This is why I find it more useful to evaluate architecture over years of product work than through a small demo. The same solution can help a team at one stage and slow it down at another.

When a team is moving slowly, I want to understand what is making the work slow before choosing a framework. At Memrise, that led us to introduce shared code, expand it, and eventually remove some of it.

Knowing when to let go meant recognising that a solution had served its purpose, and giving ourselves room to make a new decision.

---

*← Previous: [Part 2 – Rebuilding Together](/post/crossplatform_case_study_part_2)*

*← Back to the beginning: [Part 1 – Finding Parity](/post/crossplatform_case_study_part_1)*
