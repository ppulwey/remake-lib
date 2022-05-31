import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Container from "./Container";

export default {
  title: "Remake-Lib/Container",
  component: Container,
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => (
  <Container {...args} />
);

export const Default = Template.bind({});

Default.args = {};
