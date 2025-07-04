import clsx from "clsx/lite";

export function Logo() {
	return (
		<h1
			className={clsx(
				"text-3xl font-bold font-league-spartan",
				"theme1:text-theme1t1 theme2:text-theme2t0 theme3:text-theme3t0",
				"transition-colors duration-500",
			)}
		>
			calc
		</h1>
	);
}
