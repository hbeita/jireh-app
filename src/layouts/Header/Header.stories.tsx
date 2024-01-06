import Header from './Header';

export default {
  title: 'Layout/Header',
  component: Header,
  argTypes: {
    title: { control: 'text' },
  },
};

const Template = (args) => <Header {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'My Awesome App',
};
