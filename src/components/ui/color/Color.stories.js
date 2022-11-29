import Color from "./Color.vue";

export default {
  title: "ui/Color",
  component: Color,
  args: {
    size: 40,
  },
};

const Template = (args) => ({
  components: { Color },
  setup() {
    return { args };
  },
  template: '<Color v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  color: "red",
};
