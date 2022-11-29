import Header from "./Header.vue";

export default {
  title: "components/Header",
  component: Header,
};

const Template = (args) => ({
  components: { Header },
  setup() {
    return { args };
  },
  template: '<Header v-bind="args">this is a header</Header>',
});

export const Default = Template.bind({});
