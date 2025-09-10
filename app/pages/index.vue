<template>
	<div class="absolute inset-0 z-50">
		<div class="absolute inset-0 -z-10 h-full w-full bg-[#080808] bg-[linear-gradient(to_right,#0e0e0e_1px,transparent_1px),linear-gradient(to_bottom,#0e0e0e_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] px-8 py-6 max-[700px]:px-0 max-[700px]:py-0">
			<div class="w-full h-full bg-[#0a0a0a]/70 rounded-2xl bg-opacity-10 relative overflow-hidden flex items-center">
				<Blobs />
				<Navbar />
				<Header class="max-[700px]:mt-[120px]"/>
				<Particles class="absolute opacity-10 -z-10 animate-canvas" />
				
				<Cursor />

				<div class="w-full h-[5px] bottom-0 absolute bg-gradient-to-r from-transparent via-purple-700/50 to-transparent"></div>
			</div>
		</div>
		<GithubFloatButton />
	</div>
</template>


<script lang="ts" setup>
	useHead({
		title: 'TanieNitro - Koniec z przepłacaniem!',
		meta: [
			{ name: 'description', content: 'Działamy na rynku od 2022 roku oferując naszym klientom najwyższą jakość produktów. W tym czasie zebraliśmy ponad 5000 legitchecków co świadczy o wysokim zaufaniu do nas! Dołącz na nasz serwer Discord już dziś i przekonaj się sam.' },
			{ name: 'keywords', content: 'TanieNitro, Discord Nitro, Boosty na serwer, Tanie Nitro, promocje, zniżki, najlepsze ceny, zakupy online, discord, discord shop, sklep discord, sklep, stritixx', },
			{ name: 'author', content: 'Stritixx' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ name: 'robots', content: 'index, follow' },
			{ property: 'og:title', content: 'TanieNitro - Koniec z przepłacaniem!' },
			{ property: 'og:description', content: 'Działamy na rynku od 2022 roku oferując naszym klientom najwyższą jakość produktów. W tym czasie zebraliśmy ponad 5000 legitchecków co świadczy o wysokim zaufaniu do nas! Dołącz na nasz serwer Discord już dziś i przekonaj się sam.' },
			{ property: 'og:type', content: 'website' },
			{ property: 'og:url', content: 'https://tanienitro.com' },
			{ property: 'og:image', content: 'https://tanienitro.com/purple_logo.png' },
			{ name: 'twitter:card', content: 'summary_large_image' },
			{ name: 'twitter:title', content: 'TanieNitro - Koniec z przepłacaniem!' },
			{ name: 'twitter:description', content: 'Działamy na rynku od 2022 roku oferując naszym klientom najwyższą jakość produktów. W tym czasie zebraliśmy ponad 5000 legitchecków co świadczy o wysokim zaufaniu do nas! Dołącz na nasz serwer Discord już dziś i przekonaj się sam.' },
			{ name: 'twitter:image', content: 'https://tanienitro.com/purple_logo.png' },
			{ name: 'lang', content: 'pl' }
		],
		link: [
			{ rel: 'icon', type: 'image/png', href: '/favicon.png' }
		]
	})
</script>