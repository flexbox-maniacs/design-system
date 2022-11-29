import Stack from "./Stack.vue";

export default {
  title: "ui/Stack",
  component: Stack,
};

const Template = (args) => ({
  components: { Stack },
  setup() {
    return { args };
  },
  template: '<Stack v-bind="args"><a>item</a><a>item</a></Stack>',
});

export const Default = Template.bind({});
