import DashboardPage from "./DashboardPage";

export default {
  component: DashboardPage,
  argTypes: {
    children: 'Dashboard content',
  },
};

const Template = (args) => <DashboardPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Dashboard content',
};
