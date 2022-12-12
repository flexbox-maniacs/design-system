import Toast from "./Toast.vue";

export default {
  title: "ui/Toast",
  component: Toast,
  argTypes: {
    variant: {
      options: ["danger", "info", "success", "warning"],
      control: { type: "radio" },
    },
    default: {
      control: "text",
      defaultValue: "sucesso",
    },
    label: {
      control: "text",
    },
  },
};

const Template = (args) => ({
  components: { Toast },
  setup() {
    return { args };
  },
  template: `<Toast v-bind="args">${!args.label ? args.default : ""}</Toast>`,
});

export const Default = Template.bind({});
Default.args = {};
