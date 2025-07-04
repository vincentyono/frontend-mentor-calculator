import clsx from "clsx/lite";
import { Button } from "@/components/button";

export function Keypad() {
	return (
		<div
			className={clsx(
				"grid grid-cols-4 gap-5 p-6 rounded-lg",
				"max-w-[480px]",
				"theme1:bg-theme1b1 theme2:bg-theme2b1 theme3:bg-theme3b1",
				"transition-colors duration-500",
			)}
		>
			<Button variant="primary">7</Button>
			<Button variant="primary">8</Button>
			<Button variant="primary">9</Button>
			<Button variant="secondary">DEL</Button>
			<Button variant="primary">4</Button>
			<Button variant="primary">5</Button>
			<Button variant="primary">6</Button>
			<Button variant="primary">+</Button>
			<Button variant="primary">1</Button>
			<Button variant="primary">2</Button>
			<Button variant="primary">3</Button>
			<Button variant="primary">-</Button>
			<Button variant="primary">.</Button>
			<Button variant="primary">0</Button>
			<Button variant="primary">/</Button>
			<Button variant="primary">x</Button>
			<Button variant="secondary" className={`col-span-2 pt-3 pb-1.5`}>
				RESET
			</Button>
			<Button variant="attention" className={`col-span-2  pt-3 pb-1.5`}>
				=
			</Button>
		</div>
	);
}
