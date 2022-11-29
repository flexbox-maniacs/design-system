import Flexbox from "./Flexbox.vue";

export default {
  title: "ui/Flexbox",
  component: Flexbox,
};

const Template = (args) => ({
  components: { Flexbox },
  setup() {
    return { args };
  },
  template: '<Flexbox v-bind="args"><div>aa</div><div>aa</div</Flexbox>',
});

export const Default = Template.bind({});
Default.args = {};
