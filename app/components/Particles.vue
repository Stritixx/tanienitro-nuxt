<template>
	<canvas ref="canvas"></canvas>
</template>



<script>
	export default {
		mounted() {
			this.drawRandomDots();
	},

	methods: {
		drawRandomDots() {
			const canvas = this.$refs.canvas;
			const ctx = canvas.getContext('2d');

			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;

			for (let i = 0; i < 1000; i++) {
				const x = Math.random() * canvas.width;
				const y = Math.random() * canvas.height;
					
				ctx.beginPath();
				ctx.arc(x, y, 2, 0, Math.PI * 2);
				ctx.fillStyle = "white";
				ctx.fill();
			}
		}
	}};
</script>