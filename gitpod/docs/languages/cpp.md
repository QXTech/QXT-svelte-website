---
section: references
title: C++ in Gitpod
---

<script context="module">
  export const prerender = true;
</script>

# C++ in Gitpod

Gitpod supports C++ right out of the box, but there are still ways to enhance your C++ experience within Gitpod.

## Example Repositories

Here are a few C++ example projects that are already automated with Gitpod:

<div class="overflow-x-auto">

| Repository                                                         | Description                                                       | Try it                                                                                                                                           |
| ------------------------------------------------------------------ | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Component Editor](https://github.com/Circuito-io/ComponentEditor) | circuito.io Component Editor                                      | [![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/Circuito-io/ComponentEditor)              |
| [tinyraycaster](https://github.com/ssloy/tinyraycaster)            | old-school FPS in a weekend                                       | [![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/ssloy/tinyraycaster)                      |
| [HelloGitPod](https://github.com/Shadouw/HelloGitPod)              | Example Gitpod C++ configuration with `clang-tidy` linter enabled | [![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/Shadouw/HelloGitPod/blob/master/main.cpp) |

</div>

## Environment

### C++ Tools

All Gitpod workspaces come with the latest available `clang`, `gcc`, `cmake`, `gdb`, and other useful C++ tools pre-installed by default.

However, if you're missing some additional tools, you can simply run `brew install <tool_name>` to install it in the current workspace or [write your own .gitpod.Dockerfile](/docs/config-docker#creating-docker-images-for-gitpod) to install it across all workspaces for your repository.

## IDE Features

### Debugging

Since `gdb` is already pre-installed in Gitpod, you can already debug any C, C++, Go, etc. program directly from the Terminal with a single command.

However, you can also get the IDE's Debugging features to work with your C++ program, using GDB as a backend.

To enable C++ debugging for your project, simply follow these steps:

1. Open the Extensions panel (in the IDE's left vertical menu bar)

2. Use the Search feature to find the extension called "[Native Debug](https://open-vsx.org/extension/webfreak/debug)", then click on `Install`, and select `Install for this project`

3. Next, open the Debug panel (also in the IDE's left vertical menu bar), and click on the Gear (⚙️) icon to open the `launch.json` configuration file

4. Finally, configure debugging for your project by adding a GDB launch configuration. You can use auto-completion for assistance. In the end, your `launch.json` should look something like this:

```js
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  "version": "0.2.0",
  "configurations": [
      {
          "type": "gdb",
          "request": "launch",
          "name": "Debug Firefox (GDB)",
          "target": "./obj-x86_64-pc-linux-gnu/dist/bin/firefox",
          "cwd": "${workspaceRoot}",
          "valuesFormatting": "parseText"
      }
  ]
}
```

Note: This example GDB launch configuration points to a compiled Firefox browser binary. You'll need to adjust it to point to your project's own compiled binary.

With this, you should be able to set breakpoints in your C++ code directly from the code editor margin, then start a debugging session from the Debug panel. The IDE should then show you debug information, hopefully pause execution on your breakpoint, and allow you to step through the code.

If that doesn't work, please feel free to ask for help in [community.gitpod.io](https://community.gitpod.io) and we'll be happy to help you make debugging work for your project.

For a more in-depth walkthrough of how do debug applications, please [refer to this comment on GitHub](https://github.com/gitpod-io/gitpod/issues/4805#issuecomment-883228543).

## Further Reading

- <a class="no-nowrap" href="https://community.gitpod.io/t/gitpod-and-c/622">How to enable the `clang-tidy` linter in Gitpod</a>
