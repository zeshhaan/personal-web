---
title: "How to update Phoenix"
description: "I got stuck when I tried to update phoenix installer. Here is how I did it finally."
date: "December 9, 2023"
slug: "how-to-update-phoenix"
draft: false
---

Check your version of Phoenix installer

```bash
mix phx.new --version
```

or alternatively, you can run the following command to see which archive is installed.

```bash
mix archive
```

You can check if your project has outdated phoenix installed by running the following command in your project directory.

```bash
mix hex.outdated
```

Update phoenix installer to the latest version on your system.

```bash
mix local.phx
```

If you are on project using version 16 and want to upgrade to version 17, checkout this [gist](https://gist.github.com/chrismccord/00a6ea2a96bc57df0cce526bd20af8a7) written by Chris Mccord.

There is also a helpful video by Elixir Casts on [how to update Phoenix](https://elixircasts.io/upgrading-to-phoenix-1.7) to the latest version.
