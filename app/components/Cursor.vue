<template>
	<div class="fixed w-full h-screen z-50 top-0 left-0 pointer-events-none max-md:hidden">
		<div
			class="w-[50px] h-[50px] bg-purple-600 blur-[70px] absolute select-none pointer-events-none" :style="`left: ${x - 25}px; top: ${y - 25}px; opacity: ${opacity}`"></div>
	</div>
</template>



<script lang="ts" setup>
	const x = ref(0)
	const y = ref(0)
	const opacity = ref(0)
	const width = ref(0)
	const height = ref(0)

	onMounted(() => {
		width.value = window.innerWidth
		height.value = window.innerHeight
		x.value = width.value / 2
		y.value = height.value / 2

		const handleMouseMove = (e: MouseEvent) => {
			x.value = e.clientX
			y.value = e.clientY
			if (opacity.value === 0) opacity.value = 1
		}

		document.addEventListener('mousemove', handleMouseMove)

		onUnmounted(() => {
			document.removeEventListener('mousemove', handleMouseMove)
		})
	})
</script>
