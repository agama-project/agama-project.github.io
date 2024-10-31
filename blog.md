# Agama blog

Here are some suggestions and hints for writing the Agama blog posts.

## Style guide

We do not have any special blog style guide besides few rules mentioned below, just use common
sense. If you are unsure about something you can check one of these general developer documentation
style guides:

- https://developers.google.com/style
- https://docs.microsoft.com/style-guide/welcome/

## Front matter

The [front matter](https://docusaurus.io/docs/markdown-features#front-matter) is the YAML metadata
block at beginning of the MDX file enclosed in the `---` markers.

- The list of tags is defined in the [blog/tags.yml](blog/tags.yml) file, feel free to add new tags
  whenever needed
- The blog post publish date is taken from the file name, if there are multiple posts in the same
  day you can use the [date](https://docusaurus.io/docs/blog#blog-post-date) front matter to specify
  the time more precisely
- If the blog post is a generic announcement on behalf of the whole team (e.g. a new Agama release)
  then do not specify the blog post author. If it is a specific post by a single author then use the
  [author](https://docusaurus.io/docs/blog#inline-authors) tag in the front matter.
- See more details in the
  [documentation](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog#markdown-front-matter)

## Style

- Use [sentence style capitalization](
  https://developers.google.com/style/capitalization#capitalization-in-titles-and-headings) in the
  heading and titles
- Add a short heading anchor explicitly, although Docusaurus generates them automatically using a
  predefined anchor avoids changing it after fixing a typo or rewording

## Syntax highlighting

Syntax highlighting in code blocks works with the usual three backticks followed by the language name.

    ```json
    {
      "search": "/dev/vda1",
      "delete": true
    }
    ```

Not all languages are enabled by default, if your code is not highlighted for a specific language
then very likely it is not enabled. Check the supported languages in
`node_modules/prismjs/components/prism-*.js` files and enable the language in the
[docusaurus.config.ts](docusaurus.config.ts) configuration file at the `additionalLanguages` key.

## Images

Place the images into the `static/img/blog/XXXX-YY-ZZ` directory and reference them using the usual
Markdown syntax:

    ![Detailed image description](../static/img/blog/XXXX-YY-ZZ/image.png)

If the image is too large and you want to display it smaller or you want to display two images
side-by-side then use the `SmallImageBox` custom component for that:

    import SmallImageBox from "@site/src/components/SmallImageBox";

    <SmallImageBox>
      ![Image1](../static/img/blog/XXXX-YY-ZZ/image1.png)
      ![Image2](../static/img/blog/XXXX-YY-ZZ/image2.png)
    </SmallImageBox>

## Docusaurus admonitions

Docusaurus support using [admonitions](https://docusaurus.io/docs/markdown-features/admonitions),
fancy information boxes.

    :::warning

    Important warning!

    :::

Note: The empty lines around the text are important!

## Anchors

Docusaurus generates anchors for all headings automatically. But in some cases you might need to
reference something else, for example an image or code snippet.

In that case use the React component for placing the anchor

    <a id="my-anchor"></a>

and reference it with

    <a href="#my-anchor">link</a>

Do not use the usual Markdown link, Docusaurus then reports a false positive warning about missing
anchor definition. It seems that it checks only for the Markdown anchors and not for the anchors
added by the React components...

Make sure the ID is unique and does not conflict with some automatically generated heading anchor.

## Referencing

For referencing another blog post just use the full file name and optional anchor, for example:

    In Agama 9 we [fixed locking](2024-06-28-agama-9.mdx#live-iso)
