<template>
<div class="home-banner">
  <Carousel :sliders="sliders"></Carousel>
</div>
</template>

<script>
import Carousel from '@/components/library/Carousel'
import { findBanner } from '@/api/home'
import { ref } from 'vue'

export default {
  name: 'HomeBanner',
  components: { Carousel },
  setup () {
    const sliders = ref([])
    findBanner().then(data => {
      console.log(data)
      sliders.value = data.result
    })
    return { sliders }
  }
}
</script>

<style lang="less" scoped>
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98
}
.carousel {
::v-deep .carousel-btn.prev {
  left: 270px;
}
::v-deep .carousel-indicator {
  padding-left: 250px;
}
}
</style>
