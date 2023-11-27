---
title: "Why Elixir?"
description: "A brief introduction to Elixir and why I chose it as my primary programming language."
date: "Nov 23, 2023"
slug: "why-elixir"
draft: false
---

I got to know Elixir when stumbling upon Stackoverflow Survey 2021. I was impressed by the metrics and the fact that it was the most loved programming language. I was curious to know more about it and started learning it. I started to follow #myElixirStatus in Twitter, and joined the folks at Slack, Discord and the official forum. I found the community very active and welcoming newbies. I briefly took part in [Dockyard's](https://academy.dockyard.com/){:target="\_blank"} beta cohort lead by [Brooklin Myers](https://twitter.com/BrooklinJMyers){:target="\_blank"} last year but got quite busy with my full time job and other commitments. During those brief period of time, I took a lot of motivation and learning with me.

This write up is a brief introduction to Elixir and why I chose to invest my time in it. I got to ask this question a lot of times, and I thought it would be a good idea to write it down.

### Funtional Programming

I found functional programming paradigm a breeze to work on. In Object Oriented Programming, we have to think about the state of the object and how it changes over time. much of our time is spent calling methods in objects and passing them other objects. In functional programming, we don't have to worry about the state of the object. We just have to think about the input and the output. This gives me explicit control. Also, what this means is that functions are first class citizens, means functions can be passed as arguments to other functions.

### Immutable Data

In Elxir, as with other functional programming languages, data is immutable. This means that once a variable is assigned a value, it cannot be changed. This makes the code more predictable and easier to reason about. This also makes the code more readable.

### Pattern Matching

In Elixir, functions can pattern match on its arguments values. This means that we can write multiple function clauses with different patterns and Elixir will choose the first one that matches.

### Concurrency

Elixir is built on top of Erlang's virtual machine. Erlang was built to handle concurrency. Elixir inherits this feature. Elixir has a built in library called OTP (Open Telecom Platform) which is a set of libraries and design principles that help you build fault tolerant, distributed applications.

### Phoenix

I don't miss NextJS/NuxtJS anymore. Phoenix is a web framework built on top of Elixir.
