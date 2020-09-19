<template>
  <div class="">
    <div class="d-block d-md-flex">
      <div class="min-vw-100 vh-100 d-flex justify-content-center align-items-center">
        <img
          src="@/assets/logo_portrait.svg"
          class="d-sm-block d-md-none img-fluid"
          :style="{
            width: '12.5%'
          }"
          alt="かちどき">
        <img
          src="@/assets/logo_landscape.svg"
          class="d-none d-md-flex img-fluid w-50"
          alt="かちどき">
      </div>
      <div class="min-vw-100 vh-100 d-flex justify-content-center align-items-center">
        <div class="w-75 h-75 position-relative">
          <div
            class="position-absolute"
            :style="{
              right: 0,
              top: 0,
              writingMode: 'vertical-rl'
            }">
            <p class="m-0 ml-2 h5">
              テクニカルディレクター
            </p>
            <h1 class="m-0 h1">
              勝目 祐一郎
            </h1>
          </div>
          <div
            class="position-absolute"
            :style="{
              left: 0,
              bottom: 0
            }">
            <p class="m-0 mb-1 font-italic h4">
              Technical Director
            </p>
            <h1 class="m-0 h2 font-weight-bold">
              Yuichiro Katsume
            </h1>
          </div>
          <div class="d-inline-block">
            <p class="m-0 mb-2">
              <a href="mailto:k@kcdk.jp" class="text-body">k@kcdk.jp</a>
            </p>
            <div class="mx-auto w-50">
              <div style="transform:rotate(-90deg);">
                <img
                  src="/favicon.svg"
                  class="img-fluid"
                  alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
</style>
