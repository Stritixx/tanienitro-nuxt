<template>
	<div class="absolute top-0 w-full">
		<div class="h-[100px] w-full flex justify-center relative z-50">
			<div class="w-3/5 h-full flex items-center justify-between max-[1100px]:w-4/5 ">
				<h1 class="text-gray-300 text-2xl font-bold">{{ strings.companyName }}</h1>

				<ul class="flex gap-12 text-gray-200 items-center max-[700px]:hidden">
					<li v-for="link in strings.navLinks" :key="link.label">
						<NuxtLink :to="link.href">{{ link.label }}</NuxtLink>
					</li>

					<NuxtLink to="https://discord.gg/okazja" target="_blank" rel="noopener noreferrer" class="">
						<PrimaryButton :label="'Discord'"/>
					</NuxtLink>
				</ul>

				<NuxtLink to="https://discord.gg/okazja" target="_blank" rel="noopener noreferrer" class="hidden max-[700px]:block">
					<Discord class="h-8"/>
				</NuxtLink>
				
			</div>
		</div>
	</div>
</template>


<script lang="ts" setup>
	import { strings } from '~/constants/strings';
</script>