import React from "react";

import styles from "./styles.module.css";

/**
 * Helper component for placing downsized images in blog.
 */
export default function SmallImage({ children, ...props }): JSX.Element {
  return (
    <div
      className={styles.smallImageBox}
      {...props}
    >
      { children }
    </div>
  );
}
