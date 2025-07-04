import type { Meta, StoryObj } from "@storybook/react";
import type { ComponentProps } from "react";

import { Button } from "@/components/button";

type StoryProps = ComponentProps<typeof Button> & {
	text: string;
};

const meta: Meta<StoryProps> = {
	component: Button,
};

export default meta;

type Story = StoryObj<StoryProps>;

const KeypadBackground = ({ children }: React.HTMLProps<HTMLDivElement>) => {
	return (
		<div className="p-32 w-fit theme1:bg-theme1b1 theme2:bg-theme2b1 theme3:bg-theme3b1">
			{children}
		</div>
	);
};

export const Primary: Story = {
	args: {
		text: "Button",
	},
	render: ({ text }) => (
		<KeypadBackground>
			<Button variant="primary">{text}</Button>
		</KeypadBackground>
	),
};

export const Secondary: Story = {
	args: {
		text: "Button",
	},
	render: ({ text }) => (
		<KeypadBackground>
			<Button variant="secondary">{text}</Button>
		</KeypadBackground>
	),
};

export const Attention: Story = {
	args: {
		text: "Button",
	},
	render: ({ text }) => (
		<KeypadBackground>
			<Button variant="attention">{text}</Button>
		</KeypadBackground>
	),
};
