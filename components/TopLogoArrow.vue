<template>
	<span :class="className">
		<span class="block absolute left-0 top-0 slide-leave-to" v-show="!aligned && !leaving">
			<TopLogoElement :src="require('@/assets/images/logo-0.svg')"></TopLogoElement>
		</span>
		<transition
			@enter="_enter"
			@after-enter="_afterEnter"
			name="slide">
			<span
				class="block absolute left-0 top-0 transform origin-bottom scale-y-200"
				v-show="aligned">
				<TopLogoElement :src="require('@/assets/images/logo-0-1.svg')"></TopLogoElement>
			</span>
		</transition>
		<transition
			@before-leave="_beforeLeave"
			@after-leave="_afterLeave"
			name="slide">
			<span
				class="block absolute left-0 top-0"
				v-show="aligned">
				<TopLogoElement :src="require('@/assets/images/logo-0-2.svg')"></TopLogoElement>
			</span>
		</transition>
	</span>
</template>

<script>
export default {
	props: {
		aligned: Boolean
	},
	data(){
		return {
			isFirst: true,
			leaving: false
		}
	},
	computed: {
		className(){
			return [
				'top-logo-arrow',
				this.isFirst?'first':''
			].join(' ')
		}
	},
	methods: {
		_enter(){
		},
		_afterEnter(){
			this.$emit('unlock')
		},
		_beforeLeave(){
			this.leaving= true
			this.isFirst= false
		},
		_afterLeave(){
			this.leaving= false
		}
	},
	mounted(){
	},
	beforeDestroy(){
	}
}
</script>

<style lang="scss" scoped>
.top-logo-arrow {
	--delay-first: 2s;
	--duration: .25s;
	--duration-first: 1.5s;
}

.slide-enter-active, .slide-leave-active {
	transition-property: transform;
	transition-duration: var(--duration);
	transition-timing-function: cubic-bezier(0.87, 0, 0.13, 1);

	.first & {
		transition-duration: var(--duration-first);
		transition-delay: var(--delay-first);
		transition-timing-function: cubic-bezier(1, .9, .95, 1.25);
	}
}

.slide-enter, .slide-leave-to {
	transform: translateY(-100%);
}
</style>