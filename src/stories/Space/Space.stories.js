import Space from "./Space.vue";

export default {
  title: "Components/DATA DISPLAY/Space",
  component: Space,
  tags: ["autodocs"],
  argTypes: {
    direction: {
      control: { type: "select" },
      options: ["horizontal", "vertical"],
    },
    align: {
      control: { type: "select" },
      options: ["start", "center", "end", "baseline"],
    },
  },
};

export const Default = {
  args: {
    fill: true,
    direction: "horizontal",
    wrap: false,
    align: "start",
    space: 8,
  },
  render: (args) => ({
    components: { Space },
    setup() {
      return { args };
    },
    template: "<Space v-bind='args'><p>Apple</p><p>Facebook</p></Space>",
  }),
};
