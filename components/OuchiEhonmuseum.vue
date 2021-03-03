<template>
	<div>
		<div class="
			bg-gray-100 w-full
			px-0 py-16 md:p-16 lg:p-20
		">
			<div class="bg-contain bg-right-bottom bg-no-repeat" :style="{
				'background-color': '#fff100',
				'background-image': `url(${require('@/assets/images/ouchi-ehonmuseum/bg.svg')})`,
			}">
				<div class="
					flex justify-center
					w-full h-full
					p-8 sm:py-16 md:p-12 lg:p-20 xl:p-24
				">
					<div>
						<img
							class="
								w-48 md:w-52 lg:w-56 xl:w-64
							"
							src="@/assets/images/ouchi-ehonmuseum/logo.svg"
							alt="おうちで！絵本ミュージアム2020">
						<div class="
							mt-8 md:mt-12
							grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 lg:gap-24 xl:gap-32
						">
							<div class="
								border-gray-500
								border-2 md:border-4
								rounded-lg md:rounded-xl
								shadow-lg
								overflow-hidden
							">
								<img
									class="w-full max-w-48"
									src="@/assets/images/ouchi-ehonmuseum/bakery/about2.png"
									alt="自分だけのおもしろパンをつくろう！">
							</div>
							<div class="
								border-gray-500
								border-2 md:border-4
								rounded-lg md:rounded-xl
								shadow-lg
								overflow-hidden
							">
								<img
									class="w-full max-w-48"
									src="@/assets/images/ouchi-ehonmuseum/zoo/about1.png"
									alt="かざして発見！どっとこ どうぶつえん">
							</div>
							<div class="
								border-gray-500
								border-2 md:border-4
								rounded-lg md:rounded-xl
								shadow-lg
								overflow-hidden
							">
								<img
									class="w-full max-w-48"
									src="@/assets/images/ouchi-ehonmuseum/onepiece/about3.png"
									alt="わたしだけのワンピースをつくろう！">
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="
			px-4 md:px-16 lg:px-20 xl:px-24
			py-16
		">
			<h2>おうちで！絵本ミュージアム2020</h2>
			<div class="md:grid grid-cols-2 gap-8 mt-8">
				<div>
					<dl class="text-xs">
						<dt class="font-bold">主催</dt>
						<dd class="mt-2 leading-loose">福岡アジア美術館 / 西日本新聞社 / TNCテレビ西日本 / NPO法人子ども文化コミュニティ</dd>
						<dt class="mt-8 font-bold">制作チーム</dt>
						<dd class="mt-2 leading-loose">
							<a class="underline" href="https://plaplax.com/" target="_blank">plaplax</a> / 
							<a class="underline" href="https://magiclogic.jp/" target="_blank">齋藤雄介</a> / 
							<span class="text-black text-opacity-50">勝目祐一郎（かちどき）</span> / 
							<a class="underline" href="http://www.torafu.com/" target="_blank">トラフ建築設計事務所</a> / 
							<a class="underline" href="http://nakamuranorio.com/" target="_blank">中村至男</a> / 
							<a class="underline" href="https://danboard-man.com/" target="_blank">みんなのダンボールマン（d_l_b）</a> / 
							<a class="underline" href="https://www.instagram.com/heinrichshatao/" target="_blank">森紗和子</a> / 
							<a class="underline" href="https://kodomo-abc.org/" target="_blank">NPO法人子ども文化コミュニティ</a></dd>
					</dl>
				</div>
				<div class="mt-8 md:mt-0">
					<p class="text-sm leading-loose">
　福岡アジア美術館で2007年から毎年開催されている展覧会「おいでよ！絵本ミュージアム」。2020年は「おうちで！絵本ミュージアム」としてオンライン上での開催となった。インタラクティブな体験を通して絵本の世界に親しみながら、おうち時間を家族や親子で楽しく過ごしてもらうための、3つの体験型コンテンツの企画・デザイン・実装を担当した。『自分だけのおもしろパンをつくろう！』では、描いた線がオリジナルのパンになり、自分のパンやさんに並べることができる。パン画像の生成にはディープラーニング技術を用いている。『かざして発見！どっとこ どうぶつえん』では、作成したオリジナルのどっとこどうぶつがARでおうちの中に現れる。ここでは、どっと絵からiOSのAR Quick Lookに対応したARデータを動的に生成している。また、『わたしだけのワンピースをつくろう！』では、描いた絵からオリジナルのワンピースの柄をつくることができる。
					</p>
					<p class="mt-8">
						<a class="underline" href="https://kodomo-abc.org/ouchi-ehonmuseum/" target="_blank">https://kodomo-abc.org/ouchi-ehonmuseum/</a>
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