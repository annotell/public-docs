const math = require('remark-math');
const katex = require('rehype-katex');

module.exports = {
  title: "Kognic",
  tagline: "API Documentation of Kognic Platform APIs",
  url: "https://kognic.com",
  baseUrl: "/", // previously the same as repo name
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
          editUrl: "https://github.com/annotell/public-docs/docs-src/", // TODO: remove annotell
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
  plugins: [require.resolve('docusaurus-lunr-search')],
};
