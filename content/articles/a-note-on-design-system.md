---
title: "What you shouldn't be doing with design system"
description: "A brief note on what you shouldn't be doing with design system. A learning from my experience."
date: "April 25, 2023"
slug: "what-you-shouldnt-be-doing-with-design-system"
draft: false
---

A brief note on what you shouldn't be doing with design system. A learning from my experience.

### What is a design system?

A design system is a centralized collection of guidelines, components, and tools that establish and maintain consistency in design and development across a project or organization. It includes principles, UI components, styles, and documentation, serving as a blueprint to create user interfaces.

### What you should be doing?

When your have a design system, you can easily code those components from scratch using a unstyled component library, say Radix and then style using TailwindCSS to match your design system. Although this is a lot of work, it is worth the effort. This will give you a lot of control over the UI and you can easily match the designs pixel perfect.

### What you shouldn't be doing?

What you shouldn't be doing is to use a styled component library. This will introduce lot of headaches and bottlenecks when trying to match with the designs. You will be forced to use the components as is, and you will have to override the styles to match your design system, often times this will result in dirty code and hacks depending upon how deeply the component is pre-styled. This is a lot of work and you will end up with a lot of unused styles. This might seem good when you want a product up and running quickly, but it will be a nightmare to maintain in the long run.

### My experience

We struggled with this in our team when we started building v2 our product. We had a design system, but we used a styled component library. We had to override a lot of styles and though we achieved the desired result, it was not looking perfect. There was some or other imperfection in the UI. It wasn't a pleasant experience to design for a product that is used by millions of users. When we look at other UI's and how polished they are, we feel the itch to make ours look like that. But we can't, because it is a never ending process and not worth the effort. And we're already too late. We have to live with it.
