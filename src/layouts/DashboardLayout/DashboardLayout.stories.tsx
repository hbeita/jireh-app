import Dashboard from "./DashboardLayout";

export default {
  component: Dashboard,
  argTypes: {
    children: 'Dashboard content',
  },
};

const Template = (args) => <Dashboard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Dashboard content',
};
