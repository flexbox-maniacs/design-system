import Button from "./Button.vue";
import vueRouter from "storybook-vue3-router";

export default {
  title: "ui/Button",
  component: Button,
  args: {
    label: "button",
  },
};

const Template = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: '<Button v-bind="args" />',
});

export const Default = Template.bind({});

export const Link = Template.bind({});
Link.args = {
  color: "var(--link)",
  href: "a",
};

export const Input = Template.bind({});
Input.args = {
  variant: "primary",
  submit: true,
};

export const Route = Template.bind({});
Route.args = {
  color: "var(--contrast-1)",
  to: "/",
  endingIcon: "chevron_right",
};
Route.decorators = [vueRouter()];
