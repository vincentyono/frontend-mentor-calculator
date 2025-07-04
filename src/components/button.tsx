import clsx from "clsx/lite";

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
	className?: string;
	variant: "primary" | "secondary" | "attention";
}

export function Button({ className, children, onClick, variant }: ButtonProps) {
	const variants = {
		primary:
			"text-[32px] " + // need space at the end
			"theme1:text-theme1t0 theme1:bg-theme1k4 theme1:border-theme1k5 theme1:hover:bg-[#ffffff] active:theme1:border-[#ffffff] " + // need space at the end
			"theme2:text-theme2t0 theme2:bg-theme2k4 theme2:border-theme2k5 theme2:hover:bg-[#ffffff] active:theme2:border-[#ffffff] " + // need space at the end
			"theme3:text-theme3t0 theme3:bg-theme3k4 theme3:border-theme3k5 theme3:hover:bg-[#6b34ac] active:theme3:border-[#6b34ac]",
		secondary:
			"min-[325px]:text-[18px] " + // need space at the end
			"theme1:text-theme1t1 theme1:bg-theme1k0 theme1:border-theme1k1 theme1:hover:bg-[#a2b3e1] active:theme1:border-[#a2b3e1] " + // need space at the end
			"theme2:text-theme2t1 theme2:bg-theme2k0 theme2:border-theme2k1 theme2:hover:bg-[#62b5bd] active:theme2:border-[#62b5bd] " + // need space at the end
			"theme3:text-theme3t2 theme3:bg-theme3k0 theme3:border-theme3k1 theme3:hover:bg-[#8631b0] active:theme3:border-[#8631b0]",
		attention:
			"min-[325px]:text-[18px] " + // need space at the end
			"theme1:text-theme1t1 theme1:bg-theme1k2 theme1:border-theme1k3 theme1:hover:bg-[#f96c5b] active:theme1:border-[#f96c5b] " + // need space at the end
			"theme2:text-theme2t1 theme2:bg-theme2k2 theme2:border-theme2k3 theme2:hover:bg-[#ff8b38] active:theme2:border-[#ff8b38] " + // need space at the end
			"theme3:text-theme3t1 theme3:bg-theme3k2 theme3:border-theme3k3 theme3:hover:bg-[#94fff9] active:theme3:border-[#94fff9]",
	};

	return (
		<button
			type="button"
			className={clsx(
				variants[variant],
				"border-b-5",
				"pt-2 pb-0.5 rounded-lg cursor-pointer",
				"text-center font-bold font-league-spartan",
				"active:translate-y-[5px]",
				"transition-colors duration-500",
				className,
			)}
			onClick={onClick}
		>
			{children}
		</button>
	);
}
