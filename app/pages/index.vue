<template>
	<div class="w-full h-full inset-0 -z-10 bg-[#080808] bg-[linear-gradient(to_right,#0e0e0e_1px,transparent_1px),linear-gradient(to_bottom,#0e0e0e_1px,transparent_1px)] bg-[size:1.5rem_1.5rem]">
		<div class="w-full h-screen px-8 py-6 max-md:px-3 max-md:py-2">
			<div class="w-full h-full bg-[#0a0a0a]/70 rounded-2xl bg-opacity-10 relative overflow-hidden flex items-center">
				<Blobs />
				<Navbar />
				<Header class="max-[700px]:mt-[120px]"/>

				<div class="w-full h-[5px] bottom-0 absolute bg-gradient-to-r from-transparent via-purple-700/50 to-transparent"></div>
			</div>
		</div>

		<div class="max-w-[1800px] flex justify-center mt-[150px] mx-auto flex-wrap">
			<div class="w-full flex justify-center mb-12">
				<Chip :label="'Wybierz Mądrze'" />
			</div>

			<div class="w-full h-full bg-[#0a0a0a]/80 rounded-2xl border-solid border-gray-700/20 border-2 flex relative overflow-hidden group hover:bg-opacity-50 transition mx-12 flex-wrap">
				<StatsBox v-for="(box, index) in strings.statsBoxes" :key="index" :label="box.label" :value="box.value"/>

				<div class="absolute w-2/5 h-full bg-purple-600 left-1/2 -translate-x-1/2 blur-[100px] -bottom-[300px] group-hover:scale-110 transition max-[900px]:-bottom-4/5 max-[900px]:blur-[300px] max-[900px]:-left-[30%]"></div>
			</div>
		</div>
		


		<div class="max-w-[900px] px-8 flex justify-center mt-[150px] mx-auto flex-wrap gap-8 relative py-[200px]">
			<p class="w-full text-center text-[2.5rem] bg-gradient-to-t from-gray-800 to-gray-100 bg-clip-text text-transparent text-2xl font-bold">{{ strings.discordText }}</p>
			<p class="w-full text-center text-lg text-gray-500">{{ strings.discordDescription }}</p>
			<PrimaryButton :label="'Discord'" />

			<div class="w-3/5 h-[80px] bg-gray-200/20 blur-[120px] absolute top-1/2 -translate-y-1/2"></div>
		</div>


		<Footer />
		
		<GithubFloatButton />
		<Cursor />
	</div>
</template>


<script lang="ts" setup>
	import { strings } from '~/constants/strings';

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