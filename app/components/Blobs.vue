<template>
  <div>
    <div
      v-for="(blob, index) in blobs" :key="index" class="absolute bg-purple-700 rounded-full blur-[400px] -translate-x-1/2" :class="blob.classes"></div>
  </div>
</template>


<script setup>
	const blobs = [
		{
			classes: [
				"w-2/5",
				"h-2/5",
				"left-1/2",
				"-top-2/5",
				"animation-moveBlob"
			]
		},
		{
			classes: [
				"w-1/5",
				"h-1/5",
				"left-0",
				"-bottom-2/5"
			]
		},
		{
			classes: [
				"w-1/5",
				"h-1/5",
				"right-0",
				"-bottom-2/5"
			]
		}
	];
</script>
