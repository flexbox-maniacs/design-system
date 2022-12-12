import Stack from "./Stack.vue";

export default {
  title: "ui/Stack",
  component: Stack,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Stack },
  setup() {
    return { args };
  },
  template: `<Stack v-bind="args">${args.default}</Stack>`,
});

export const Default = Template.bind({});
