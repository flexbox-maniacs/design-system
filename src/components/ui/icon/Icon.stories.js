import Icon from "./Icon.vue";

export default {
  title: "ui/Icon",
  component: Icon,
};

const Template = (args) => ({
  components: { Icon },
  setup() {
    return { args };
  },
  template: '<Icon v-bind="args"/>',
});

export const Default = Template.bind({});
Default.args = {
  name: "face",
  color: "primary",
};
