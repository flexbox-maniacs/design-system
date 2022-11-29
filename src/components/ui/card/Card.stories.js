import Card from "./Card.vue";

export default {
  title: "ui/Card",
  component: Card,
  args: {
    title: "Card title",
  },
};

const Template = (args) => ({
  components: { Card },
  setup() {
    return { args };
  },
  template: '<Card v-bind="args"><a>Card body</a></Card>',
});

export const Default = Template.bind({});
