<template>
	<button class="px-10 py-2 bg-purple-800 rounded-full hover:bg-purple-800/90 transition cursor-pointer text-white">{{ label }}</button>
</template>



<script>
	export default {
		props: {
			label: {
				type: String,
				required: true
			}
		}
	}
</script>