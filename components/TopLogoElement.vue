<template>
	<img
		class="w-full h-auto transition-transform ease-in-out-expo"
		:style="transform"
		:src="src">
</template>

<script>
export default {
	props: {
		src: String,
		tx: {
			type: Number,
			default: ()=>0
		},
		ty: {
			type: Number,
			default: ()=>0
		},
		rotate: {
			type: Number,
			default: ()=>0
		},
		skewX: {
			type: Number,
			default: ()=>0
		},
		skewY: {
			type: Number,
			default: ()=>0
		},
		scaleX: {
			type: Number,
			default: ()=>1
		},
		scaleY: {
			type: Number,
			default: ()=>1
		},
		duration: {
			type: Number,
			default: ()=>0
		},
		delay: {
			type: Number,
			default: ()=>0
		}
	},
	computed: {
		transform(){
			const transform= [
				`translate(${this.tx}px, ${this.ty}px)`,
				`scale(${this.scaleX}, ${this.scaleY})`,
				`rotate(${this.rotate}deg)`,
				`skew(${this.skewX}deg, ${this.skewY}deg)`
			].join(' ')
			return {
				transform,
				transitionDuration: `${this.duration}s`,
				transitionDelay: `${this.delay}s`
			}
		}
	}
}
</script>

<style>
</style>