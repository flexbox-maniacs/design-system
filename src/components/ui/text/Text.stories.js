import Text from "./Text.vue";

export default {
  title: "ui/Text",
  component: Text,
  argTypes: {
    default: {
      control: "text",
      defaultValue: "texto",
    },
  },
};

const Template = (args) => ({
  components: { Text },
  setup() {
    return { args };
  },
  template: `<Text v-bind="args">${args.default}</Text>`,
});

export const Default = Template.bind({});
