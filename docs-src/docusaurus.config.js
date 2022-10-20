module.exports = {
  title: "Kognic",
  tagline: "API Documentation of Kognic Platform APIs",
  url: "https://kognic.com",
  baseUrl: "/public-docs/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "kognic", // Usually your GitHub org/user name.
  projectName: "public-docs", // Usually your repo name.
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
          href: "https://github.com/annotell/public-docs", // TODO: remove annotell
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
            "https://github.com/annotell/public-docs/docs-src/", // TODO: remove annotell
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
