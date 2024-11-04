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

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

### Blog

To create a new blog post run the [create_blog_post](create_blog_post) script with a short title as
the argument, for example:

```bash
./create_blog_post "New blog post!"
```

The title is used in the created file name and in the post URL so use something short and
meaningful. The blog post itself then can contain a longer title specified in the `title` front
matter.

See more details about writing blog posts in the [blog.md](blog.md) document.
