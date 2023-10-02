import { StoryFn, Meta } from "@storybook/react";

import { MainPage } from "./MainPage";

export default {
  title: "pages/MainPage",
  component: MainPage,
  argTypes: {},
} as Meta<typeof MainPage>;

const StorybookComponent: StoryFn<typeof MainPage> = (args) => (
  <MainPage {...args} />
);

export const Primary = StorybookComponent.bind({});
Primary.args = {
};
