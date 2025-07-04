import clsx from "clsx/lite";
import { Button } from "@/components/button";
import { useCalculator } from "@/hooks/use-calculator";

export function Keypad() {
	const { addCharacter, calc, deleteCharacter, reset } = useCalculator();

	return (
		<div
			className={clsx(
				"grid grid-cols-4 gap-5 max-[525px]:gap-3.5 p-6 rounded-lg",
				"theme1:bg-theme1b1 theme2:bg-theme2b1 theme3:bg-theme3b1",
				"transition-colors duration-500",
			)}
		>
			<Button
				variant="primary"
				onClick={() => {
					addCharacter("7");
				}}
			>
				7
			</Button>
			<Button
				variant="primary"
				onClick={() => {
					addCharacter("8");
				}}
			>
				8
			</Button>
			<Button
				variant="primary"
				onClick={() => {
					addCharacter("9");
				}}
			>
				9
			</Button>
			<Button
				variant="secondary"
				onClick={() => {
					deleteCharacter();
				}}
				className={`max-[525px]:text-lg`}
			>
				DEL
			</Button>
			<Button
				variant="primary"
				onClick={() => {
					addCharacter("4");
				}}
			>
				4
			</Button>
			<Button
				variant="primary"
				onClick={() => {
					addCharacter("5");
				}}
			>
				5
			</Button>
			<Button
				variant="primary"
				onClick={() => {
					addCharacter("6");
				}}
			>
				6
			</Button>
			<Button
				variant="primary"
				onClick={() => {
					addCharacter("+");
				}}
			>
				+
			</Button>
			<Button
				variant="primary"
				onClick={() => {
					addCharacter("1");
				}}
			>
				1
			</Button>
			<Button
				variant="primary"
				onClick={() => {
					addCharacter("2");
				}}
			>
				2
			</Button>
			<Button
				variant="primary"
				onClick={() => {
					addCharacter("3");
				}}
			>
				3
			</Button>
			<Button
				variant="primary"
				onClick={() => {
					addCharacter("-");
				}}
			>
				-
			</Button>
			<Button
				variant="primary"
				onClick={() => {
					addCharacter(".");
				}}
			>
				.
			</Button>
			<Button
				variant="primary"
				onClick={() => {
					addCharacter("0");
				}}
			>
				0
			</Button>
			<Button
				variant="primary"
				onClick={() => {
					addCharacter("/");
				}}
			>
				/
			</Button>
			<Button
				variant="primary"
				onClick={() => {
					addCharacter("x");
				}}
			>
				x
			</Button>
			<Button
				variant="secondary"
				className={`col-span-2 pt-3 pb-1.5 max-[525px]:pt-4 max-[525px]:pb-2.5 max-[525px]:text-lg`}
				onClick={() => {
					reset();
				}}
			>
				RESET
			</Button>
			<Button
				variant="attention"
				className={`col-span-2 pt-3 pb-1.5 max-[525px]:pt-4 max-[525px]:pb-2.5 max-[525px]:text-lg`}
				onClick={() => {
					calc();
				}}
			>
				=
			</Button>
		</div>
	);
}
