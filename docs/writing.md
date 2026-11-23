# Writing posts

Posts are separated by language:

```text
src/content/blog/en/my-post.md -> /blog/my-post
src/content/blog/ko/my-post.md -> /ko/blog/my-post
```

Use the same filename in both folders for translated versions. The `en` / `ko`
links on an article will open the matching translation when it exists; otherwise,
they return to the selected language's blog list.

```markdown
---
title: 'Post title'
description: 'A short summary shown in lists and search results.'
publishDate: 2026-11-23
updatedDate: 2026-11-24 # optional
tags: [cve, web-security]
language: English
draft: false
comment: false
---

Write the article in Markdown here.
```

Use `language: 한국어` for Korean posts. Before publishing, run:

```bash
corepack pnpm build
```

## Editing the About page

The About page is also written in Markdown:

```text
src/content/about/en.md -> /about
src/content/about/ko.md -> /ko/about
```

The route keeps the shared profile photo and Ink layout. Edit the frontmatter
description and the Markdown body to update the localized profile content.
