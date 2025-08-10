---
title: "Process in Elixir"
description: "Notes on Elixir Processes"
date: "Apr 21, 2024"
slug: "elixir-process"
draft: false
tags: ["elixir", "concurrency", "processes", "actor-model", "programming", "otp"]
---

Elixir uses an actor model of concurrency. An actor is an independent process that shares nothing with any other process.

We can use `spawn` to start a new process. it returns a PID.

In Elixir's actor model, processes communicate by sending messages to each other, and the PID acts as the address or identifier for a particular process. We send a message to a process using `send` and receive a message using `receive`.

`send` takes a destination PID and a message to send. Message is usually a tuple or an atom.

Lets write some code to understand it better.

```elixir
defmodule SpawnExample do
  def greet do
    receive do
      { sender, msg} ->
        send(sender, {:ok, "Hello, #{msg}"})
    end
  end
end

pid = spawn(SpawnExample, :greet, [])

send(pid, {self(), "world :wave:"})

receive do
  {:ok, message} ->
    IO.puts(message)
end
```

We call `greet` function in a new process. It returns a PID. We store that PID in `pid` variable. While it is running `greet` function and reaches `receive` block, it hangs there to see if any message is received.

In the next line, we `send` a message to the process with the PID `pid` which will act as a receivers address. The message is a tuple with the first element as the PID of the current process and the second element as the message.

The `receive` block receives the message, and when the pattern is matched, the action is taken. In this case, it sends a message back to the sender.

This time, the `receive` block is in the main process. It receives the message, pattern matches it, and prints the message.
