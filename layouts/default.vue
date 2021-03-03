<template>
  <Nuxt />
</template>

<script>
export default {
  methods: {
    switchViewport: ()=>{
      const viewport= document.querySelector('meta[name="viewport"]')
      const value= window.outerWidth>360 ? 'width=device-width,initial-scale=1' : 'width=360'
      if (viewport.getAttribute('content')!==value) {
        viewport.setAttribute('content', value)
      }
    }
  },
  mounted: function(){
    Typekit.load({async: true})

    window.addEventListener('resize', this.switchViewport, false)
    this.switchViewport()
  }
}
</script>