import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Agama",
  tagline: "A Service-based Linux Installer",
  favicon: "img/favicon.svg",

  // Set the production url of your site here
  // FIXME: change url once a the project is deployed in a public site
  url: "https://agama-project.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "agama-project", // Usually your GitHub org/user name.
  projectName: "agama-project.github.io", // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: "gh-pages",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
        blog: {
          blogTitle: "Agama blog",
          blogDescription: "A blog about Agama development and new releases.",
          postsPerPage: 20,
          // the number of posts in the "Recent Posts" list
          blogSidebarCount: 20,
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/agama-social-card.png",
    navbar: {
      title: "Agama",
      // FIXME: add the logo once the project have one
      // logo: {
      //   alt: "The Agama project logo",
      //   src: "img/logo.svg",
      // },
      items: [
        {
          href: "/about",
          label: "About",
          position: "left",
        },
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Documentation",
        },
        {
          href: "/download",
          label: "Download",
          position: "left",
        },
        {
          to: "blog",
          label: "Blog",
          position: "left",
        },
        {
          href: "https://github.com/agama-project/agama",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "User",
              to: "/docs/user",
            },
            {
              label: "Development",
              to: "/docs/devel",
            },
            {
              label: "FAQ",
              to: "/faq",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/agama-project/agama",
            },
            {
              label: "IRC",
              href: "https://chat.opensuse.org/#/room/#yast:opensuse.org",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "YaST blog",
              href: "https://yast.opensuse.org/blog",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} SUSE. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      // see node_modules/prismjs/components/prism-*.js for additional languages
      additionalLanguages: ["bash", "ruby"],
    },
    colorMode: {
      respectPrefersColorScheme: true,
    },
    zoom: {
      selector: ".markdown :not(em) > img",
      background: {
        light: "rgb(255, 255, 255)",
        dark: "rgb(27, 27, 29)",
      },
    },
  } satisfies Preset.ThemeConfig,

  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],
  plugins: ["docusaurus-plugin-image-zoom"],
};

export default config;
