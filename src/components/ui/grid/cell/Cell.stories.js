import Cell from "./Cell.vue";

export default {
  title: "ui/grid/Cell",
  conmponent: Cell,
};

const Template = (args) => ({
  components: { Cell },
  setup() {
    return { args };
  },
  template: '<Cell v-bind="args">aaaa</Cell>',
});

export const Default = Template.bind({});
