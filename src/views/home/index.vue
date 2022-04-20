<template>
  <div class="home-page">
    <div class="home-entry">
      <div class="container">
        <!--左侧分类-->
        <HomeCategory></HomeCategory>
        <!--轮播图-->
        <HomeBanner></HomeBanner>
      </div>
    </div>
<!--    新鲜好物-->
    <HomeNew></HomeNew>
<!--    人气推荐-->
    <HomeHot></HomeHot>
  </div>
</template>

<script>
import HomeCategory from '@/views/home/components/HomeCategory'
import HomeBanner from '@/views/home/components/HomeBanner'
import HomeNew from '@/views/home/components/HomeNew'
import HomeHot from '@/views/home/components/HomeHot'

export default {
  name: 'home-page',
  components: {
    HomeCategory,
    HomeBanner,
    HomeNew,
    HomeHot
  }
}
</script>

<style scoped lang="less">

</style>
