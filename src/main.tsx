import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app";
import "@/globals.css";
import "@fontsource-variable/league-spartan/wght.css";

const root = document.getElementById("root");

if (root) {
	createRoot(root).render(
		<StrictMode>
			<App />
		</StrictMode>,
	);
}
