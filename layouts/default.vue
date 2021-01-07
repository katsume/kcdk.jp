<template>
  <Nuxt />
</template>

<script>
export default {
  mounted: function(){
    Typekit.load({async: true})
  }
}
</script>