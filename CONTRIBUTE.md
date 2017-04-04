# Contributing to AstroPlant Prototype

:+1::tada: First off, thanks for taking the time to contribute! :tada::+1:

The following is a set of guidelines for contributing to AstroPlant, which are hosted in the [Urbanlink Organization](https://github.com/urbanlink) on GitHub.
These are just guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

#### Table Of Contents

[What should I know before I get started?](#what-should-i-know-before-i-get-started)
  * [Design Decisions](#design-decisions)

[How Can I Contribute?](#how-can-i-contribute)
  * [Reporting Bugs](#reporting-bugs)
  * [Suggesting Enhancements](#suggesting-enhancements)
  * [Your First Code Contribution](#your-first-code-contribution)
  * [Pull Requests](#pull-requests)

[Styleguides](#styleguides)
  * [Git Commit Messages](#git-commit-messages)
  * [JavaScript Styleguide](#javascript-styleguide)
  * [Specs Styleguide](#specs-styleguide)
  * [Documentation Styleguide](#documentation-styleguide)

[Additional Notes](#additional-notes)
  * [Issue and Pull Request Labels](#issue-and-pull-request-labels)

## What should I know before I get started?


### Design Decisions

When we make a significant decision in how we maintain the project and what we can or cannot support, we will document it in the Changelog. If you have a question around how we do things, check to see if it is documented there. If it is *not* documented there, please open a new topic in the issue tracker.

## How Can I Contribute?

### Reporting Bugs

This section guides you through submitting a bug report for AstroPlant. Following these guidelines helps maintainers and the community understand your report :pencil:, reproduce the behavior :computer: :computer:, and find related reports :mag_right:.

Before creating bug reports, please check [this list](#before-submitting-a-bug-report) as you might find out that you don't need to create one. When you are creating a bug report, please [include as many details as possible](#how-do-i-submit-a-good-bug-report). Fill out [the required template](ISSUE_TEMPLATE.md), the information it asks for helps us resolve issues faster.

#### Before Submitting A Bug Report

* **Perform a [cursory search](https://github.com/issues?q=+is%3Aissue+user%3AAstroPlant)** to see if the problem has already been reported. If it has, add a comment to the existing issue instead of opening a new one.

#### How Do I Submit A (Good) Bug Report?

Bugs are tracked as [GitHub issues](https://guides.github.com/features/issues/). After you've determined [which repository](#AstroPlant-and-packages) your bug is related to, create an issue on that repository and provide the following information by filling in [the template](ISSUE_TEMPLATE.md).

Explain the problem and include additional details to help maintainers reproduce the problem:

* **Use a clear and descriptive title** for the issue to identify the problem.
* **Describe the exact steps which reproduce the problem** in as many details as possible. For example, start by explaining how you started AstroPlant, e.g. which command exactly you used in the terminal, or how you started AstroPlant otherwise. When listing steps, **don't just say what you did, but explain how you did it**. For example, if you moved the cursor to the end of a line, explain if you used the mouse, or a keyboard shortcut or an AstroPlant command, and if so which one?
* **Provide specific examples to demonstrate the steps**. Include links to files or GitHub projects, or copy/pasteable snippets, which you use in those examples. If you're providing snippets in the issue, use [Markdown code blocks](https://help.github.com/articles/markdown-basics/#multiple-lines).
* **Describe the behavior you observed after following the steps** and point out what exactly is the problem with that behavior.
* **Explain which behavior you expected to see instead and why.**
* **Include screenshots and animated GIFs** which show you following the described steps and clearly demonstrate the problem. If you use the keyboard while following the steps, **record the GIF with the [Keybinding Resolver](https://github.com/AstroPlant/keybinding-resolver) shown**. You can use [this tool](http://www.cockos.com/licecap/) to record GIFs on macOS and Windows, and [this tool](https://github.com/colinkeenan/silentcast) or [this tool](https://github.com/GNOME/byzanz) on Linux.
* **If you're reporting that AstroPlant crashed**, include a crash report with a stack trace from the operating system. On macOS, the crash report will be available in `Console.app` under "Diagnostic and usage information" > "User diagnostic reports". Include the crash report in the issue in a [code block](https://help.github.com/articles/markdown-basics/#multiple-lines), a [file attachment](https://help.github.com/articles/file-attachments-on-issues-and-pull-requests/), or put it in a [gist](https://gist.github.com/) and provide link to that gist.
* **If the problem is related to performance**, include a [CPU profile capture and a screenshot](http://flight-manual.AstroPlant.io/hacking-AstroPlant/sections/debugging/#diagnose-performance-problems-with-the-dev-tools-cpu-profiler) with your report.
* **If the Chrome's developer tools pane is shown without you triggering it**, that normally means that an exception was thrown. The Console tab will include an entry for the exception. Expand the exception so that the stack trace is visible, and provide the full exception and stack trace in a [code blocks](https://help.github.com/articles/markdown-basics/#multiple-lines) and as a screenshot.
* **If the problem wasn't triggered by a specific action**, describe what you were doing before the problem happened and share more information using the guidelines below.

Provide more context by answering these questions:

* **Did the problem start happening recently** (e.g. after updating to a new version of AstroPlant) or was this always a problem?
* If the problem started happening recently, **can you reproduce the problem in an older version of AstroPlant?** What's the most recent version in which the problem doesn't happen? You can download older versions of AstroPlant from [the releases page](https://github.com/AstroPlant/AstroPlant/releases).
* **Can you reliably reproduce the issue?** If not, provide details about how often the problem happens and under which conditions it normally happens.
* If the problem is related to working with files (e.g. opening and editing files), **does the problem happen for all files and projects or only some?** Does the problem happen only when working with local or remote files (e.g. on network drives), with files of a specific type (e.g. only JavaScript or Python files), with large files or files with very long lines, or with files in a specific encoding? Is there anything else special about the files you are using?

Include details about your configuration and environment:

* **Which version of AstroPlant are you using?**
* **What's the name and version of the OS you're using**?
* **Are you running AstroPlant in a virtual machine?** If so, which VM software are you using and which operating systems and versions are used for the host and the guest?

### Suggesting Enhancements

This section guides you through submitting an enhancement suggestion for AstroPlant, including completely new features and minor improvements to existing functionality. Following these guidelines helps maintainers and the community understand your suggestion :pencil: and find related suggestions :mag_right:.

Before creating enhancement suggestions, please check [this list](#before-submitting-an-enhancement-suggestion) as you might find out that you don't need to create one. When you are creating an enhancement suggestion, please [include as many details as possible](#how-do-i-submit-a-good-enhancement-suggestion). Fill in [the template](ISSUE_TEMPLATE.md), including the steps that you imagine you would take if the feature you're requesting existed.

#### Before Submitting An Enhancement Suggestion

* **Perform a [cursory search](https://github.com/issues?q=+is%3Aissue+user%3AAstroPlant)** to see if the enhancement has already been suggested. If it has, add a comment to the existing issue instead of opening a new one.

#### How Do I Submit A (Good) Enhancement Suggestion?

Enhancement suggestions are tracked as [GitHub issues](https://guides.github.com/features/issues/). After you've determined [which repository](#AstroPlant-and-packages) your enhancement suggestions is related to, create an issue on that repository and provide the following information:

* **Use a clear and descriptive title** for the issue to identify the suggestion.
* **Provide a step-by-step description of the suggested enhancement** in as many details as possible.
* **Provide specific examples to demonstrate the steps**. Include copy/pasteable snippets which you use in those examples, as [Markdown code blocks](https://help.github.com/articles/markdown-basics/#multiple-lines).
* **Describe the current behavior** and **explain which behavior you expected to see instead** and why.
* **Include screenshots and animated GIFs** which help you demonstrate the steps or point out the part of AstroPlant which the suggestion is related to. You can use [this tool](http://www.cockos.com/licecap/) to record GIFs on macOS and Windows, and [this tool](https://github.com/colinkeenan/silentcast) or [this tool](https://github.com/GNOME/byzanz) on Linux.
* **Explain why this enhancement would be useful**.
* **Specify the name and version of the OS you're using.**

### Pull Requests

* Fill in [the required template](PULL_REQUEST_TEMPLATE.md)
* Include screenshots and animated GIFs in your pull request whenever possible.
* Follow the [JavaScript](#javascript-styleguide) styleguides.
* Document new code based on the
  [Documentation Styleguide](#documentation-styleguide)
* End files with a newline.
* [Avoid platform-dependent code](http://flight-manual.AstroPlant.io/hacking-AstroPlant/sections/cross-platform-compatibility/)

## Styleguides

### Git Commit Messages

* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Limit the first line to 72 characters or less
* Reference issues and pull requests liberally
* When only changing documentation, include `[ci skip]` in the commit description
* Consider starting the commit message with an applicable emoji:
    * :art: `:art:` when improving the format/structure of the code
    * :racehorse: `:racehorse:` when improving performance
    * :non-potable_water: `:non-potable_water:` when plugging memory leaks
    * :memo: `:memo:` when writing docs
    * :penguin: `:penguin:` when fixing something on Linux
    * :apple: `:apple:` when fixing something on macOS
    * :checkered_flag: `:checkered_flag:` when fixing something on Windows
    * :bug: `:bug:` when fixing a bug
    * :fire: `:fire:` when removing code or files
    * :green_heart: `:green_heart:` when fixing the CI build
    * :white_check_mark: `:white_check_mark:` when adding tests
    * :lock: `:lock:` when dealing with security
    * :arrow_up: `:arrow_up:` when upgrading dependencies
    * :arrow_down: `:arrow_down:` when downgrading dependencies
    * :shirt: `:shirt:` when removing linter warnings

### JavaScript Styleguide

All JavaScript must adhere to [JavaScript Standard Style](http://standardjs.com/).

* Prefer the object spread operator (`{...anotherObj}`) to `Object.assign()`
* Inline `export`s with expressions whenever possible
  ```js
  // Use this:
  export default class ClassName {

  }

  // Instead of:
  class ClassName {

  }
  export default ClassName
  ```


### Documentation Styleguide

* Use [AstroPlantDoc](https://github.com/AstroPlant/AstroPlantdoc).
* Use [Markdown](https://daringfireball.net/projects/markdown).
* Reference methods and classes in markdown with the custom `{}` notation:
    * Reference classes with `{ClassName}`
    * Reference instance methods with `{ClassName::methodName}`

## Additional Notes

### Issue and Pull Request Labels

This section lists the labels we use to help us track and manage issues and pull requests. Most labels are used across all AstroPlant repositories, but some are specific to `AstroPlant/AstroPlant`.

[GitHub search](https://help.github.com/articles/searching-issues/) makes it easy to use labels for finding groups of issues or pull requests you're interested in. For example, you might be interested in [open issues across `AstroPlant/AstroPlant` and all AstroPlant-owned packages which are labeled as bugs, but still need to be reliably reproduced](https://github.com/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+user%3AAstroPlant+label%3Abug+label%3Aneeds-reproduction) or perhaps [open pull requests in `AstroPlant/AstroPlant` which haven't been reviewed yet](https://github.com/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Apr+repo%3AAstroPlant%2FAstroPlant+comments%3A0). To help you find issues and pull requests, each label is listed with search links for finding open items with that label in `AstroPlant/AstroPlant` only and also across all AstroPlant repositories. We  encourage you to read about [other search filters](https://help.github.com/articles/searching-issues/) which will help you write more focused queries.

The labels are loosely grouped by their purpose, but it's not required that every issue have a label from every group or that an issue can't have more than one label from the same group.

Please open an issue on `AstroPlant/AstroPlant` if you have suggestions for new labels, and if you notice some labels are missing on some repositories, then please open an issue on that repository.

#### Type of Issue and Issue State

| Label name | `AstroPlant/AstroPlant` :mag_right: | `AstroPlant`‑org :mag_right: | Description |
| --- | --- | --- | --- |
| `enhancement` | [search][search-AstroPlant-repo-label-enhancement] | [search][search-AstroPlant-org-label-enhancement] | Feature requests. |
| `bug` | [search][search-AstroPlant-repo-label-bug] | [search][search-AstroPlant-org-label-bug] | Confirmed bugs or reports that are very likely to be bugs. |
| `question` | [search][search-AstroPlant-repo-label-question] | [search][search-AstroPlant-org-label-question] | Questions more than bug reports or feature requests (e.g. how do I do X). |
| `feedback` | [search][search-AstroPlant-repo-label-feedback] | [search][search-AstroPlant-org-label-feedback] | General feedback more than bug reports or feature requests. |
| `help-wanted` | [search][search-AstroPlant-repo-label-help-wanted] | [search][search-AstroPlant-org-label-help-wanted] | The AstroPlant core team would appreciate help from the community in resolving these issues. |
| `beginner` | [search][search-AstroPlant-repo-label-beginner] | [search][search-AstroPlant-org-label-beginner] | Less complex issues which would be good first issues to work on for users who want to contribute to AstroPlant. |
| `more-information-needed` | [search][search-AstroPlant-repo-label-more-information-needed] | [search][search-AstroPlant-org-label-more-information-needed] | More information needs to be collected about these problems or feature requests (e.g. steps to reproduce). |
| `needs-reproduction` | [search][search-AstroPlant-repo-label-needs-reproduction] | [search][search-AstroPlant-org-label-needs-reproduction] | Likely bugs, but haven't been reliably reproduced. |
| `blocked` | [search][search-AstroPlant-repo-label-blocked] | [search][search-AstroPlant-org-label-blocked] | Issues blocked on other issues. |
| `duplicate` | [search][search-AstroPlant-repo-label-duplicate] | [search][search-AstroPlant-org-label-duplicate] | Issues which are duplicates of other issues, i.e. they have been reported before. |
| `wontfix` | [search][search-AstroPlant-repo-label-wontfix] | [search][search-AstroPlant-org-label-wontfix] | The AstroPlant core team has decided not to fix these issues for now, either because they're working as intended or for some other reason. |
| `invalid` | [search][search-AstroPlant-repo-label-invalid] | [search][search-AstroPlant-org-label-invalid] | Issues which aren't valid (e.g. user errors). |
| `package-idea` | [search][search-AstroPlant-repo-label-package-idea] | [search][search-AstroPlant-org-label-package-idea] | Feature request which might be good candidates for new packages, instead of extending AstroPlant or core AstroPlant packages. |
| `wrong-repo` | [search][search-AstroPlant-repo-label-wrong-repo] | [search][search-AstroPlant-org-label-wrong-repo] | Issues reported on the wrong repository (e.g. a bug related to the [Settings View package](https://github.com/AstroPlant/settings-view) was reported on [AstroPlant core](https://github.com/AstroPlant/AstroPlant)). |

#### Topic Categories

| Label name | `AstroPlant/AstroPlant` :mag_right: | `AstroPlant`‑org :mag_right: | Description |
| --- | --- | --- | --- |
| `windows` | [search][search-AstroPlant-repo-label-windows] | [search][search-AstroPlant-org-label-windows] | Related to AstroPlant running on Windows. |
| `linux` | [search][search-AstroPlant-repo-label-linux] | [search][search-AstroPlant-org-label-linux] | Related to AstroPlant running on Linux. |
| `mac` | [search][search-AstroPlant-repo-label-mac] | [search][search-AstroPlant-org-label-mac] | Related to AstroPlant running on macOS. |
| `documentation` | [search][search-AstroPlant-repo-label-documentation] | [search][search-AstroPlant-org-label-documentation] | Related to any type of documentation (e.g. [API documentation](https://AstroPlant.io/docs/api/latest/) and the [flight manual](http://flight-manual.AstroPlant.io/)). |
| `performance` | [search][search-AstroPlant-repo-label-performance] | [search][search-AstroPlant-org-label-performance] | Related to performance. |
| `security` | [search][search-AstroPlant-repo-label-security] | [search][search-AstroPlant-org-label-security] | Related to security. |
| `ui` | [search][search-AstroPlant-repo-label-ui] | [search][search-AstroPlant-org-label-ui] | Related to visual design. |
| `api` | [search][search-AstroPlant-repo-label-api] | [search][search-AstroPlant-org-label-api] | Related to AstroPlant's public APIs. |
| `uncaught-exception` | [search][search-AstroPlant-repo-label-uncaught-exception] | [search][search-AstroPlant-org-label-uncaught-exception] | Issues about uncaught exceptions, normally created from the [Notifications package](https://github.com/AstroPlant/notifications). |
| `crash` | [search][search-AstroPlant-repo-label-crash] | [search][search-AstroPlant-org-label-crash] | Reports of AstroPlant completely crashing. |
| `auto-indent` | [search][search-AstroPlant-repo-label-auto-indent] | [search][search-AstroPlant-org-label-auto-indent] | Related to auto-indenting text. |
| `encoding` | [search][search-AstroPlant-repo-label-encoding] | [search][search-AstroPlant-org-label-encoding] | Related to character encoding. |
| `network` | [search][search-AstroPlant-repo-label-network] | [search][search-AstroPlant-org-label-network] | Related to network problems or working with remote files (e.g. on network drives). |
| `git` | [search][search-AstroPlant-repo-label-git] | [search][search-AstroPlant-org-label-git] | Related to Git functionality (e.g. problems with gitignore files or with showing the correct file status). |

#### `AstroPlant/AstroPlant` Topic Categories

| Label name | `AstroPlant/AstroPlant` :mag_right: | `AstroPlant`‑org :mag_right: | Description |
| --- | --- | --- | --- |
| `editor-rendering` | [search][search-AstroPlant-repo-label-editor-rendering] | [search][search-AstroPlant-org-label-editor-rendering] | Related to language-independent aspects of rendering text (e.g. scrolling, soft wrap, and font rendering). |
| `build-error` | [search][search-AstroPlant-repo-label-build-error] | [search][search-AstroPlant-org-label-build-error] | Related to problems with building AstroPlant from source. |
| `error-from-pathwatcher` | [search][search-AstroPlant-repo-label-error-from-pathwatcher] | [search][search-AstroPlant-org-label-error-from-pathwatcher] | Related to errors thrown by the [pathwatcher library](https://github.com/AstroPlant/node-pathwatcher). |
| `error-from-save` | [search][search-AstroPlant-repo-label-error-from-save] | [search][search-AstroPlant-org-label-error-from-save] | Related to errors thrown when saving files. |
| `error-from-open` | [search][search-AstroPlant-repo-label-error-from-open] | [search][search-AstroPlant-org-label-error-from-open] | Related to errors thrown when opening files. |
| `installer` | [search][search-AstroPlant-repo-label-installer] | [search][search-AstroPlant-org-label-installer] | Related to the AstroPlant installers for different OSes. |
| `auto-updater` | [search][search-AstroPlant-repo-label-auto-updater] | [search][search-AstroPlant-org-label-auto-updater] | Related to the auto-updater for different OSes. |
| `deprecation-help` | [search][search-AstroPlant-repo-label-deprecation-help] | [search][search-AstroPlant-org-label-deprecation-help] | Issues for helping package authors remove usage of deprecated APIs in packages. |
| `electron` | [search][search-AstroPlant-repo-label-electron] | [search][search-AstroPlant-org-label-electron] | Issues that require changes to [Electron](https://electron.AstroPlant.io) to fix or implement. |

#### Pull Request Labels

| Label name | `AstroPlant/AstroPlant` :mag_right: | `AstroPlant`‑org :mag_right: | Description
| --- | --- | --- | --- |
| `work-in-progress` | [search][search-AstroPlant-repo-label-work-in-progress] | [search][search-AstroPlant-org-label-work-in-progress] | Pull requests which are still being worked on, more changes will follow. |
| `needs-review` | [search][search-AstroPlant-repo-label-needs-review] | [search][search-AstroPlant-org-label-needs-review] | Pull requests which need code review, and approval from maintainers or AstroPlant core team. |
| `under-review` | [search][search-AstroPlant-repo-label-under-review] | [search][search-AstroPlant-org-label-under-review] | Pull requests being reviewed by maintainers or AstroPlant core team. |
| `requires-changes` | [search][search-AstroPlant-repo-label-requires-changes] | [search][search-AstroPlant-org-label-requires-changes] | Pull requests which need to be updated based on review comments and then reviewed again. |
| `needs-testing` | [search][search-AstroPlant-repo-label-needs-testing] | [search][search-AstroPlant-org-label-needs-testing] | Pull requests which need manual testing. |

[search-AstroPlant-repo-label-enhancement]: https://github.com/issues?q=is%3Aopen+is%3Aissue+repo%3AAstroPlant%2FAstroPlant+label%3Aenhancement
[search-AstroPlant-org-label-enhancement]: https://github.com/issues?q=is%3Aopen+is%3Aissue+user%3AAstroPlant+label%3Aenhancement
[search-AstroPlant-repo-label-bug]: https://github.com/issues?q=is%3Aopen+is%3Aissue+repo%3AAstroPlant%2FAstroPlant+label%3Abug
[search-AstroPlant-org-label-bug]: https://github.com/issues?q=is%3Aopen+is%3Aissue+user%3AAstroPlant+label%3Abug
[search-AstroPlant-repo-label-question]: https://github.com/issues?q=is%3Aopen+is%3Aissue+repo%3AAstroPlant%2FAstroPlant+label%3Aquestion
[search-AstroPlant-org-label-question]: https://github.com/issues?q=is%3Aopen+is%3Aissue+user%3AAstroPlant+label%3Aquestion
[search-AstroPlant-repo-label-feedback]: https://github.com/issues?q=is%3Aopen+is%3Aissue+repo%3AAstroPlant%2FAstroPlant+label%3Afeedback
[search-AstroPlant-org-label-feedback]: https://github.com/issues?q=is%3Aopen+is%3Aissue+user%3AAstroPlant+label%3Afeedback
[search-AstroPlant-repo-label-help-wanted]: https://github.com/issues?q=is%3Aopen+is%3Aissue+repo%3AAstroPlant%2FAstroPlant+label%3Ahelp-wanted
[search-AstroPlant-org-label-help-wanted]: https://github.com/issues?q=is%3Aopen+is%3Aissue+user%3AAstroPlant+label%3Ahelp-wanted
[search-AstroPlant-repo-label-beginner]: https://github.com/issues?q=is%3Aopen+is%3Aissue+repo%3AAstroPlant%2FAstroPlant+label%3Abeginner
[search-AstroPlant-org-label-beginner]: https://github.com/issues?q=is%3Aopen+is%3Aissue+user%3AAstroPlant+label%3Abeginner
[search-AstroPlant-repo-label-more-information-needed]: https://github.com/issues?q=is%3Aopen+is%3Aissue+repo%3AAstroPlant%2FAstroPlant+label%3Amore-information-needed
[search-AstroPlant-org-label-more-information-needed]: https://github.com/issues?q=is%3Aopen+is%3Aissue+user%3AAstroPlant+label%3Amore-information-needed
[search-AstroPlant-repo-label-needs-reproduction]: https://github.com/issues?q=is%3Aopen+is%3Aissue+repo%3AAstroPlant%2FAstroPlant+label%3Aneeds-reproduction
[search-AstroPlant-org-label-needs-reproduction]: https://github.com/issues?q=is%3Aopen+is%3Aissue+user%3AAstroPlant+label%3Aneeds-reproduction
[search-AstroPlant-repo-label-triage-help-needed]: https://github.com/issues?q=is%3Aopen+is%3Aissue+repo%3AAstroPlant%2FAstroPlant+label%3Atriage-help-needed
[search-AstroPlant-org-label-triage-help-needed]: https://github.com/issues?q=is%3Aopen+is%3Aissue+user%3AAstroPlant+label%3Atriage-help-needed
[search-AstroPlant-repo-label-windows]: https://github.com/issues?q=is%3Aopen+is%3Aissue+repo%3AAstroPlant%2FAstroPlant+label%3Awindows
[search-AstroPlant-org-label-windows]: https://github.com/issues?q=is%3Aopen+is%3Aissue+user%3AAstroPlant+label%3Awindows
[search-AstroPlant-repo-label-linux]: https://github.com/issues?q=is%3Aopen+is%3Aissue+repo%3AAstroPlant%2FAstroPlant+label%3Alinux
[search-AstroPlant-org-label-linux]: https://github.com/issues?q=is%3Aopen+is%3Aissue+user%3AAstroPlant+label%3Alinux
[search-AstroPlant-repo-label-mac]: https://github.com/issues?q=is%3Aopen+is%3Aissue+repo%3AAstroPlant%2FAstroPlant+label%3Amac
[search-AstroPlant-org-label-mac]: https://github.com/issues?q=is%3Aopen+is%3Aissue+user%3AAstroPlant+label%3Amac
[search-AstroPlant-repo-label-documentation]: https://github.com/issues?q=is%3Aopen+is%3Aissue+repo%3AAstroPlant%2FAstroPlant+label%3Adocumentation
[search-AstroPlant-org-label-documentation]: https://github.com/issues?q=is%3Aopen+is%3Aissue+user%3AAstroPlant+label%3Adocumentation
[search-AstroPlant-repo-label-performance]: https://github.com/issues?q=is%3Aopen+is%3Aissue+repo%3AAstroPlant%2FAstroPlant+label%3Aperformance
[search-AstroPlant-org-label-performance]: https://github.com/issues?q=is%3Aopen+is%3Aissue+user%3AAstroPlant+label%3Aperformance
[search-AstroPlant-repo-label-security]: https://github.com/issues?q=is%3Aopen+is%3Aissue+repo%3AAstroPlant%2FAstroPlant+label%3Asecurity
[search-AstroPlant-org-label-security]: https://github.com/issues?q=is%3Aopen+is%3Aissue+user%3AAstroPlant+label%3Asecurity
[search-AstroPlant-repo-label-ui]: https://github.com/issues?q=is%3Aopen+is%3Aissue+repo%3AAstroPlant%2FAstroPlant+label%3Aui
[search-AstroPlant-org-label-ui]: https://github.com/issues?q=is%3Aopen+is%3Aissue+user%3AAstroPlant+label%3Aui
[search-AstroPlant-repo-label-api]: https://github.com/issues?q=is%3Aopen+is%3Aissue+repo%3AAstroPlant%2FAstroPlant+label%3Aapi
[search-AstroPlant-org-label-api]: https://github.com/issues?q=is%3Aopen+is%3Aissue+user%3AAstroPlant+label%3Aapi
[search-AstroPlant-repo-label-crash]: https://github.com/issues?q=is%3Aopen+is%3Aissue+repo%3AAstroPlant%2FAstroPlant+label%3Acrash
[search-AstroPlant-org-label-crash]: https://github.com/issues?q=is%3Aopen+is%3Aissue+user%3AAstroPlant+label%3Acrash
[search-AstroPlant-repo-label-auto-indent]: https://github.com/issues?q=is%3Aopen+is%3Aissue+repo%3AAstroPlant%2FAstroPlant+label%3Aauto-indent
[search-AstroPlant-org-label-auto-indent]: https://github.com/issues?q=is%3Aopen+is%3Aissue+user%3AAstroPlant+label%3Aauto-indent
[search-AstroPlant-repo-label-encoding]: https://github.com/issues?q=is%3Aopen+is%3Aissue+repo%3AAstroPlant%2FAstroPlant+label%3Aencoding
[search-AstroPlant-org-label-encoding]: https://github.com/issues?q=is%3Aopen+is%3Aissue+user%3AAstroPlant+label%3Aencoding
[search-AstroPlant-repo-label-network]: https://github.com/issues?q=is%3Aopen+is%3Aissue+repo%3AAstroPlant%2FAstroPlant+label%3Anetwork
[search-AstroPlant-org-label-network]: https://github.com/issues?q=is%3Aopen+is%3Aissue+user%3AAstroPlant+label%3Anetwork
[search-AstroPlant-repo-label-uncaught-exception]: https://github.com/issues?q=is%3Aopen+is%3Aissue+repo%3AAstroPlant%2FAstroPlant+label%3Auncaught-exception
[search-AstroPlant-org-label-uncaught-exception]: https://github.com/issues?q=is%3Aopen+is%3Aissue+user%3AAstroPlant+label%3Auncaught-exception
[search-AstroPlant-repo-label-git]: https://github.com/issues?q=is%3Aopen+is%3Aissue+repo%3AAstroPlant%2FAstroPlant+label%3Agit
[search-AstroPlant-org-label-git]: https://github.com/issues?q=is%3Aopen+is%3Aissue+user%3AAstroPlant+label%3Agit
[search-AstroPlant-repo-label-blocked]: https://github.com/issues?q=is%3Aopen+is%3Aissue+repo%3AAstroPlant%2FAstroPlant+label%3Ablocked
[search-AstroPlant-org-label-blocked]: https://github.com/issues?q=is%3Aopen+is%3Aissue+user%3AAstroPlant+label%3Ablocked
[search-AstroPlant-repo-label-duplicate]: https://github.com/issues?q=is%3Aopen+is%3Aissue+repo%3AAstroPlant%2FAstroPlant+label%3Aduplicate
[search-AstroPlant-org-label-duplicate]: https://github.com/issues?q=is%3Aopen+is%3Aissue+user%3AAstroPlant+label%3Aduplicate
[search-AstroPlant-repo-label-wontfix]: https://github.com/issues?q=is%3Aopen+is%3Aissue+repo%3AAstroPlant%2FAstroPlant+label%3Awontfix
[search-AstroPlant-org-label-wontfix]: https://github.com/issues?q=is%3Aopen+is%3Aissue+user%3AAstroPlant+label%3Awontfix
[search-AstroPlant-repo-label-invalid]: https://github.com/issues?q=is%3Aopen+is%3Aissue+repo%3AAstroPlant%2FAstroPlant+label%3Ainvalid
[search-AstroPlant-org-label-invalid]: https://github.com/issues?q=is%3Aopen+is%3Aissue+user%3AAstroPlant+label%3Ainvalid
[search-AstroPlant-repo-label-package-idea]: https://github.com/issues?q=is%3Aopen+is%3Aissue+repo%3AAstroPlant%2FAstroPlant+label%3Apackage-idea
[search-AstroPlant-org-label-package-idea]: https://github.com/issues?q=is%3Aopen+is%3Aissue+user%3AAstroPlant+label%3Apackage-idea
[search-AstroPlant-repo-label-wrong-repo]: https://github.com/issues?q=is%3Aopen+is%3Aissue+repo%3AAstroPlant%2FAstroPlant+label%3Awrong-repo
[search-AstroPlant-org-label-wrong-repo]: https://github.com/issues?q=is%3Aopen+is%3Aissue+user%3AAstroPlant+label%3Awrong-repo
[search-AstroPlant-repo-label-editor-rendering]: https://github.com/issues?q=is%3Aopen+is%3Aissue+repo%3AAstroPlant%2FAstroPlant+label%3Aeditor-rendering
[search-AstroPlant-org-label-editor-rendering]: https://github.com/issues?q=is%3Aopen+is%3Aissue+user%3AAstroPlant+label%3Aeditor-rendering
[search-AstroPlant-repo-label-build-error]: https://github.com/issues?q=is%3Aopen+is%3Aissue+repo%3AAstroPlant%2FAstroPlant+label%3Abuild-error
[search-AstroPlant-org-label-build-error]: https://github.com/issues?q=is%3Aopen+is%3Aissue+user%3AAstroPlant+label%3Abuild-error
[search-AstroPlant-repo-label-error-from-pathwatcher]: https://github.com/issues?q=is%3Aopen+is%3Aissue+repo%3AAstroPlant%2FAstroPlant+label%3Aerror-from-pathwatcher
[search-AstroPlant-org-label-error-from-pathwatcher]: https://github.com/issues?q=is%3Aopen+is%3Aissue+user%3AAstroPlant+label%3Aerror-from-pathwatcher
[search-AstroPlant-repo-label-error-from-save]: https://github.com/issues?q=is%3Aopen+is%3Aissue+repo%3AAstroPlant%2FAstroPlant+label%3Aerror-from-save
[search-AstroPlant-org-label-error-from-save]: https://github.com/issues?q=is%3Aopen+is%3Aissue+user%3AAstroPlant+label%3Aerror-from-save
[search-AstroPlant-repo-label-error-from-open]: https://github.com/issues?q=is%3Aopen+is%3Aissue+repo%3AAstroPlant%2FAstroPlant+label%3Aerror-from-open
[search-AstroPlant-org-label-error-from-open]: https://github.com/issues?q=is%3Aopen+is%3Aissue+user%3AAstroPlant+label%3Aerror-from-open
[search-AstroPlant-repo-label-installer]: https://github.com/issues?q=is%3Aopen+is%3Aissue+repo%3AAstroPlant%2FAstroPlant+label%3Ainstaller
[search-AstroPlant-org-label-installer]: https://github.com/issues?q=is%3Aopen+is%3Aissue+user%3AAstroPlant+label%3Ainstaller
[search-AstroPlant-repo-label-auto-updater]: https://github.com/issues?q=is%3Aopen+is%3Aissue+repo%3AAstroPlant%2FAstroPlant+label%3Aauto-updater
[search-AstroPlant-org-label-auto-updater]: https://github.com/issues?q=is%3Aopen+is%3Aissue+user%3AAstroPlant+label%3Aauto-updater
[search-AstroPlant-repo-label-deprecation-help]: https://github.com/issues?q=is%3Aopen+is%3Aissue+repo%3AAstroPlant%2FAstroPlant+label%3Adeprecation-help
[search-AstroPlant-org-label-deprecation-help]: https://github.com/issues?q=is%3Aopen+is%3Aissue+user%3AAstroPlant+label%3Adeprecation-help
[search-AstroPlant-repo-label-electron]: https://github.com/issues?q=is%3Aissue+repo%3AAstroPlant%2FAstroPlant+is%3Aopen+label%3Aelectron
[search-AstroPlant-org-label-electron]: https://github.com/issues?q=is%3Aopen+is%3Aissue+user%3AAstroPlant+label%3Aelectron
[search-AstroPlant-repo-label-work-in-progress]: https://github.com/pulls?q=is%3Aopen+is%3Apr+repo%3AAstroPlant%2FAstroPlant+label%3Awork-in-progress
[search-AstroPlant-org-label-work-in-progress]: https://github.com/pulls?q=is%3Aopen+is%3Apr+user%3AAstroPlant+label%3Awork-in-progress
[search-AstroPlant-repo-label-needs-review]: https://github.com/pulls?q=is%3Aopen+is%3Apr+repo%3AAstroPlant%2FAstroPlant+label%3Aneeds-review
[search-AstroPlant-org-label-needs-review]: https://github.com/pulls?q=is%3Aopen+is%3Apr+user%3AAstroPlant+label%3Aneeds-review
[search-AstroPlant-repo-label-under-review]: https://github.com/pulls?q=is%3Aopen+is%3Apr+repo%3AAstroPlant%2FAstroPlant+label%3Aunder-review
[search-AstroPlant-org-label-under-review]: https://github.com/pulls?q=is%3Aopen+is%3Apr+user%3AAstroPlant+label%3Aunder-review
[search-AstroPlant-repo-label-requires-changes]: https://github.com/pulls?q=is%3Aopen+is%3Apr+repo%3AAstroPlant%2FAstroPlant+label%3Arequires-changes
[search-AstroPlant-org-label-requires-changes]: https://github.com/pulls?q=is%3Aopen+is%3Apr+user%3AAstroPlant+label%3Arequires-changes
[search-AstroPlant-repo-label-needs-testing]: https://github.com/pulls?q=is%3Aopen+is%3Apr+repo%3AAstroPlant%2FAstroPlant+label%3Aneeds-testing
[search-AstroPlant-org-label-needs-testing]: https://github.com/pulls?q=is%3Aopen+is%3Apr+user%3AAstroPlant+label%3Aneeds-testing

[beginner]:https://github.com/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3Abeginner+label%3Ahelp-wanted+user%3AAstroPlant+sort%3Acomments-desc
[help-wanted]:https://github.com/issues?q=is%3Aopen+is%3Aissue+label%3Ahelp-wanted+user%3AAstroPlant+sort%3Acomments-desc+-label%3Abeginner
