import type { Meta, StoryObj } from "@storybook/react";
import type { ComponentProps } from "react";

import { Keypad } from "@/components/keypad";

type StoryProps = ComponentProps<typeof Keypad> & {
	text: string;
};

const meta: Meta<StoryProps> = {
	component: Keypad,
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Base: Story = {
	args: {},
	render: () => <Keypad />,
};
