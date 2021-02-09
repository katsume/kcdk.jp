<template>
	<span
		class="block"
		:style="{
			transform: [
				`rotate(${rotate}deg)`,
				`scale(${scale})`
			].join(' ')
		}">
		<img
			class="block w-full h-full origin-top"
			:style="{
				transform: `scaleY(${length})`
			}"
			:src="require('@/assets/images/logo-0-1.svg')">
		<img
			class="block absolute bottom-0 w-full h-full"
			:style="{
				transform: `translateY(${(length-1)*100}%)`
			}"
			:src="require('@/assets/images/logo-0-2.svg')">
	</span>
</template>

<script>
import anime from 'animejs'

export default {
	props: {
		visible: Boolean,
		pointed: Boolean
	},
	data(){
		return {
			config: {
				transitions: {
					show: {
						duration: 200,
						easing: 'cubicBezier(.5, 2, 1, 1)'
					},
					hide: {
						duration: 200,
						easing: 'easeInQuad'
					},
					focusFirst: {
						duration: 2000,
						easing: 'cubicBezier(1, .75, .95, 1.2)',
						delay: 0
					},
					focus: {
						duration: 250,
						easing: 'easeInOutExpo',
						delay: 0
					},
					blur: {
						duration: 250,
						easing: 'easeInOutExpo',
						delay: 0
					}
				}
			},
			rotate: 0,
			scale: 0,
			length: 1,
			focused: false
		}
	},
	methods: {
		show(){
			anime({
				targets: this,
				scale: 1,
				duration: this.config.transitions.show.duration,
				easing: this.config.transitions.show.easing
			})
		},
		hide(){
			if(!this.animated){
				this.scale= 0
				return
			}
			anime({
				targets: this,
				scale: 0,
				duration: this.config.transitions.hide.duration,
				easing: this.config.transitions.hide.easing
			})
		},
		focus(){
			const config= !this.focused ? this.config.transitions.focusFirst : this.config.transitions.focus
			anime({
				targets: this,
				length: 2,
				duration: config.duration,
				easing: config.easing,
				delay: config.delay
			})
			this.focused= true
		},
		blur(){
			const config= this.config.transitions.blur
			anime({
				targets: this,
				length: 1,
				duration: config.duration,
				easing: config.easing,
				delay: config.delay
			})
		}
	},
	watch: {
		visible(val){
			val ? this.show() : this.hide()
		},
		pointed(val){
			val ? this.focus() : this.blur()
		}
	}
}
</script>

<style>
</style>