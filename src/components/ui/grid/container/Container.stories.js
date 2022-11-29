import Container from "./Container.vue";

export default {
  title: "ui/grid/Container",
  conmponent: Container,
};

const Template = (args) => ({
  components: { Container },
  setup() {
    return { args };
  },
  template: '<Container v-bind="args">container</Container>',
});

export const Default = Template.bind({});
