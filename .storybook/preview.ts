import type { Preview } from "@storybook/react-vite";
import type { ThemeConfig } from "storybook-addon-data-theme-switcher";
import "@/globals.css";

export const initialGlobals = {
	dataThemes: {
		list: [
			{ name: "Theme 1", dataTheme: "theme1", color: "hsl(225, 21%, 49%" },
			{ name: "Theme 2", dataTheme: "theme2", color: "hsl(0, 0%, 90%)" },
			{ name: "Theme 3", dataTheme: "theme3", color: "hsl(268, 75%, 9%)" },
		],
		dataAttribute: "data-theme",
		clearable: true,
		toolbar: {
			title: "Change data-theme attribute",
			icon: "PaintBrushIcon",
		},
	} satisfies ThemeConfig,
};

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
	initialGlobals,
};

export default preview;

