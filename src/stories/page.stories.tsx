import type { Meta, StoryObj } from "@storybook/react";
import type { ComponentProps } from "react";

import App from "@/app";

type StoryProps = ComponentProps<typeof App>;

const meta: Meta<StoryProps> = {
	component: App,
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Base: Story = {
	args: {},
};
