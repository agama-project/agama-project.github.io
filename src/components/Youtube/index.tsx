import React from "react";

import styles from "./styles.module.css";

/**
 * Helper component for embedding Youtube videos to the blog.
 */
export default function Youtube({ videoId, ...props }): JSX.Element {
  return (
    <iframe
      src={`https://www.youtube.com/embed/${videoId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      className={styles.youtubeVideo}
      {...props}
    />
  );
}
