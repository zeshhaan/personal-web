---
title: "List vs Tuples"
description: "Notes on list and tuples in Elixir"
date: "Mar 18, 2024"
slug: "tuple-and-list-in-elixir"
draft: false
tags: ["elixir", "data-structures", "programming", "functional-programming", "tuples", "lists"]
---

Lists are of the form `[1,2,3,4,5]`
And Tuples are of the form `{1,2,3,4,5}`

#### But what's the difference?

Lists are stored in memory as linked lists. Lists are dynamic sized containers.
Tuples are fixed sized containers.

#### So when to use what?

If i have a data that is not going to change, I would use a tuple. If I have a data that is going to change, I would use a list.
