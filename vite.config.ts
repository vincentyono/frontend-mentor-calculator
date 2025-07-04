import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import wasm from "vite-plugin-wasm";

// https://vite.dev/config/
export default defineConfig({
	plugins: [wasm(), tailwindcss(), react()],
	resolve: {
		alias: {
			"@": path.resolve(process.cwd(), "src"),
		},
	},
});
