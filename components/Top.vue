<template>
	<div
		class="
			flex justify-center items-center
			w-full
			p-10 sm:px-16 sm:py-0 md:px-20
			overflow-hidden
		"
		:style="{
			height: '85vh'
		}">
		<div class="
			flex flex-col sm:flex-row justify-between
			relative
			h-full sm:w-full sm:h-auto
		">
			<div class="flex-grow">
				<TopLogoArrow
					:visible="arrow.visible"
					:pointed="arrow.pointed"></TopLogoArrow>
			</div>
			<h1 class="flex flex-col sm:flex-row items-center">
				<span class="logo-char block"></span>
				<span
					v-for="(char, i) in chars.data"
					:key="i"
					class="logo-char block relative transform">
					<span class="sr-only">{{ char.name }}</span>
					<TopLogoCharStroke
						v-for="stroke in char.strokes"
						:key="stroke.id"
						:src="stroke.src"
						:index="stroke.index"
						:vw="vw" :vh="vh"
						:animated="chars.animated"
						:visible="chars.visible"
						:aligned="chars.aligned"></TopLogoCharStroke>
				</span>
			</h1>
		</div>
	</div>
</template>

<script>
import {
	range
} from 'lodash'

const threshold= .9

const delay= ms=>{
	return new Promise((resolve)=>{
		setTimeout(()=>{
			resolve()
		}, ms)
	})
}

export default {
	data(){
		let cnt= 0
		return {
			chars: {
				data: [
					{
						name: 'か',
						numStrokes: 3,
					},
					{
						name: 'ち',
						numStrokes: 2
					},
					{
						name: 'ど',
						numStrokes: 4
					},
					{
						name: 'き',
						numStrokes: 3
					}
				].map((char, i)=>{
					char.strokes= range(char.numStrokes).map((stroke, j)=>{
						const id= `${i+1}-${j+1}`
						return {
							id,
							index: cnt++,
							src: require(`@/assets/images/top/logo-${id}.svg`)
						}
					})
					return char
				}),
				aligned: true,
				animated: false,
				visible: false
			},
			arrow: {
				visible: false,
				pointed: false
			},
			vw: 0,
			vh: 0,
			observer: null,
			interactive: false,
		}
	},
	methods: {
		_resize(){
			const rect= this.$el.getBoundingClientRect()
			this.vw= Math.round(rect.width)
			this.vh= Math.round(rect.height)
		},
		_intersect(entries){
			const isIntersecting= entries[0].isIntersecting
			if(!this.interactive){
				return
			}
			this.arrow.pointed= isIntersecting
			this.chars.aligned= isIntersecting
		}
	},
	async mounted(){
		window.addEventListener('resize', this._resize)
		this._resize()

		this.observer= new IntersectionObserver(this._intersect, {
			threshold
		})
		this.observer.observe(this.$el)

		await delay(0)
		this.chars.aligned= false
		await delay(0)
		this.chars.animated= true
		this.chars.visible= true
		await delay(500)
		this.arrow.visible= true
		await delay(1000)
		this.arrow.pointed= true
		await delay(2000)
		this.chars.aligned= true
		await delay(300)
		this.interactive= true
	},
	beforeDestroy(){
		window.removeEventListener('resize', this._resize)

		this.observer.disconnect()
	}
}
</script>

<style>
</style>
