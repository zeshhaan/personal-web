---
title: "Stumbling upon elixir macros"
description: "A simple example of how macros can be used in Elixir"
date: "May 27, 2024"
slug: "elixir-macros"
draft: false
updated_at: "May 31, 2025"
update_reason: "Fix typo"
tags: ["elixir", "macros", "programming", "functional-programming"]
---

Continuing my elixir journey, I stumbled upon elixir macro while trying to program a function that converts number to string.

I initially implemented it like this:

```elixir
defmodule Stringify do
    def number_to_string(n) do
        n |> to_string
    end
end
```

But i got to see a clever refinement over this

```elixir
defmodule Stringify do
    def number_to_string(n), do: "#{n}"
end
```

You can also use sigils to achieve the same result

```elixir
defmodule Stringify do
    def number_to_string(n), do: ~s(#{n})
end
```

Hold on, there are more clever ways like this

```elixir
defmodule Stringify do
    def number_to_string(n), do: Kernel.inspect(n)
end
```

But I found out a more clever way to do this using macros

```elixir
defmodule Stringify do
    defdelegate number_to_string(n), to: Kernel, as: :inspect
end
```

and now you can also use `to_string/1` function from `Kernel` module

```elixir
defmodule Stringify do
    defdelegate number_to_string(n), to: Kernel, as: :to_string
end
```

The `defdelegate` macro is used to delegate the implementation of `number_to_string/1` to another function. In this case, we are delegating it to the `Kernel.to_string/1` function.

So, here, `to: Kernel` specified that the target module for the delegation is `Kernel`

`as: :to_string` tells the `defdelegate` macro that the function to be delegated to is named `:to_string` (an atom representing the `to_string/1` function in the `Kernel` module).

So, when you call `Stringify.number_to_string(42)`, it will internally call `Kernel.to_string(42)` and return the result.

The `as:` option in the `defdelegate` macro is optional. If you don't specify it, the function name will be used as the name of the function to be delegated to.

For example, if we don't specify the `as:` option in the `defdelegate` macro, it will look like this:

```elixir
defmodule Stringify do
    defdelegate number_to_string(n), to: Kernel
end
```

Then the `defdelegate` macro would try to delegate `number_to_string/1` to a function named `number_to_string/1` in the `Kernel` module, which doesn't exist.

In practice, `as:` option provides flexibility when delegating to functions with different names, making it easier to create thin wrappers or aliases for existing functions in other modules.

This is a simple example of how macros can be used in Elixir.

For more information on `defdelegate`, you can check out the [official Elixir documentation](https://hexdocs.pm/elixir/Kernel.html#defdelegate/2).

I hope you find this helpful.
