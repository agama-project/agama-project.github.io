import React, { useEffect, useRef, useState } from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";
import useBaseUrl from "@docusaurus/useBaseUrl";
import "swagger-ui-dist/swagger-ui.css";
import styles from "./styles.module.css";

interface SwaggerViewerProps {
  specUrl: string;
}

function SwaggerComponent({ specUrl }: SwaggerViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const resolvedSpecUrl = useBaseUrl(specUrl);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function initSwagger() {
      try {
        const module = await import("swagger-ui-dist/swagger-ui-bundle" as any);
        const SwaggerUIBundle = module.default || module;

        if (isMounted && containerRef.current) {
          SwaggerUIBundle({
            url: resolvedSpecUrl,
            domNode: containerRef.current,
            deepLinking: true,
            presets: [SwaggerUIBundle.presets.apis],
            layout: "BaseLayout",
            defaultModelsExpandDepth: 1,
            defaultModelExpandDepth: 1,
            docExpansion: "list",
            showExtensions: true,
            showCommonExtensions: true,
          });
        }
      } catch (err: any) {
        if (isMounted) {
          setError(
            err.message ||
              "Failed to initialize Swagger UI from bundled swagger-ui-dist"
          );
        }
      }
    }

    initSwagger();

    return () => {
      isMounted = false;
    };
  }, [resolvedSpecUrl]);

  if (error) {
    return <div className={styles.error}>Error loading Swagger UI: {error}</div>;
  }

  return (
    <div className={styles.swaggerWrapper}>
      <div ref={containerRef} className="swagger-ui-container" />
    </div>
  );
}

export default function SwaggerViewer(props: SwaggerViewerProps) {
  return (
    <BrowserOnly
      fallback={<div className={styles.loading}>Loading API Documentation...</div>}
    >
      {() => <SwaggerComponent {...props} />}
    </BrowserOnly>
  );
}
