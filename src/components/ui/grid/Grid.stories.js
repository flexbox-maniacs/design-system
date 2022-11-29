import Grid from "./Grid.vue";
import Cell from "./cell/Cell.vue";

export default {
  title: "ui/grid/Grid",
  conmponent: Grid,
};

const Template = (args) => ({
  components: { Grid, Cell },
  setup() {
    return { args };
  },
  template: '<Grid v-bind="args"><Cell>cell</Cell><Cell>cell</Cell></Grid>',
});

export const Default = Template.bind({});
