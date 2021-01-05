<template>
	<div
		class="top">
		<div class="logo-wrapper">
			<h1 class="logo">
				<span class="logo-arrow">
					<TopLogoArrow
						:visible="showArrow"
						:pointed="pointArrow"></TopLogoArrow>
				</span>
				<span>
					<span
						v-for="(char, i) in chars"
						:key="i"
						class="logo-char">
						<span class="sr-only">{{ char.name }}</span>
						<TopLogoCharStroke
							v-for="stroke in char.strokes"
							:key="stroke.id"
							:src="stroke.src"
							:index="stroke.index"
							:vw="vw" :vh="vh"
							:animated="animateChars"
							:visible="showChars"
							:aligned="alignChars"></TopLogoCharStroke>
					</span>
				</span>
			</h1>
		</div>
	</div>
</template>

<script>
import anime from 'animejs/lib/anime.es.js'

import {
	random,
	range,
	sample
} from 'lodash'

import {
	distance,
	intersect
} from 'mathjs'

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
			chars: [
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
						src: require(`@/assets/images/logo-${id}.svg`)
					}
				})
				return char
			}),
			vw: 0,
			vh: 0,
			observer: null,
			interactive: false,
			animateChars: false,
			showArrow: false,
			showChars: false,
			pointArrow: false,
			alignChars: true,
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
			this.pointArrow= isIntersecting
			this.alignChars= isIntersecting
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
		this.alignChars= false
		await delay(0)
		this.animateChars= true
		this.showChars= true
		await delay(500)
		this.showArrow= true
		await delay(1500)
		this.pointArrow= true
		await delay(2000)
		this.alignChars= true
		await delay(300)
		this.interactive= true
	},
	beforeDestroy(){
		window.removeEventListener('resize', this._resize)

		this.observer.disconnect()
	}
}
</script>

<style lang="scss" scoped>
$top-height: 90vh;

$chars-width-portrait: 64px;
$chars-height-portrait: 412px;
$aspect-portrait: $chars-width-portrait / $chars-height-portrait;
$arrow-offset-portrait: 0px;
$char-offset-portrait: (
	152px,
	218.5px,
	285px,
	353px
);

$chars-width-landscape: 399px;
$chars-height-landscape: 64px;
$aspect-landscape: $chars-width-landscape / $chars-height-landscape;
$arrow-offset-landscape: 0px;
$char-offset-landscape: (
	167.5px,
	228.5px,
	287.5px,
	348px
);

.top {
	@apply flex w-full justify-center items-center overflow-hidden;
	height: 90vh;
}

.logo-wrapper {
	width: calc(#{$top-height} * 0.65 * #{$aspect-portrait});
}
.logo {
	@apply relative w-full h-0;
	padding-bottom: percentage(1 / $aspect-portrait);
}
.logo-arrow, .logo-char {
	@apply block absolute left-0 w-full;
	height: percentage($aspect-portrait);
}
.logo-arrow {
	top: percentage($arrow-offset-portrait / $chars-height-portrait);
}
.logo-char {
	@for $i from 1 through 4 {
		&:nth-child(#{$i}) { top: percentage(nth($char-offset-portrait, $i) / $chars-height-portrait); }
	}
}
@screen sm {
	.logo-wrapper {
		@apply w-3/5;
	}
	.logo {
		padding-bottom: percentage(1 / $aspect-landscape);
	}
	.logo-arrow, .logo-char {
		width: percentage(1 / $aspect-landscape);
		height: 100%;
		top: 0 !important;
	}
	.logo-arrow {
		transform: rotate(-90deg);
		left: percentage($arrow-offset-landscape / $chars-width-landscape);
	}
	.logo-char {
		@for $i from 1 through 4 {
			&:nth-child(#{$i}) { left: percentage(nth($char-offset-landscape, $i) / $chars-width-landscape); }
		}
	}
}
</style>
