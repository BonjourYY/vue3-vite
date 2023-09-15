import Typography from "./Typography.vue";

/**
 * moren
 */
export default {
  title: "Components/DATA DISPLAY/Typography",
  component: Typography,
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
      options: [
        "headline1",
        "headline2",
        "headline3",
        "headline4",
        "headline5",
        "subtitle1",
        "subtitle2",
        "body1",
        "body2",
        "button",
        "assistive1",
        "assistive2",
      ],
    },
    weight: {
      control: {
        type: "select",
      },
      options: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
    color: {
      control: {
        type: "color",
      },
    },
  },
  args: {
    default: "The library for web and native user interfaces",
    variant: "body1",
    weight: 400,
    color: "#000000",
  },
  parameters: {
    backgrounds: {
      values: [
        { name: "red", value: "#f00" },
        { name: "green", value: "#0f0" },
        { name: "blue", value: "#00f" },
      ],
    },
  },
  template: "<Typography v-bind='args'>{{ args.default }}</Typography>",
};

export const Headline1 = {};
