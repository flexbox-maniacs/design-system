import Loader from "./Loader.vue";

export default {
  title: "ui/Loader",
  component: Loader,
  args: {},
};

const Template = (args) => ({
  components: { Loader },
  setup() {
    return { args };
  },
  template: '<Loader v-bind="args" />',
});

export const Default = Template.bind({});
