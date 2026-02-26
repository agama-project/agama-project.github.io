import React, { ReactNode, HTMLAttributes } from "react";
import styles from "./styles.module.css";

export type BadgeVariant = "success" | "danger" | "warning" | "info";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  variant?: BadgeVariant;
}

/**
 * Create a generic badge, supports several variants: "success", "danger", "warning" and "info"
 */
export function Badge({
  children,
  variant = "info",
  ...props
}: BadgeProps): JSX.Element {
  return (
    <span className={`${styles.badge} ${styles[variant]}`} {...props}>
      {children}
    </span>
  );
}

interface SinceProps {
  version: string;
}

/**
 * Create a "Since {version}" badge
 */
export function Since({ version }: SinceProps): JSX.Element {
  return <Badge>Since {version}</Badge>;
}

/**
 *  Create a "Deprecated" badge
 */
export function Deprecated(): JSX.Element {
  return <Badge variant="warning">Deprecated</Badge>;
}

/**
 *  Create a "Removed in {version}" badge
 */
export function RemovedIn({ version }: SinceProps): JSX.Element {
  return <Badge variant="danger">Removed in {version}</Badge>;
}
