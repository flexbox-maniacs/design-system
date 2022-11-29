import Link from "./Link.vue";
import vueRouter from "storybook-vue3-router";

export default {
  title: "ui/Link",
  component: Link,
};

const Template = (args) => ({
  components: { Link },
  setup() {
    return { args };
  },
  template: '<Link v-bind="args">Link</Link>',
});

export const Internal = Template.bind({});
Internal.args = {
  to: "/",
};
export const External = Template.bind({});
External.args = {
  href: "link",
};

Internal.decorators = [vueRouter()];
