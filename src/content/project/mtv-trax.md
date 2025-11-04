---
title: "MTV Trax"
description: "MTV TRAX – SET YOUR LIFE TO MUSIC! We make it easy! Every day we deliver fresh tunes while you sleep – you just wake up and press play!."
headerImage: "/assets/images/projects/moonpig/moonpig-header.jpg"
cardImage: "/assets/images/projects/mtv_trax.png"
date: "2015-01-01"
---
---

![MTV Trax header](/assets/images/projects/mtv_trax/musicqubed_header.png)
*MTV TRAX – SET YOUR LIFE TO MUSIC! We make it easy! Every day we deliver fresh tunes while you sleep – you just wake up and press play!.*

> During my time at **Musicqubed**, I worked on **MTV Trax** — a **branded version** of Musicqubed’s white-label music platform.  
>  
> The app delivered **weekly curated playlists** to users based on the latest releases and pop trends.  
>
> This is a reflection on that period — how I helped **modernize the app’s architecture**, **improve navigation and experimentation**, and eventually **grew into the lead iOS engineer**.

---

## Joining Musicqubed and Building MTV Trax

When I joined **Musicqubed** in London, the company was building a **white-label music platform** that powered branded experiences for partners.  
One of these was **MTV Trax**, which soon became the company’s **flagship app** — offering **offline, curated music playlists** delivered weekly to users.

It was my **first role in London**, and a **formative experience** that shaped how I approach **building products, collaborating across teams, and taking ownership**.

<div style="display:flex; gap:12px; align-items:flex-start; flex-wrap:wrap;">

<img src="/assets/images/projects/mtv_trax/playlist_detail.PNG" alt="Playlist detail" style="width:210px; border-radius:16px; box-shadow:0 2px 16px #0001;" />

<img src="/assets/images/projects/mtv_trax/channel_selection.PNG" alt="Channel selection" style="width:210px; border-radius:16px; box-shadow:0 2px 16px #0001;" />

<img src="/assets/images/projects/mtv_trax/profile.PNG" alt="Profile" style="width:210px; border-radius:16px; box-shadow:0 2px 16px #0001;" />

</div>

## Introducing the Coordinator Pattern

At the time, it was still the **early era of iOS development** — many architectural patterns we now take for granted hadn’t yet emerged.  
When I arrived, all navigation was handled directly through <code>UINavigationController</code> and <code>UITabBarController</code>, which had grown into **monolithic classes** with far too many responsibilities.

Inspired by articles from [**Krzysztof Zabłocki**](https://merowing.info/posts/improve-your-ios-architecture-with-flowcontrollers/) and [**Soroush Khanlou**](https://khanlou.com/2015/01/the-coordinator/), I introduced a **Flow Controller / Coordinator architecture**, refactoring the app’s entire navigation layer.

From a technical perspective, this change:

- Made the navigation layer **modular, readable, and maintainable**  
- Simplified **deep linking** across multiple flows  
- Enabled **layout flexibility** between **iPhone** and **iPad**  
- Reduced the complexity of **onboarding** and **content flows**

It was the first time I truly experienced how **architecture decisions** can either scale or hinder a product’s growth — and how crucial it is to invest in **maintainable foundations** early on.

<div style="display:flex; gap:12px; align-items:flex-start; flex-wrap:wrap;">

<img src="/assets/images/projects/mtv_trax/mtv_trax_ipad_layout.png" alt="MTV Trax iPad layout" style="width:450px; border-radius:16px; box-shadow:0 2px 16px #0001;" />

<img src="/assets/images/projects/mtv_trax/mtv_trax_iphone_layout.png" alt="MTV Trax iPhone layout" style="width:210px; border-radius:16px; box-shadow:0 2px 16px #0001;" />

</div>

## Building the Playlist Shop

Our next major initiative was to let users **personalize their experience** by purchasing additional playlists beyond the default weekly ones.

We designed and delivered a **Playlist Shop**, collaborating closely with backend and web teams to build a **hybrid solution** —  
a **native shell** embedding a **web-based shop**, connected via **JavaScript bridges** for communication between native and web layers.

This architecture allowed us to:

- Reuse **backend and web logic** across multiple branded apps  
- Deliver updates faster via **server-side changes**  
- Maintain a **native user experience** while integrating complex purchase flows

## Introducing A/B Testing and Experiments

At the time, **Musicqubed** didn’t have a system for **feature flags** or **A/B testing**.  
To support product experiments, I built a **lightweight in-house experimentation framework**, driven by **config files and weighted distributions**.

Even though it was simple, it enabled the team to:

- Roll out **feature variations** to specific user segments  
- Run **small-scale experiments** safely  
- Gather **engagement and retention data** to inform decisions  

This was an important step toward **data-driven product development**, allowing us to validate ideas before committing full development effort.

## Becoming Lead iOS Developer

After two years, I became the **lead iOS developer**, responsible for maintaining the app and delivering new functionality.  

Working at **Musicqubed** was a defining chapter of my career — it taught me how to **take ownership**, **architect for growth**, and **deliver user-focused features** in a fast-paced environment.

<div style="position:relative; width:100%; padding-top:56.25%;">
  <iframe
    src="https://www.youtube.com/embed/nC7fsVgeEnM"
    title="MTV Trax - Hottest music delivered every day"
    allowfullscreen
    frameborder="0"
    scrolling="no"
    style="position:absolute; top:0; left:0; width:100%; height:100%; border:0;"
  ></iframe>
</div>


> 🙏 **Final note:**  
> My journey at **Musicqubed** eventually came to an end after two and a half years, but I’ll always be grateful for the experience.  
>  
> It was my **first job in London** — and my **first time working in my second language**, which made the experience even more special.
>  
> I’m especially thankful to [**Alasdair McCall**](https://alasda.ir/) and [**Daniel Devesa Derksen-Staats**](https://accessibilityupto11.com/about/) — not only brilliant engineers, but friends for life.
