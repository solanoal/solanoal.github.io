---
title: "Memrise"
description: "Learn a language as it's used now. Immerse yourself in lessons that feature videos of native speakers, so you start speaking real life language, fast."
headerImage: "/assets/images/projects/memrise/memrise-header.jpg"
cardImage: "/assets/images/projects/memrise.png"
date: "2019-02-01"
---

![Memrise header](/assets/images/projects/memrise/memrise_header.png)
*Learn a language as it's used now. Immerse yourself in lessons that feature videos of native speakers, so you start speaking real life language, fast.*

> During my seven years at **Memrise**, I worked across design systems, growth experiments, cross-platform architecture, and AI-driven features.  
>  
> This is a reflection on that journey — the projects, challenges, and lessons that helped shape the product and my own growth as an engineer.

---

## Joining During a Major Rebrand

When I joined **Memrise as a Senior iOS Engineer**, the company was in the middle of a complete rebrand — shifting from a playful space theme to a more abstract, organic look with imperfect blobs and a bright yellow palette.

My first contribution was to proactively **create a Gallery app** showcasing all our new UI components and to implement **snapshot testing** to ensure visual consistency across the system design.

<div style="display:flex; gap:12px; align-items:flex-start; flex-wrap:wrap;">

<img src="/assets/images/projects/memrise/gallery_list_of_ui_components.png" alt="Gallery list of UI components" style="width:210px; border-radius:16px; box-shadow:0 2px 16px #0001;" />

<img src="/assets/images/projects/memrise/gallery_color_scheme.png" alt="Gallery color scheme" style="width:210px; border-radius:16px; box-shadow:0 2px 16px #0001;" />

<img src="/assets/images/projects/memrise/gallery_download_button_example.png" alt="Gallery download button example" style="width:210px; border-radius:16px; box-shadow:0 2px 16px #0001;" />
</div>

## Building Modular Growth Systems

Next, I joined the **Revenue & Growth team**, where we adopted an **experimentation-first mindset**.
We developed a **modular subscriptions page** that could be remotely configured — allowing our marketing team to A/B test different layouts, reorder content blocks, and measure conversions without new app releases.
This project led to a **0.5% increase in conversion rate**.

<div style="display:flex; gap:12px; align-items:flex-start; flex-wrap:wrap;">

<img src="/assets/images/projects/memrise/gallery_plans_page_pricing_module.png" alt="Plans page pricing module" style="width:210px; border-radius:16px; box-shadow:0 2px 16px #0001;" />

<img src="/assets/images/projects/memrise/plans_page_modular_v1.png" alt="Plans page modular v1" style="width:210px; border-radius:16px; box-shadow:0 2px 16px #0001;" />

<img src="/assets/images/projects/memrise/plans_page_modular_v2.png" alt="Plans page modular v2" style="width:210px; border-radius:16px; box-shadow:0 2px 16px #0001;" />
</div>

This modular philosophy proved so effective that it was later extended to the **Home screen**.

<div style="display:flex; align-items:center; gap:40px;"> <img src="/assets/images/projects/memrise/home_modular.png" style="width:220px; border-radius:16px; box-shadow:0 2px 16px #0001;" /> <p>The modular approach empowered rapid experimentation and alignment across platforms.</p> </div>


## Unifying Learning Logic Across Platforms


As Memrise scaled, **platform parity** became a challenge.
We introduced **Kotlin Multiplatform (KMP)** to unify our core learning logic — including the spaced repetition algorithm and learning session flow — ensuring consistent experiences across iOS, Android, and Web.

This decision improved **cross-platform feature parity**, at the cost of some **engineering overhead** to maintain it. 

[Read more about our crossplatform journey →](/post/crossplatform_case_study_part_1)


## Delivering the “Communicate” Pillar

Memrise’s pedagogy is built on three pillars: **Learn**, **Immerse**, and **Communicate**.

<div style="width:100%; max-width:100%; display:grid; gap:12px;">
  <img src="/assets/images/projects/memrise/three_pillars.webp" alt="Enjoystr iPad" style="display:block; width:100%; height:auto; border-radius:16px; box-shadow:0 2px 16px #0001;">
</div>

> “Each of these legs is crucial. Without one of them the stool would topple.”  
> — *[The Memrise Story](https://www.memrise.com/blog/the-memrise-story)*


We had strong **Learn** and **Immerse** pillars (with local video immersion), but struggled to bring **Communicate** to life — until the rise of **AI**.
I led the **mobile implementation** of our first AI conversation feature, closely collaborating with the web team.
We chose a **hybrid WebView + native** approach to launch quickly and bring conversational AI to users ahead of competitors.

<div style="display:flex; align-items:center; gap:40px;"> <img src="/assets/images/projects/memrise/communicate_test.png" style="width:220px; border-radius:16px; box-shadow:0 2px 16px #0001;" /> <p>This project marked Memrise’s transition into AI-driven learning experiences, completing the three pillars of our pedagogy.</p> </div>

We finally delivered all three pillars — **Learn**, **Immerse**, and **Communicate** — completing the Memrise learning experience.

<div style="display:flex; gap:12px; align-items:flex-start; flex-wrap:wrap;">

<img src="/assets/images/projects/memrise/learn_intro.png" alt="Learn intro" style="width:210px; border-radius:16px; box-shadow:0 2px 16px #0001;" />

<img src="/assets/images/projects/memrise/immerse_intro.png" alt="Immerse intro" style="width:210px; border-radius:16px; box-shadow:0 2px 16px #0001;" />

<img src="/assets/images/projects/memrise/communicate_intro.png" alt="Communicate intro" style="width:210px; border-radius:16px; box-shadow:0 2px 16px #0001;" />

</div>


## Introducing “Scenarios” and Unifying Content

To connect words, videos, and conversations, we restructured our content model.  
We removed rigid “levels” and introduced **Scenarios** — dynamic, context-based content units.  
To ensure all platforms evolved together, even with an unbalanced team (more iOS than Android developers), we added another **Kotlin Multiplatform** module. 

[Read more about our crossplatform journey →](/post/crossplatform_case_study_part_2)

<div style="display:flex; gap:12px; align-items:flex-start; flex-wrap:wrap;">

<img src="/assets/images/projects/memrise/scenarios_list.png" alt="Scenarios list" style="width:210px; border-radius:16px; box-shadow:0 2px 16px #0001;" />

<img src="/assets/images/projects/memrise/scenarios_detail.png" alt="Scenarios detail" style="width:210px; border-radius:16px; box-shadow:0 2px 16px #0001;" />

</div>

## Improving Retention and User Engagement

With the three pillars in place, we focused on improving **Day 1 retention**.  
We experimented with:

- **Weekly activity goals**  
- **Mini-player recommendations** based on progress  
- **Points and progression systems**

<div style="display:flex; gap:12px; align-items:flex-start; flex-wrap:wrap;">

<img src="/assets/images/projects/memrise/experience_core_loop.webp" alt="Experience core loop" style="width:210px; border-radius:16px; box-shadow:0 2px 16px #0001;" />

<img src="/assets/images/projects/memrise/experience_points_system.png" alt="Experience points system" style="width:210px; border-radius:16px; box-shadow:0 2px 16px #0001;" />

</div>

### The “Big 5” Redesign and Embracing SwiftUI

After several rounds of experimentation that helped refine the user experience but didn’t quite get us where we wanted to be, we took what we learned and built the **Big 5** — a redesign focused on strengthening the connection across the three pillars without changing their core foundation.  

We introduced **Wordlists**, a **Learn Queue**, a **My Journey**, **My Words** and **My activities** section to help users visualize their progress and feel guided through their learning path.

To move fast and stay efficient, we:

- Fully embraced **SwiftUI** for building screens and components  
- Migrated from **CocoaPods** to **Swift Package Manager (SPM)** to enable faster builds and reliable previews  
- Integrated **Cursor**, **Claude Code**, **Figma**, and **Jira MCP** to streamline collaboration between design and engineering  

> 💡 **Note:**  
> Over the last six weeks, these efforts helped us grow **NURR** (our internal metric roughly equivalent to **Day 1 retention**) by **30%**, driven by continuous experimentation and iteration.


<div style="display:flex; gap:12px; align-items:flex-start; flex-wrap:wrap;">

<img src="/assets/images/projects/memrise/big_5_home.png" alt="Big 5 home" style="width:210px; border-radius:16px; box-shadow:0 2px 16px #0001;" />

<img src="/assets/images/projects/memrise/big_5_learn_q.png" alt="Big 5 learn q" style="width:210px; border-radius:16px; box-shadow:0 2px 16px #0001;" />

<img src="/assets/images/projects/memrise/big_5_wordlists.png" alt="Big 5 wordlists" style="width:210px; border-radius:16px; box-shadow:0 2px 16px #0001;" />

<img src="/assets/images/projects/memrise/big_5_immerse.png" alt="Big 5 immerse" style="width:210px; border-radius:16px; box-shadow:0 2px 16px #0001;" />

<img src="/assets/images/projects/memrise/big_5_communicate.png" alt="Big 5 communicate" style="width:210px; border-radius:16px; box-shadow:0 2px 16px #0001;" />

<img src="/assets/images/projects/memrise/big_5_buddies.png" alt="Big 5 buddies" style="width:210px; border-radius:16px; box-shadow:0 2px 16px #0001;" />

<img src="/assets/images/projects/memrise/big_5_my_activities.png" alt="Big 5 my activities" style="width:210px; border-radius:16px; box-shadow:0 2px 16px #0001;" />

<img src="/assets/images/projects/memrise/big_5_my_journey.png" alt="Big 5 my journey" style="width:210px; border-radius:16px; box-shadow:0 2px 16px #0001;" />

</div>

## Featured in the App Store

Over the years, **Memrise** has been regularly featured by Apple in the App Store — across both **editorial collections** and **top charts** — highlighting its engaging design, innovative learning approach, and use of real-world content.  

It has been featured in categories such as, **Editor’s Choice**, **Apps We Love**, **Learn a New Language** and **Best of the App Store**.

<div style="display:flex; flex-wrap:wrap; justify-content:left; gap:20px; margin-top:16px;">

  <div style="display:flex; flex-direction:column; align-items:left; text-align:left; width:300px;">
    <a href="https://apps.apple.com/us/iphone/story/id1407664092" target="_blank">
      <img src="/assets/images/projects/memrise/appstore_featured_2.webp" 
           alt="App Store feature — Learn a Language With Fun Video Clips" 
           style="width:100%; border-radius:16px; box-shadow:0 2px 16px #0001; margin-bottom:4px;" />
    </a>
    <div style="font-size:0.85rem; color:#666; line-height:1.7;">
      <strong>Apps We Love</strong><br />
      Learn a Language With Fun Video Clips<br />
      <em>Memrise makes learning a laughing matter.</em>
    </div>
  </div>

  <div style="display:flex; flex-direction:column; align-items:left; text-align:left; width:300px;">
    <a href="https://apps.apple.com/us/iphone/story/id1293122449" target="_blank">
      <img src="/assets/images/projects/memrise/appstore_featured_1.webp" 
           alt="App Store feature — Learn Real Language from Locals" 
           style="width:100%; border-radius:16px; box-shadow:0 2px 16px #0001; margin-bottom:4px;" />
    </a>
    <div style="font-size:0.85rem; color:#666; line-height:1.7;">
      <strong>How to</strong><br />
      Master Your Memory<br />
      <em>Tips and techniques from the founder of Memrise.</em>
    </div>
  </div>

</div>

<div style="display:flex; flex-direction:column; align-items:center; text-align:center; margin:32px 0;">
  <div style="display:flex; align-items:center; gap:8px; font-weight:600; font-size:1.2rem; color:#555;">
    <strong>Editors’ Choice</strong>
  </div>
  <p style="max-width:580px; margin-top:16px; font-size:0.95rem; line-height:1.6; color:#666; text-align:left">
    With <strong>Memrise</strong>, language learning’s a game — the irresistible kind that anyone can pick up and play. 
    It teaches you everyday words and phrases — perfect for your next trip abroad — and reinforces them with fun 
    quizzes and playful images. We get an awesome sense of progress every time we use it.
  </p>
</div>

---

> 🙏 **Final note:**  
> This is where I leave **Memrise**, after almost seven incredible years.  
> I’m proud of what we built together, and I truly hope the product continues to achieve its mission — *to enrich the world by enriching people’s minds*.