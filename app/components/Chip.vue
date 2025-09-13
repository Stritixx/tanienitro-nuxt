<template>
	<div class="bg-purple-600/10 border-[1px] border-solid border-purple-600/20 rounded-full text-purple-500 px-8 py-2">{{ label }}</div>
</template>



<script>
	export default {
		props: {
			label: String
		}
	}	
</script>