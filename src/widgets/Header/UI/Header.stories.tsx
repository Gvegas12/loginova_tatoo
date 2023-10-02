import { StoryFn, Meta } from "@storybook/react";

import { Header } from "./Header";

export default {
  title: "shared/UI/Header",
  component: Header,
  argTypes: {},
} as Meta<typeof Header>;

const StorybookComponent: StoryFn<typeof Header> = (args) => (
  <Header {...args} />
);

export const Primary = StorybookComponent.bind({});
Primary.args = {};
