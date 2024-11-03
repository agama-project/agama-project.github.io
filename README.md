# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are
reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static
contents hosting service.

### Deployment

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
