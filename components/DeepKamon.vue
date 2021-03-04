<template>
	<div>
		
		<div class="
			flex justify-center items-center
			bg-gray-100 w-full
			px-2 py-16 md:p-16 lg:p-20
		">
			<div class="w-full max-w-screen-sm">
				<div class="relative w-full h-0 pb-full">
					<iframe
						class="absolute inset-0 w-full h-full"
						src="https://player.vimeo.com/video/519503793?autoplay=1&byline=0&loop=1&muted=1&portrait=0&title=0"
						frameborder="0"
						allow="autoplay; fullscreen; picture-in-picture"
						allowfullscreen>
					</iframe>
				</div>
			</div>
		</div>
		<div class="
			px-4 md:px-16 lg:px-20 xl:px-24
			py-16
		">
			<h2>Deep Kamon</h2>
			<div class="md:grid grid-cols-2 gap-8 mt-8">
				<div>
					<ul class="text-sm">
						<li>Experimental project</li>
					</ul>
				</div>
				<div class="mt-8 md:mt-0">
					<p class="text-sm leading-loose">
　ディープラーニング技術を用いて家紋の画像を学習させたAIに、無数の新しい家紋を生成させる試み。<br>
　ほんらい家紋は、円や直線といったかたちを、決められたアルゴリズムによって組み合わせることで描かれる。あるアルゴリズムによって描かれる家紋は、常に1通りに定まる。一方で、家紋の画像を学習したAIは、ある与えられた乱数列を、家紋のように見える画像としてデコード可能な別の数列に変換する、ということを行っている。両者は一見相容れないように思えるが、アルゴリズムが家紋の数だけ存在するのに対し、ある訓練されたAIの変換プロセスは、常に一定となる。したがって、あるAIに、ある決まった乱数列を与えると、結果として生成される家紋も、常に1通りに定まる。この関係性が、紋章としての本来の意味や機能に接続していく可能性を探りながら、試作を続けている。
					</p>
					<p class="mt-8">
						<a class="underline" href="https://www.instagram.com/deep_kamon/" target="_blank">https://www.instagram.com/deep_kamon/</a>
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
}
</script>

<style>
</style>