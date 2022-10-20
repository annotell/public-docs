module.exports = {
  title: "Kognic",
  tagline: "API Documentation of Kognic Platform APIs",
  url: "https://kognic.com",
  baseUrl: "/annotell-python/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "annotell", // Usually your GitHub org/user name.
  projectName: "annotell-python", // Usually your repo name.
  themes: [
    '@saucelabs/theme-github-codeblock'
  ],
  themeConfig: {
    navbar: {
      logo: {
        alt: "Kognic",
        src: "img/kognic-logo-black.png",
        srcDark: "img/kognic-logo-white.png",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "API",
          position: "left",
        },
        {
          href: "https://github.com/annotell/annotell-python",
          label: "GitHub",
          position: "right",
        },
      ],
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/annotell/annotell-python/edit/gh-pages/docs-src/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
