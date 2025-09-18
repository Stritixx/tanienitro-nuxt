<template>
	<footer class="w-full bg-gradient-to-b from-transparent to-black text-gray-300 pt-[100px] pb-[80px] mt-16">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex max-sm:flex-col md:flex-row justify-between items-center">
				<div class="mb-4 md:mb-0 flex flex-wrap flex-col gap-4">
					<h2 class="text-xl font-bold">{{ strings.footerHeader }}</h2>
					<p class="text-sm text-gray-300">{{ strings.footerCopyright }}</p>
				</div>
				<div class="flex space-x-6 gap-4">
					<img src="/logo.png" alt="{{ strings.footerHeader }} Logo" class="h-12 opacity-80 select-none"/>
				</div>
			</div>
		</div>
	</footer>
</template>


<script lang="ts" setup>
	import { strings } from '~/constants/strings';
</script>