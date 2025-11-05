---
layout: ../../layouts/post.astro
title: Cross-Platform Evolution at Memrise · Part 2 – Rebuilding Together
description: Second part of a six-year study case on Memrise’s cross-platform journey — rebuilding the app’s new core experience entirely in Kotlin Multiplatform after a major team restructure.
dateFormatted: March, 2025
---

*← Previous: [Part 1 – Finding Parity](/post/crossplatform_case_study_part_1)*

---

## Introduction - A New Chapter for KMP

Some time had passed since we introduced our first **Kotlin Multiplatform (KMP)** library.  
KMP itself had become **stable** — you can read JetBrains’ announcement [here](https://blog.jetbrains.com/kotlin/2023/11/kotlin-multiplatform-stable/).  
Our work at Memrise was even featured in the official [KMP case studies](https://www.jetbrains.com/help/kotlin-multiplatform-dev/case-studies.html?utm_medium=button&utm_campaign=kmp-stable&utm_source=kotlinblog).  
You can also find a detailed write-up from our team [on the Memrise Engineering blog](https://engineering.memrise.com/kotlin-multiplatform-memrise-3764b5a4a0db).

**MemLearning** had become a solid foundation of our learning experience — all teams contributed to it, gradually migrating more core functionality into the shared library.

---

## Context - Smaller Team, Bigger Change

Then the world changed.  
A pandemic hit, and like many companies, Memrise went through a period of restructuring.  
We shifted from a large, fast-growing team to a more stable setup under a hiring freeze.  

Our frontend team now consisted of:
- **3 iOS developers**  
- **1 Android developer**  
- **3 Web engineers**

At the same time, Product wanted to **restructure our course content** to better reflect our pedagogical principles.  
That meant rebuilding a big part of the app’s foundation — how language courses were structured and delivered.


## Problem

We were redesigning a major part of the learning experience and wanted to launch it as a **Beta release**.  
To ensure a smooth user journey, we needed the new experience to go live on **all platforms simultaneously**, so users switching between devices would see consistent content and behavior.  

The challenge was clear:  
> Our team structure wasn’t balanced — iOS had three developers, Android only one, and Web three.  
We needed a way to **move at the same speed** without burning out one side of the team.


## Solution — A New KMP Library

The solution was to introduce a **new KMP library**, this time built mainly by the **iOS team** so the Android engineer could focus on the UI layer.  
That allowed us to move slower individually but faster **as a single team**.

We implemented the **entire domain of the new structure** inside this new KMP library:

- **Use cases** defining the main user interactions  
- **Repositories** orchestrating data access  
- **Data sources** handling persistence (SQLite) and networking (using **Ktor**)  
- **Strategies** deciding which data source to use  
- **Caching policies** for performance and offline behavior

Essentially, this library became the **new shared core** for the next-generation learning experience.

<div style="width: 100%; max-width: 100%; gap: 12px;">
  <img 
    src="/assets/images/projects/memrise/kmp_domain.png" 
    alt="KMP learning sessions"
    style="width: 100%; height: auto; border-radius: 0; display: block;"
  >
</div>

---

## Outcome - Building Together, Shipping Together

We delivered the **Beta version successfully**, and looking back, it proved to be a great decision.  
While the **Web** team didn’t adopt the new KMP, it worked perfectly for **iOS** and **Android**, keeping both in sync during the rebuild.

KMP helped us operate **as one team of four**, rather than “three iOS and one Android.”  
We solved shared problems once — like **long loading times**, which we fixed using pagination and smarter caching.

### 👍 Pros
- **Unified delivery:** The new learning experience was released consistently across platforms.  
- **Team alignment:** We worked as a single mobile team instead of separate iOS/Android silos.  
- **Shared fixes:** Issues solved once in KMP benefited both platforms immediately.  
- **Performance gains:** Pagination and caching improvements reduced load times noticeably.

### ⚠️ Trade-offs
- **Two KMP libraries:** Maintaining both the old and new shared modules added overhead.  
- **Slower iteration:** Adding new functionality required full release cycles, versioning, and coordination.  
- **Breaking changes:** Updating the shared library often meant dealing with compatibility issues before development could continue.  
- **Tooling pain:** For almost a year, we couldn’t build the iOS app on **M1 Macs** due to Kotlin/Native limitations.  
- **Higher maintenance cost:** KMP builds and dependency updates demanded extra attention compared to native development.

Despite those challenges, the outcome was worth it.  

---

*← Previous: [Part 1 – Finding Parity](/post/crossplatform_case_study_part_1)*  
*Next up → [Part 3 – Knowing When to Let Go](/post/crossplatform_case_study_part_3)*
