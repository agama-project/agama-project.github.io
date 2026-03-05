# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation

```
$ yarn
```

## Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are
reflected live without having to restart the server.

## Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static
contents hosting service.

## Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and
push to the `gh-pages` branch.

## Search

The search functionality is provided using the
[docusaurus-lunr-search](https://github.com/praveenn77/docusaurus-lunr-search) plugin. It
automatically indexes all documentation pages and the blog, it does not index the normal pages like
the main page or the about page. The search field is added at each page in the page title bar at the
top.

It uses the [lunr](https://lunrjs.com) search engine internally. The engine supports using wildcards
or usual `+` or `-` search terms, see more details in the
[documentation](https://lunrjs.com/guides/searching.html).

:warning: *The search index is generated only in a production build, not during development! To test
the search functionality locally you need to run the `yarn build && yarn serve` commands!*

## Blog

To create a new blog post run the [create_blog_post](create_blog_post) script with a short title as
the argument, for example:

```bash
./create_blog_post "New blog post!"
```

The title is used in the created file name and in the post URL so use something short and
meaningful. The blog post itself then can contain a longer title specified in the `title` front
matter.

See more details about writing blog posts in the [blog.md](blog.md) document.

## Discussions

The [Giscus](https://giscus.app/) application is used for discussing the blog posts. Internally it
uses the [GitHub discussions](https://docs.github.com/en/discussions) as the backend and storage.
The advantage is that we can use the existing GitHub infrastructure and user authentication. Giscus
is basically just a wrapper for embedding the GitHub discussions into another page.

By default discussions are enabled below all blog posts. To disable discussion under a specific
blog post set `discussion: false` in the blog post front matter.

For blog posts discussions it was created a special
[Blog](https://github.com/agama-project/agama-project.github.io/discussions/categories/blog)
discussion category to easily distinguish the blog posts discussions from others.

### Permissions

The new blog posts discussions can be created by Agama developers, the other users can create them
only via Giscus. All interactions from the blog post page are done through the Giscus application.
That means the users need to authorize the Giscus application to post on their behalf.

If you do not want to authorize the Giscus you can comment directly at the respective existing
GitHub discussion without using the Giscus proxy.

### Mapping

There two ways how to find the respective GitHub discussion for a blog post. Each approach has
different pros and cons so the Agama blog supports both.

#### Search blog post URL path

The respective discussion at GitHub is found by searching the URL path in the discussion title.
E.g. for the `https://agama-project.github.io/blog/2023/02/16/d-installer-0-7` blog post URL
it searches for a discussion with the `blog/2023/02/16/d-installer-0-7` title (or similar, see
below).

Advantages:

- Giscus can create a new discussion automatically if it does not exist yet
- Discussion are created only when needed, if nobody comments no discussion is created

Disadvantages:

- The first user who comments needs to authorize the Giscus application, it is not possible to
  comment at GitHub because the discussion does not exist yet and external users cannot create a new
  blog post discussion, they can only comment in an existing one
- Slightly slower loading, Giscus first needs to run a GitHub search query to find the URL of the
  respective discussion
- The GitHub search query uses a fuzzy matching, if more blog posts use a similar URL path or title
  then GitHub might return a wrong discussion as the search result

#### Explicit discussion ID

The respective GitHub discussion ID is defined directly in the blog post front matter. E.g.
for the `https://github.com/agama-project/agama-project.github.io/discussions/42` discussion URL
set the `discussion_id: 42` value in the blog post front matter.

Advantages:

- Faster loading, no need to run a GitHub query, the discussion URL is already known
- Avoids using a wrong discussion because of the fuzzy GitHub search (see above)
- The first user can add a comment directly to GitHub discussion without need to authorize the
  Giscus application

Disadvantages:

- The discussion needs to be created manually in advance by the Agama developers, it cannot be
  created automatically by Giscus or any external user later

#### Usage

For the old imported blog posts we should use the first approach with URL path mapping to avoid
creating more than a dozen of discussions manually where very likely nobody would comment.

For new blog posts we should prefer using a fixed discussion ID to allow commenting at GitHub right
from the first comment.

Of course it is possible to change the mapping later, e.g. let the Giscus create a new discussion
automatically and later pin it to the blog using its ID.

## Versioning

If you document a new feature added in some specific Agama release or if you want to mark some
features as deprecated or removed then use the `<Since>`, `<Deprecated>` or `<RemovedIn>` custom
components.

```md
import { Since } from "@site/src/components/Badge";
...
`foo` <Since version="16.1"/>: configuration option for ...
```
