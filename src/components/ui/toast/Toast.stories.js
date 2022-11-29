import Toast from "./Toast.vue";

export default {
  title: "ui/Toast",
  component: Toast,
  args: {
    text: "",
  },
};

const Template = (args) => ({
  components: { Toast },
  setup() {
    return { args };
  },
  template:
    '<Toast v-bind="args">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, iusto distinctio assumenda animi tempora et architecto culpa similique facere fugiat labore dignissimos impedit, expedita ducimus enim nihil esse soluta placeat.</Toast>',
});

export const Default = Template.bind({});
Default.args = {};
