<template>
	<span :class="isFirst?'first':''">
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
.slide-enter-active, .slide-leave-active {
	@apply transition-transform ease-in-out-expo duration-250;

	.first & {
		@apply ease-out-back duration-1500 delay-1000;
	}
}

.slide-enter, .slide-leave-to {
	@apply transform -translate-y-full;
}
</style>