---
title: "Keyword Lists vs Maps"
description: "Notes on keyword lists and maps in Elixir"
date: "Mar 18, 2024"
slug: "keyword-list-and-maps-in-elixir"
draft: false
---

In Elixir, we have two data structures that are used to store key-value pairs: keyword lists and maps.

### Keyword Lists

Keyword Lists are lists of 2-element tuples where the first element is an atom and the second element is of any data type including atom.

```elixir
[key: "value"]

# same as

[{:key, "value"}]
```

We can check if its keyword list like this

```elixir
kw_list = [{:key, 1}, {:key, 2}]

Keyword.keyword?(kw_list)
```

If the order is broken, for example, if one of the tuple's first element is not of type atom, then it will become just a list of tuples instead of keyword list

### Maps

Maps can have the key of any data type. There is no restrictions on the key. The value can also be of any data type.

Maps is the go to data structure for key-value pairs. It is a collection of key-value pairs where the key can be of any data type and the value can be of any data type.

### Difference

Keyword lists remembers the order of the keys. Maps does not remember the order of the keys at some point.
keyword list can have duplicate keys, but maps cannot have duplicate keys. If you try to insert a duplicate key into a map, the old value will be overwritten by the new value.

### So when to use what?

Keyword lists are used for small amount of key-value pairs. They are used when you want to pattern match on the keys. They are also used when you want to pass options to a function.

Maps are used for large amount of key-value pairs. They are used when you want to store key-value pairs and you don't care about the order of the keys. They are also used when you want to store key-value pairs and you don't care about the type of the keys.

### Example

Lets take an example of audio player. An audio player will have a list of audios. And a list of recently played items which will always show last 5 played items.

Here we can use keyword list for recently played items and map for list of audios.

```elixir
recently_played = [
  artist1: "song1",
  artist2: "song2",
  artist3: "song3",
  artist4: "song4",
  artist5: "song5"
]

audios = %{
  "artist1" => "song1",
  "artist2" => "song2",
  "artist3" => "song3",
  "artist4" => "song4",
  "artist5" => "song5",
  "artist6" => "song6",
  "artist7" => "song7",
  "artist8" => "song8",
  "artist9" => "song9",
  ...
}
```
