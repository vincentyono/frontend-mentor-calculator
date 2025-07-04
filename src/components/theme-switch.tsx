import clsx from "clsx/lite";
import { useTheme } from "@/hooks/use-theme";

export function ThemeSwitch() {
	const { theme, toggleTheme } = useTheme();

	const labelStyle = clsx(
		"theme1:text-theme1t1 theme2:text-theme2t0 theme3:text-theme3t0",
		"font-semibold tracking-widest font-league-spartan",
		"transition-colors duration-500",
	);

	return (
		<div className="flex items-end gap-6">
			<label htmlFor="theme-switch" className={labelStyle}>
				THEME
			</label>
			<div id="theme-switch" className="flex flex-col">
				<div className="flex justify-around">
					<label htmlFor="theme1" className={labelStyle}>
						1
					</label>
					<label htmlFor="theme2" className={labelStyle}>
						2
					</label>
					<label htmlFor="theme3" className={labelStyle}>
						3
					</label>
				</div>
				<div
					className={clsx(
						"flex items-center p-1.5",
						"rounded-3xl w-20",
						"theme1:bg-theme1b2 theme2:bg-theme2b1 theme3:bg-theme3b1",
					)}
				>
					<button
						id={theme}
						type="button"
						className={clsx(
							"w-4 h-4 rounded-full",
							"theme1:bg-theme1k2 theme2:bg-theme2k2 theme3:bg-theme3k2",
							"hover:theme1:bg-[#f96c5b] hover:theme2:bg-[#ff8b38] hover:theme3:bg-[#94fff9]",
							"theme1:translate-x-0 theme2:translate-x-[150%] theme3:translate-x-[300%]",
							"transition-transform transition-colors duration-500",
							"cursor-pointer",
						)}
						onClick={toggleTheme}
					/>
				</div>
			</div>
		</div>
	);
}
