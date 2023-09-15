import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "./src",
  title: "JackFan WebSite",
  cleanUrls: true,
  srcExclude: ["**/README.md", "**/TODO.md"],
  appearance: true,
  markdown: {
    theme: "github-dark",
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "About", link: "/" },
      {
        text: "Project",
        items: [
          { text: "Royco UI", link: "/project/royco-ui/" },
          { text: "TODO LIST", link: "/project/todo/" },
        ],
      },
      { text: "Blog", link: "/blog/" },
    ],

    sidebar: {
      "/project/royco-ui": [
        {
          text: "General",
          items: [
            { text: "Button", link: "/project/royco-ui/general/button.md" },
            {
              text: "Typography",
              link: "/project/royco-ui/general/typography.md",
            },
          ],
        },
        {
          text: "Layout",
          items: [
            { text: "Divider", link: "/project/royco-ui/general/divider.md" },
            {
              text: "Space",
              link: "/project/royco-ui/general/space.md",
            },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
