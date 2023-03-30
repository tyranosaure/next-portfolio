/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			animation: {
				"spin-slow": "spin 10s linear infinite",
				"spin-skills": "spin 75s linear infinite",
				"spin-skills-reverse": "reverse-spin 75s linear infinite",
			},
			keyframes: {
				"reverse-spin": {
					from: { transform: "rotate(360deg)" },
					to: { transform: "rotate(0deg)" },
				},
			},
		},
	},
	plugins: [require("tailwind-scrollbar")],
}
