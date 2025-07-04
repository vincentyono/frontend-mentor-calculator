import clsx from "clsx/lite";
import { useCalculator } from "@/hooks/use-calculator";

export function Screen() {
	const n = useCalculator((state) => state.n);
	return (
		<div
			id="calculator-screen"
			className={clsx(
				"rounded-lg w-full p-6",
				"theme1:bg-theme1b2 theme2:bg-theme2b2 theme3:bg-theme3b1",
				"transition-colors duration-500",
			)}
		>
			<h2
				id="calculator-text"
				className={clsx(
					"text-right w-fit float-right",
					"theme1:text-theme1t1 theme2:text-theme2t0 theme3:text-theme3t0",
					"text-5xl font-bold font-league-spartan",
					"transition-colors duration-500",
					"max-[525px]:text-4xl",
				)}
			>
				{n}
			</h2>
		</div>
	);
}
