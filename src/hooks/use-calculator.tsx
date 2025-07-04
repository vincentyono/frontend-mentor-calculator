import { create } from "zustand";
import {
	add_character,
	calculate,
	delete_character,
} from "../../calculator/pkg/calculator";

interface CalculatorState {
	n: string;
	addCharacter: (c: string) => void;
	deleteCharacter: () => void;
	reset: () => void;
	calc: () => void;
}

const useCalculator = create<CalculatorState>((set) => ({
	n: "0",
	addCharacter: (c: string) =>
		set((state) => {
			const screenWidth =
				document.getElementById("calculator-screen")?.offsetWidth;
			const textWidth = document.getElementById("calculator-text")?.offsetWidth;

			console.log(textWidth, screenWidth);

			if (textWidth && screenWidth && textWidth + 70 >= screenWidth) {
				return { n: state.n };
			}

			return { n: add_character(c, state.n) };
		}),
	deleteCharacter: () => set((state) => ({ n: delete_character(state.n) })),
	reset: () => set({ n: "0" }),
	calc: () => set((state) => ({ n: calculate(state.n) })),
}));

export { useCalculator };
