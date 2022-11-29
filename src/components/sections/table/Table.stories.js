import Table from "./Table.vue";

export default {
  title: "components/Table",
  component: Table,
};

const Template = (args) => ({
  components: { Table },
  setup() {
    return { args };
  },
  template: '<Table v-bind="args">this is a Table</Table>',
});

export const Default = Template.bind({});
