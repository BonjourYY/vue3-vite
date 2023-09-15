/** @type { import('@storybook/vue3').Preview } */
import "../src/style/variables.scss";
const preview = {
  parameters: {
    docs: {
      toc: true,
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
