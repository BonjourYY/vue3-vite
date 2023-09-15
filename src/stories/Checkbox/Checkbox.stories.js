import Checkbox from "./Checkbox.vue";

export default {
  title: "Components/DATA DISPLAY/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  args: {
    default: "Apple",
  },
  argTypes: { onChange: { action: "changed" } },
};

export const Checked = {
  args: {
    modelValue: true,
    value: "apple",
    disabled: false,
    indeterminate: false,
  },
  render: (args) => ({
    components: { Checkbox },
    setup() {
      return { args };
    },
    template:
      "<Checkbox v-bind='args' v-model='args.modelValue'>{{ args.default }}</Checkbox>",
  }),
};

export const Unchecked = {
  args: {
    modelValue: false,
    value: "apple",
    disabled: false,
    indeterminate: false,
  },
  render: (args) => ({
    components: { Checkbox },
    setup() {
      return { args };
    },
    template:
      "<Checkbox v-bind='args' v-model='args.modelValue'>{{ args.default }}</Checkbox>",
  }),
};

export const Indeterminate = {
  args: {
    modelValue: true,
    value: "apple",
    disabled: false,
    indeterminate: true,
  },
  render: (args) => ({
    components: { Checkbox },
    setup() {
      return { args };
    },
    template:
      "<Checkbox v-bind='args' v-model='args.modelValue'>{{ args.default }}</Checkbox>",
  }),
};

export const Disabled = {
  args: {
    modelValue: true,
    value: "apple",
    disabled: true,
    indeterminate: false,
  },
  render: (args) => ({
    components: { Checkbox },
    setup() {
      return { args };
    },
    template:
      "<Checkbox v-bind='args' v-model='args.modelValue'>{{ args.default }}</Checkbox>",
  }),
};
