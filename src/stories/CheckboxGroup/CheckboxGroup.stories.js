import CheckboxGroup from "./CheckboxGroup.vue";

export default {
  title: "Components/DATA DISPLAY/CheckboxGroup",
  tags: ["autodocs"],
  component: CheckboxGroup,
};

export const Default = {
  args: {
    options: [
      { label: "Apple", checked: false, value: "apple" },
      { label: "Google", checked: false, value: "google" },
    ],
    modelValue: ["apple"],
  },
  render: (args) => ({
    components: { CheckboxGroup },
    setup() {
      return { args };
    },
    template: `<CheckboxGroup v-bind='args'></CheckboxGroup>`,
  }),
};
