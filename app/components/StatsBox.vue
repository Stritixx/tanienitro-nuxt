<template>
	<div class="w-1/3 h-[200px] flex flex-col items-center justify-center gap-2 max-[900px]:w-full max-[900px]:border-b-2 max-[900px]:border-gray-500/10">
		<p class="font-extrabold text-gray-200 text-4xl">{{ value }}</p>
		<p class="text-gray-400 font-semibold">{{ label }}</p>
	</div>
</template>




<script>
	export default {
		props: {
			label: String,
			value: String,
		}
	}
</script>