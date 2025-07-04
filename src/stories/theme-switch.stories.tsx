import type { Meta, StoryObj } from "@storybook/react";
import type { ComponentProps } from "react";

import { ThemeSwitch } from "@/components/theme-switch";

type StoryProps = ComponentProps<typeof ThemeSwitch> & {
	text: string;
};

const meta: Meta<StoryProps> = {
	component: ThemeSwitch,
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Base: Story = {
	args: {},
};
