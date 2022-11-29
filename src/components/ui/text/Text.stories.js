import Text from "./Text.vue";

export default {
  title: "ui/Text",
  component: Text,
};

const Template = (args) => ({
  components: { Text },
  setup() {
    return { args };
  },
  template: '<Text v-bind="args" />',
});

export const Default = Template.bind({});
