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
　ディープラーニング技術を用いて既存の家紋の画像を学習させたAIに、無数の新しい家紋を生成させる試み。<br>
　ほんらい家紋は、円や直線といった単純なかたちを、決められた手順に沿って幾何学的に組み合わせていくことで描かれる。ある手順によって描かれる家紋は、当然ながら常に1通りに定まる。一方でAIは、ある与えられた乱数列を、家紋のように見える画像としてデコード可能な別の数列に変換する、ということを行っている。この変換プロセスによって、これまでの手順とは無関係に、乱数列を与えさえすれば、家紋のような画像を無数に生成することができる。ところで、幾何学的な手順が家紋の数だけ存在するのに対し、AIの変換プロセスは常に一定である。したがって、あるAIに、ある決まった乱数列を与えると、結果として生成される家紋は、常に1通りに定まる。この関係性が、紋章としての本来の意味性に接続していく可能性を探りながら、試作を続けている。
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