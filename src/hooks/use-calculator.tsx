import { create } from "zustand";

interface CalculatorState {
	n: string;
	addCharacter: (c: string) => void;
	deleteCharacter: () => void;
	reset: () => void;
	calc: () => void;
}

const useCalculator = create<CalculatorState>((set) => ({
	n: "0",
	addCharacter: (c: string) => set((state) => ({ n: state.n + c })),
	deleteCharacter: () => set((state) => ({ n: state.n.slice(0, -1) })),
	reset: () => set({ n: "0" }),
	calc: () => set((state) => ({ n: state.n })),
}));

export { useCalculator };
