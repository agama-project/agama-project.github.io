import React, { useEffect, useState } from "react";
import BlogPostItem from "@theme-original/BlogPostItem";
import type BlogPostItemType from "@theme/BlogPostItem";
import type { WrapperProps } from "@docusaurus/types";
import styles from "@docusaurus/theme-classic/src/theme/Heading/styles.module.css";

import { useBlogPost } from "@docusaurus/plugin-content-blog/client";
import { useColorMode } from "@docusaurus/theme-common";
import Giscus from "@giscus/react";

type Props = WrapperProps<typeof BlogPostItemType>;

// wrapper for the BlogPostItem component to show Giscus discussions below blog posts
// the initial implementation has been generated by this command:
//   yarn swizzle @docusaurus/theme-classic BlogPostItem -- --wrap
// @see https://docusaurus.io/docs/swizzling#wrapping
export default function BlogPostItemWrapper(props: Props): JSX.Element {
  const frontMatter = useBlogPost().metadata.frontMatter;
  // allow hiding the discussion via the front matter config,
  // use "discussion: false" to disable discussion in a specific post
  const discussionEnabled = frontMatter.discussion !== false;

  // if discussion is disabled then just return the standard blog page content,
  // do not show the discussions in the blog index page
  if (!discussionEnabled || !useBlogPost().isBlogPostPage)
    return <BlogPostItem {...props} />;

  const discussionId =
    frontMatter.discussion_id && Number(frontMatter.discussion_id);

  const [discussionUrl, setDiscussionUrl] = useState(
    discussionId > 0
      ? `https://github.com/agama-project/agama-project.github.io/discussions/${discussionId}`
      : ""
  );

  // handle metadata messages from the Giscus iframe
  function handleGiscusMessage(event: MessageEvent) {
    // check the origin
    if (
      event.origin !== "https://giscus.app" ||
      event.source !==
        document
          .querySelector("giscus-widget")
          .shadowRoot.querySelector("iframe").contentWindow
    )
      return;

    // check the data
    if (!(typeof event.data === "object" && event.data.giscus)) return;

    const giscusData = event.data.giscus;
    if (
      typeof giscusData.discussion === "object" &&
      giscusData.discussion.url
    ) {
      setDiscussionUrl(giscusData.discussion.url);
    }
  }

  // register/unregister the Giscus message handler
  useEffect(() => {
    window.addEventListener("message", handleGiscusMessage);
    return () => {
      window.removeEventListener("message", handleGiscusMessage);
    };
  }, []);

  // if there is an already existing discussion show a link to it
  const discussionLink = discussionUrl ? (
    <>
      Or you can comment directly at{" "}
      <a href={discussionUrl}>this GitHub discussion</a> without authorizing the
      Giscus application.
    </>
  ) : null;

  // the "transparent_dark" theme looks better than the plain "dark"
  const theme =
    useColorMode().colorMode === "dark" ? "transparent_dark" : "light";

  const discussionProps =
    discussionId > 0
      ? // the respective GitHub discussion is explicitly set in the front matter
        { mapping: "number", term: discussionId, emitMetadata: "0" }
      : // find the respective discussion at GitHub using the blog post URL path
        { mapping: "pathname", emitMetadata: "1" };

  return (
    <>
      <BlogPostItem {...props} />
      <hr />
      <h2 className={`anchor ${styles.anchorWithStickyNavbar}`} id="comments">
        Comments
        <a
          href="#comments"
          className="hash-link"
          aria-label="Direct link to comments"
          title="Direct link to comments"
        ></a>
      </h2>
      <p>
        We are interested in your feedback, feel free to leave a comment here!
      </p>
      <p>
        To comment here you need a <a href="https://github.com/">GitHub</a>{" "}
        account and authorize the <a href="https://giscus.app/">Giscus</a>{" "}
        application. {discussionLink}
      </p>
      <p>
        Alternatively you can reach us at the{" "}
        <a href="https://web.libera.chat/#yast">#yast</a> channel at the{" "}
        <a href="https://libera.chat">Libera.Chat</a>,{" "}
        <a href="https://lists.opensuse.org/archives/list/yast-devel@lists.opensuse.org">
          YaST Development
        </a>{" "}
        mailing list or the{" "}
        <a href="https://github.com/agama-project/agama">Agama project</a> at
        GitHub.
      </p>
      <Giscus
        // to get the ID values fill the GitHub repository name at https://giscus.app/
        repo="agama-project/agama-project.github.io"
        repoId="R_kgDOM26CMg"
        category="Blog"
        categoryId="DIC_kwDOM26CMs4Cj4wq"
        reactionsEnabled="1"
        inputPosition="bottom"
        theme={theme}
        lang="en"
        loading="lazy"
        {...discussionProps}
      />
    </>
  );
}