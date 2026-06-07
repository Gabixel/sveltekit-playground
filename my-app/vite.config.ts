import { sveltekit } from "@sveltejs/kit/vite";
import { type UserConfig } from "vite";

// import sveltekitConfig from "./svelte.config.js";

const config = {
	plugins: [
		sveltekit(
			// 	{
			// 	// ...(sveltekitConfig.kit as any),
			// 	// compilerOptions: sveltekitConfig.compilerOptions as any,
			// 	// vitePlugin: {},
			// }
		),
	],
	define: {
		"process.env.NODE_ENV":
			process.env.NODE_ENV === "production" ? '"production"' : '"development"',
	},
} satisfies UserConfig;

export default config;