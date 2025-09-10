<template>
	<div class="w-[50px] h-[50px] bg-purple-600 blur-[70px] absolute select-none pointer-events-none" :style="`left: ${x - 55}px; top: ${y - 50}px; opacity: ${opacity}`"></div>
</template>




<script lang="ts" setup>
	const x = ref(0);
	const y = ref(0);

	const opacity = ref(0);

	const width = ref(window.innerWidth);
	const height = ref(window.innerHeight);


	document.addEventListener('mousemove', (e) => {
		x.value = e.clientX;
		y.value = e.clientY;

		opacity.value === 0 ? opacity.value = 1 : null;
	})


	onMounted(() => {
		x.value = width.value / 2;
		y.value = height.value / 2;
	})
</script>