<template>
	<div :style="{
		'--transition-duration': `${duration*0.001}s`,
		'--transition-delay': `${delay*0.001}s`
	}">
		<div v-if="images.length">
			<div
				class=""
				v-for="(image, i) in images"
				:key="i">
				<transition name="fade">
					<div v-show="index===i">
						<img
							class="w-full h-auto"
							:src="image"
							alt="">
					</div>
				</transition>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		images: Array,
		interval: {
			type: Number,
			default(){
				return 4000
			}
		},
		delay: {
			type: Number,
			default(){
				return 0
			}
		},
		duration: {
			type: Number,
			default(){
				return 1000
			}
		}
	},
	data(){
		return {
			index: 0,
			timerId: null
		}
	},
	mounted(){
		this.timerId= setInterval(()=>{
			this.index= (this.index+1)%this.images.length
		}, this.interval)
	},
	beforeDestroy(){
		clearInterval(this.timerId)
		this.timerId= null
	}
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
	transition-property: opacity;
	transition-duration: var(--transition-duration);
	transition-delay: var(--transition-delay);
}
.fade-enter-active {
	position: absolute;
	left: 0; top: 0; width: 100%; height: auto;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>