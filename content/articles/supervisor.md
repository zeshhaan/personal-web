---
title: "Supervisor"
description: "Notes on supervisor"
date: "No 4, 2023"
slug: "supervisor"
draft: true
tags: ["elixir", "otp", "supervisor", "fault-tolerance", "programming", "concurrency"]
---

Supervisor is a process control system. In Elixir, processes are managed by a supervisor.

Supervisor is a process that manages other process. If a process crashes, it's supervisor will restart it.

Process is restarted with its initial state.

Supervisor lays the foundation stone for Elixir's fault tolerance.
