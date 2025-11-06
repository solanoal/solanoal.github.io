---
title: "Moonpig"
description: "At Moonpig we've got greetings cards for every single occasion, including birthday cards, anniversary cards, and thank you cards."
headerImage: "/assets/images/projects/moonpig/moonpig-header.jpg"
cardImage: "/assets/images/projects/moonpig.png"
date: "2017-05-01"
---

![Moonpig header](/assets/images/projects/moonpig/moonpig_header.png)
*At Moonpig we've got greetings cards for every single occasion, including birthday cards, anniversary cards, and thank you cards.*

> During my time at **Moonpig**, I joined a team deeply focused on **clean code, TDD, and solid architecture**.  
>  
> This is a reflection on that period — how we modernized the app’s foundations, improved key journeys like the basket and reminders, and learned to deliver quality through craftsmanship and automation.

---

## Joining a Team Focused on Clean Code

When I joined **Moonpig as an iOS Engineer**, the team was deeply committed to **writing clean, maintainable code** and following a strict **Test-Driven Development (TDD)** approach.  
At the time, I was passionate about exploring **iOS architectures**, and Moonpig’s use of **VIPER** in production immediately caught my attention — it was the perfect opportunity to apply clean architecture principles at scale.

My expressed interest in clean code led to a **specialized training program** delivered by [**Codurance**](https://www.codurance.com/industries/retail-ecommerce), taught by [**Pedro Santos**](https://github.com/pedromsantos), who redesigned and ran Codurance’s renowned 3-month **software craftsmanship program** on XP technical practices.

> “Run a software craft program on XP technical practices for Moonpig (Jan–Mar 2018).”  
> — *Pedro Santos, Codurance*


## Increasing Average Order Value (AOV)

When I joined, the **Moonpig app** was designed for a **single-purchase flow** — users could only buy **one card and optionally attach a single gift** (like chocolates or flowers).  
This worked well for simple occasions but **limited the customer’s ability to browse and add multiple products**, and in turn **capped our Average Order Value (AOV)**.

Through collaboration with **product, design, and backend teams**, we re-imagined the shopping experience around a **multi-item basket** system.  
This required significant architectural changes — moving from a **linear “card-centric” flow** to a **more flexible shopping model** that could support cards, gifts, and bundles as independent entities.

From a technical standpoint, this meant:
- Refactoring legacy flows tightly coupled to the checkout process  
- Introducing a **basket domain layer** that managed multiple product types  
- Rebuilding UI components to handle dynamic product additions, quantity updates, and mixed product pricing  
- Implementing analytics hooks to measure **AOV and conversion uplift**

The new basket was **our first large-scale refactor touching every part of the purchase flow**, and it paid off.  
After launch, we observed a **notable increase in AOV**, validating the new multi-item model and paving the way for future growth initiatives like product recommendations and gifting bundles.

<div style="display:flex; gap:12px; align-items:flex-start; flex-wrap:wrap;">

<img src="/assets/images/projects/moonpig/basket.png" alt="Basket" style="width:210px; border-radius:16px; box-shadow:0 2px 16px #0001;" />

<img src="/assets/images/projects/moonpig/basket_2.png" alt="Basket 2" style="width:210px; border-radius:16px; box-shadow:0 2px 16px #0001;" />

<img src="/assets/images/projects/moonpig/basket_3.png" alt="Basket 3" style="width:210px; border-radius:16px; box-shadow:0 2px 16px #0001;" />
</div>

## Driving Retention with Reminders

I delivered the **Reminders journey**, one of Moonpig’s key features for **improving customer retention**.  
It allowed users to save and manage important dates like birthdays and anniversaries, encouraging repeat purchases through timely notifications and personalized suggestions.

<div style="display:flex; gap:12px; align-items:flex-start; flex-wrap:wrap;">

<img src="/assets/images/projects/moonpig/reminders_form.png" alt="Reminders form" style="width:210px; border-radius:16px; box-shadow:0 2px 16px #0001;" />

<img src="/assets/images/projects/moonpig/reminders_list.png" alt="Reminders list" style="width:210px; border-radius:16px; box-shadow:0 2px 16px #0001;" />

<img src="/assets/images/projects/moonpig/reminders_shop.png" alt="Reminders shop" style="width:210px; border-radius:16px; box-shadow:0 2px 16px #0001;" />
</div>

## Adapting to Change and Automating Delivery

When the team was downsized and all QAs were removed, I led an initiative to **reassess and adapt our processes** to maintain quality without dedicated testers.

- Built a **20-minute UI testing suite** covering key user journeys (“red routes”)  
- Added **integration tests** to ensure system reliability  
- Created a **one-click CI/CD delivery pipeline**, fully automating releases and allowing **any engineer to ship the app with a single button press**

This automation drastically **reduced delivery time to zero** and made our release process more resilient and collaborative. 

I gave a talk explaining the approach — [watch or read more →](/post/ios_astronauts_talk)

## Delivering Search in Time for Christmas

A month before **Christmas — Moonpig’s busiest season**, the product team needed a **search feature** to help users find gifts and cards by category.  
However, the backend wasn’t ready, and time was critical.

To deliver before the campaign, I built a **temporary client-side solution** powered by **Firebase Remote Config**, serving JSON files that mimicked our intended backend structure.  
This allowed us to **ship the feature on time**, driving conversion during the campaign.  
The feature was later replaced with a fully backend-driven version.

<div style="display:flex; gap:12px; align-items:flex-start; flex-wrap:wrap;">

<img src="/assets/images/projects/moonpig/search_main.png" alt="Search main" style="width:210px; border-radius:16px; box-shadow:0 2px 16px #0001;" />

<img src="/assets/images/projects/moonpig/search_details.png" alt="Search details" style="width:210px; border-radius:16px; box-shadow:0 2px 16px #0001;" />

<img src="/assets/images/projects/moonpig/search_tags.png" alt="Search tags" style="width:210px; border-radius:16px; box-shadow:0 2px 16px #0001;" />

</div>

## Featured in the App Store

During my time at Moonpig, the app was featured several times in the **App Store**, including as **App of the Day**, recognising the team’s focus on quality, design, and connection.

<div style="display:flex; gap:12px; align-items:flex-start; flex-wrap:wrap;">

<img src="/assets/images/projects/moonpig/app_of_the_day.PNG" alt="Search main" style="width:250px; border-radius:16px; box-shadow:0 2px 16px #0001;" />

</div>

> 🙏 **Final note:**  
> This is where my journey at **Moonpig** came to an end.  
> After two years of building, learning, and growing, I’m truly **grateful for the experience** — for the chance to work with such a **skilled, kind, and passionate team**, and to learn what true **craftsmanship and collaboration** mean in practice.  
>
> It was rewarding to contribute to a product that **brings people closer**, celebrating their most **precious occasions** with something as simple — and meaningful — as a card and a gift.