import tailwindcss from "@tailwindcss/vite";



export default defineNuxtConfig({
  	compatibilityDate: '2025-07-15',
  	devtools: { enabled: false },
	components: true,
	ssr: true,
	
  	modules: ['@nuxt/eslint'],
	vite: {
		plugins: [
			tailwindcss()
		]
	},
	css: ['@/assets/css/main.css'],
})