// import * as child_process from "node:child_process";
import adapter from "@sveltejs/adapter-vercel";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	compilerOptions: {
		// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
		runes: /** @param {Object} o @param {string} o.filename */ ({ filename }) =>
			filename.split(/[/\\]/).includes("node_modules") ? undefined : true,
		// sourcemap: {},
	},
	kit: {
		output: {},
		csp: {
			mode: "hash",
		},
		adapter: adapter(
			/** @see https://svelte.dev/docs/kit/adapter-vercel */
			// TODO: https://svelte.dev/docs/kit/single-page-apps#Usage
			{
				split: false,
			},
		),
		paths: {},
		serviceWorker: {
			// TODO
			register: true,
			options: {
				type: process.env.NODE_ENV === "production" ? "classic" : "module",
				scope: "/",
			},
		},
		router: {
			type: "hash",
			resolution: "client",
		},

		// version: {
		// 	name: child_process
		// 		// TODO: check if "git" command exists?
		// 		.execSync("git rev-parse HEAD")
		// 		.toString()
		// 		.trim(),
		// },
	},
};

export default config;
