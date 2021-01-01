<template>
	<div class="top">
		<!-- <button @click="aligned=!aligned" class="absolute" style="z-index:10000;">{{ aligned?'ON':'OFF' }}</button> -->
		<div class="logo-wrapper">
			<h1 class="logo">
				<span class="logo-letter">
					<TopLogoArrow
						@unlock="_unlock"
						:aligned="aligned"></TopLogoArrow>
				</span>
				<span
					v-for="(letter, i) in letters"
					:key="i"
					class="logo-letter">
					<TopLogoMotionElement
						v-for="(element, j) in letter"
						:key="element.id"
						:order="element.order"
						:src="element.src"
						:viewport="viewport"
						:animated="!locked"
						:aligned="!locked && aligned"
					></TopLogoMotionElement>
				</span>
			</h1>
		</div>
	</div>
</template>

<script>
import {range} from 'lodash'

const threshold= .75

export default {
	data(){
		let cnt= 0
		return {
			letters: [
				range(3), range(2), range(4), range(3)
			].map((l, i)=>{
				return l.map((_, j)=>{
					const id= `${i+1}-${j+1}`
					return {
						id,
						order: cnt++,
						src: require(`@/assets/images/logo-${id}.svg`)
					}
				})
			}),
			observer: null,
			viewport: {
				width: 0,
				height: 0
			},
			aligned: false,
			locked: true
		}
	},
	methods: {
		_unlock(){
			this.locked= false
		},
		_resize(){
			const rect= this.$el.getBoundingClientRect()
			this.viewport= {
				width: rect.width,
				height: rect.height
			}
		},
		_intersect(entries){
			this.showArrow= entries[0].isIntersecting
			this.aligned= entries[0].isIntersecting
		}
	},
	mounted(){
		window.addEventListener('resize', this._resize)
		this._resize()

		this.observer= new IntersectionObserver(this._intersect, {
			threshold
		})
		this.observer.observe(this.$el)
	},
	beforeDestroy(){
		window.removeEventListener('resize', this._resize)

		this.observer.disconnect()
	}
}
</script>

<style lang="scss" scoped>
$root-height: 90vh;

$wrapper-height: $root-height*0.65;

$letters-width-portrait: 64px;
$letters-height-portrait: 348px;
$aspect-portrait: $letters-width-portrait / $letters-height-portrait;
$letter-offset-portrait: (
	0,
	88px,
	154.5px,
	221px,
	289px
);

$letters-width-landscape: 335px;
$letters-height-landscape: 64px;
$aspect-landscape: $letters-width-landscape / $letters-height-landscape;
$letter-offset-landscape: (
	0,
	103.5px,
	164.5px,
	223.5px,
	284px
);

.top {
	@apply flex w-full justify-center items-center overflow-hidden;
	height: $root-height;
}

.logo-wrapper {
	width: calc(#{$wrapper-height} * #{$aspect-portrait});
}
.logo {
	@apply relative w-full h-0;
	padding-bottom: percentage(1 / $aspect-portrait);
}
.logo-letter {
	@apply block absolute left-0 w-full;
	height: percentage($aspect-portrait);
	@for $i from 2 through 5 {
		&:nth-child(#{$i}) { top: percentage(nth($letter-offset-portrait, $i) / $letters-height-portrait); }
	}
}
@screen sm {
	.logo-wrapper {
		@apply w-3/5;
	}
	.logo {
		padding-bottom: percentage(1 / $aspect-landscape);
	}
	.logo-letter {
		width: percentage(1 / $aspect-landscape);
		height: 100%;
		top: 0 !important;
		&:nth-child(1) { transform: rotate(-90deg); }
		@for $i from 2 through 5 {
			&:nth-child(#{$i}) { left: percentage(nth($letter-offset-landscape, $i) / $letters-width-landscape); }
		}
	}
}
</style>
