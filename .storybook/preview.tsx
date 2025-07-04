import type { Preview } from "@storybook/react-vite";
import type { ThemeConfig } from "storybook-addon-data-theme-switcher";
import "@/globals.css";
import "@fontsource-variable/league-spartan/wght.css";

export const initialGlobals = {
	dataTheme: "theme1",
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
		backgrounds: {
			options: {
				theme1: { name: "Theme 1", value: "hsl(225, 26%, 31%)" },
				theme2: { name: "Theme 2", value: "hsl(0, 0%, 90%)" },
				theme3: { name: "Theme 3", value: "hsl(268, 75%, 9%)" },
			},
		},
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
