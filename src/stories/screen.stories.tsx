import type { Meta, StoryObj } from "@storybook/react";
import type { ComponentProps } from "react";

import { Screen } from "@/components/screen";

type StoryProps = ComponentProps<typeof Screen>;

const meta: Meta<StoryProps> = {
	component: Screen,
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Base: Story = {
	args: {},
};
