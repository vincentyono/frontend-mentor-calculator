import init from "calculator";
import clsx from "clsx/lite";
import { useEffect } from "react";
import { Keypad } from "@/components/keypad";
import { Logo } from "@/components/logo";
import { Screen } from "@/components/screen";
import { ThemeSwitch } from "@/components/theme-switch";

export default function App() {
	useEffect(() => {
		init();
	}, []);

	return (
		<div
			id="container"
			className={clsx(
				"flex flex-col gap-6 justify-center items-center h-full",
				"theme1:bg-theme1b0 theme2:bg-theme2b0 theme3:bg-theme3b0",
				"transition-colors duration-500",
			)}
		>
			<header className="flex justify-between items-end max-[525px]:w-[300px] min-[525px]:w-[475px]">
				<Logo />
				<ThemeSwitch />
			</header>
			<main className="flex flex-col gap-6 max-[525px]:w-[300px] min-[525px]:w-[475px]">
				<Screen />
				<Keypad />
			</main>
		</div>
	);
}
