<template>
	<span
		class="block absolute top-0 left-0 w-full"
		:style="{
			transform: [
				`translate(${tx}px, ${ty}px)`
			].join(' '),
		}">
		<img
			class="w-full"
			:style="{
				transform: [
					`scale(${scale})`,
					`rotate(${rotate}deg)`,
					`skew(${skewX}deg, ${skewY}deg)`
				].join(' '),
			}"
			alt="" :src="src">
	</span>
</template>

<script>
import anime from 'animejs'

import {
	random,
	range,
	sample
} from 'lodash'

import {
	distance,
	intersect
} from 'mathjs'

const config= {
	translateDeg: {
		min: 10,
		max: 80
	},
	distanceRatio: {
		min: .2,
		max: .4
	},
	rotate: {
		min: -180,
		max: 180
	},
	skew: {
		min: 0,
		max: 0
	},
	transitions: {
		show: {
			duration: 200,
			easing: 'cubicBezier(.5, 2, 1, 1)',
			delay: 16
		},
		hide: {
			duration: 200,
			easing: 'easeInQuad',
			delay: 0
		},
		arrange: {
			duration: 300,
			easing: 'easeInOutBack',
			delay: 16
		},
		disarrange: {
			duration: 500,
			easing: 'easeOutExpo',
			delay: 16
		}
	}
}

const inRange= (t, v1, v2)=>{
	return Math.min(v1, v2)<=t && t<=Math.max(v1, v2)
}

export default {
	props: {
		src: String,
		index: Number,
		vw: Number,
		vh: Number,
		animated: Boolean,
		visible: Boolean,
		aligned: Boolean
	},
	data(){
		return {
			tx: 0,
			ty: 0,
			rotate: 0,
			skewX: 0,
			skewY: 0,
			scale: 0
		}
	},
	methods: {
		show(){
			if(!this.animated){
				this.scale= 1
				return
			}
			anime({
				targets: this,
				scale: 1,
				duration: config.transitions.show.duration,
				easing: config.transitions.show.easing,
				delay: this.index*config.transitions.show.delay
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
				duration: config.transitions.hide.duration,
				easing: config.transitions.hide.easing,
				delay: this.index*config.transitions.hide.delay
			})
		},
		getArrangedTransform(){
			return {
				tx: 0,
				ty: 0,
				rotate: 0,
				skewX: 0,
				skewY: 0
			}
		},
		arrange(){
			const transform= this.getArrangedTransform()
			if(!this.animated){
				Object.assign(this, transform)
				return
			}
			anime(Object.assign({
				targets: this,
				duration: config.transitions.arrange.duration,
				easing: config.transitions.arrange.easing,
				delay: this.index*config.transitions.arrange.delay
			}, transform))
		},
		getDisarrangedTransform(){
			const rect= this.$el.getBoundingClientRect()
			const w= rect.width
			const h= rect.height

			const deg= random(config.translateDeg.min, config.translateDeg.max, true)+sample(range(4))*90
			const rad= deg/180*Math.PI
			const cos= Math.cos(rad)
			const sin= Math.sin(rad)
			const maxDist= distance([0, 0], [this.vw, this.vh])
			const p1= [rect.left + w/2, rect.top + h/2]
			const p2= [p1[0]+cos*maxDist, p1[1]-sin*maxDist]
			const p= [
					[[0, 0],[this.vw, 0]],
					[[this.vw, 0], [this.vw, this.vh]],
					[[this.vw, this.vh], [0, this.vh]],
					[[0, this.vh], [0, 0]]
				].map(edge=>{
					const [e1, e2]= edge
					const [ix, iy]= intersect(p1, p2, e1, e2).map(v=>Math.round(v))
					if(	inRange(ix, p1[0], p2[0]) &&
							inRange(iy, p1[1], p2[1]) &&
							inRange(ix, e1[0], e2[0]) &&
							inRange(iy, e1[1], e2[1])){
							return [ix, iy]
					}
					return null
				}).find(intersection=>{
					return !!intersection
				})
			const dist= distance(p1, p)*random(config.distanceRatio.min, config.distanceRatio.max, true)

			return {
				tx: cos*dist,
				ty: -sin*dist,
				rotate: random(config.rotate.min, config.rotate.max, true),
				skewX: random(config.skew.min, config.skew.max, true),
				skewY: random(config.skew.min, config.skew.max, true)
			}
		},
		disarrange(){
			const transform= this.getDisarrangedTransform()
			if(!this.animated){
				Object.assign(this, transform)
				return
			}
			anime(Object.assign({
				targets: this,
				duration: config.transitions.disarrange.duration,
				easing: config.transitions.disarrange.easing,
				delay: this.index*config.transitions.disarrange.delay
			}, transform))
		}
	},
	watch: {
		visible(val){
			val ? this.show() : this.hide()
		},
		aligned(val){
			val ? this.arrange() : this.disarrange()
		}
	}
}
</script>

<style>
</style>