<template>
	<span class="block absolute left-0 top-0">
		<TopLogoElement
			:src="src"
			:tx="aligned?0:tx"
			:ty="aligned?0:ty"
			:rotate="aligned?0:rotate"
			:skewX="aligned?0:skewX"
			:skewY="aligned?0:skewY"
			:scaleX="aligned?1:scaleX"
			:scaleY="aligned?1:scaleY"
			:duration="duration"
			:delay="delay"
		></TopLogoElement>
	</span>
</template>

<script>
import {
	random,
	range,
	sample
} from 'lodash'

import {
	distance,
	intersect
} from 'mathjs'

const minTranslateDeg= 10
const maxTranslateDeg= 80
const minDistRatio= .2
const maxDistRatio= .4
const minRotateDeg= -180
const maxRotateDeg= 180
const minSkewDeg= 0
const maxSkewDeg= 0
const minScale= 1
const maxScale= 1
const duration= .2
const durationAligned= .4
const delay= .02
const delayDiff= .02
const delayAligned= .02
const delayAlignedDiff= .04

export default {
	props: {
		order: Number,
		src: String,
		viewport: Object,
		animated: Boolean,
		aligned: Boolean
	},
	data(){
		return {
			tx: 0,
			ty: 0,
			rotate: 0,
			skewX: 0,
			skewY: 0,
			scaleX: 0,
			scaleY: 0
		}
	},
	computed: {
		duration(){
			if(!this.animated){
				return 0
			}
			if(this.aligned){
				return durationAligned
			}
			return duration
		},
		delay(){
			if(!this.animated){
				return 0
			}
			if(this.aligned){
				return delayAligned + this.order*delayAlignedDiff
			}
			return delay + this.order*delayDiff
		}
	},
	methods: {
		inRange(t, v1, v2){
			return Math.min(v1, v2)<=t && t<=Math.max(v1, v2)
		},
		calcTransform(){
			const rect= this.$el.getBoundingClientRect()
			const w= rect.width
			const h= rect.height
			const vw= Math.round(this.viewport.width)
			const vh= Math.round(this.viewport.height)
			const deg= random(minTranslateDeg, maxTranslateDeg, true)+sample(range(4))*90
			const rad= deg/180*Math.PI
			const cos= Math.cos(rad)
			const sin= Math.sin(rad)
			const maxDist= distance([0, 0], [vw, vh])
			const p1= [rect.left + w/2, rect.top + h/2]
			const p2= [p1[0]+cos*maxDist, p1[1]-sin*maxDist]
			const p= [
					[[0, 0],[vw, 0]],
					[[vw, 0], [vw, vh]],
					[[vw, vh], [0, vh]],
					[[0, vh], [0, 0]]
				].map(edge=>{
					const [e1, e2]= edge
					const [ix, iy]= intersect(p1, p2, e1, e2).map(v=>Math.round(v))
					if(	this.inRange(ix, p1[0], p2[0]) &&
							this.inRange(iy, p1[1], p2[1]) &&
							this.inRange(ix, e1[0], e2[0]) &&
							this.inRange(iy, e1[1], e2[1])){
							return [ix, iy]
					}
					return null
				}).find(intersection=>{
					return !!intersection
				})
			const dist= distance(p1, p)*random(minDistRatio, maxDistRatio, true)
			this.tx= cos*dist
			this.ty= -sin*dist
			this.rotate= random(minRotateDeg, maxRotateDeg, true)
			this.skewX= random(minSkewDeg, maxSkewDeg, true)
			this.skewY= random(minSkewDeg, maxSkewDeg, true)
			this.scaleX= random(minScale, maxScale, true)
			this.scaleY= 1/this.scaleX
		}
	},
	watch: {
		viewport(){
			this.calcTransform()
		},
		aligned(v){
			if(!v){
				this.calcTransform()
			}
		}
	}
}
</script>

<style>
</style>