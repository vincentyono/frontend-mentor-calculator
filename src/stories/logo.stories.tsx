import type { Meta, StoryObj } from "@storybook/react";
import type { ComponentProps } from "react";

import { Logo } from "@/components/logo";

type StoryProps = ComponentProps<typeof Logo>;

const meta: Meta<StoryProps> = {
	component: Logo,
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Base: Story = {
	args: {},
};
