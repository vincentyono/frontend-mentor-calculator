import { useEffect, useReducer } from "react";

type ThemeState = {
	theme: "theme1" | "theme2" | "theme3";
};

type ThemeAction = {
	type: string;
};

const switchTheme = (theme: string) => {
	document.documentElement.setAttribute("data-theme", theme);
	localStorage.theme = theme;
};

const reducer = (state: ThemeState, action: ThemeAction): ThemeState => {
	switch (action.type) {
		case "theme1":
			switchTheme("theme1");
			return { theme: "theme1" };
		case "theme2":
			switchTheme("theme2");
			return { theme: "theme2" };
		case "theme3":
			switchTheme("theme3");
			return { theme: "theme3" };
		default:
			return state;
	}
};

export function useTheme() {
	const [state, dispatch] = useReducer(reducer, { theme: "theme1" });

	const toggleTheme = () => {
		if (state.theme === "theme1") {
			dispatch({ type: "theme2" });
		} else if (state.theme === "theme2") {
			dispatch({ type: "theme3" });
		} else {
			dispatch({ type: "theme1" });
		}
	};

	useEffect(() => {
		if (localStorage.theme) {
			dispatch({ type: localStorage.theme });
		}
	}, []);

	return { theme: state.theme, toggleTheme };
}
