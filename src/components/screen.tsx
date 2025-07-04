import clsx from "clsx/lite";

interface ScreenProps {
	children: React.ReactNode;
}

export function Screen({ children }: ScreenProps) {
	return (
		<div
			id="calculator-screen"
			className={clsx(
				"rounded-lg w-full p-5",
				"theme1:bg-theme1b2 theme2:bg-theme2b2 theme3:bg-theme3b1",
				"transition-colors duration-500",
			)}
		>
			<h2
				id="calculator-text"
				className={clsx(
					"text-right",
					"theme1:text-theme1t1 theme2:text-theme2t0 theme3:text-theme3t0",
					"text-[32px] font-bold font-league-spartan",
					"transition-colors duration-500",
				)}
			>
				{children}
			</h2>
		</div>
	);
}
