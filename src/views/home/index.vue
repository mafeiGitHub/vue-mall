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
    <!--    热门品牌-->
    <HomeBrand></HomeBrand>
    <!--商品区域-->
    <HomeProduct></HomeProduct>
    <!--最新专题-->
    <HomeSpecial></HomeSpecial>
  </div>
</template>

<script>
import HomeCategory from '@/views/home/components/HomeCategory'
import HomeBanner from '@/views/home/components/HomeBanner'
import HomeNew from '@/views/home/components/HomeNew'
import HomeHot from '@/views/home/components/HomeHot'
import HomeBrand from '@/views/home/components/HomeBrand'
import HomeProduct from '@/views/home/components/HomeProduct'
import HomeSpecial from '@/views/home/components/HomeSpecial'

export default {
  name: 'home-page',
  components: {
    HomeCategory,
    HomeBanner,
    HomeNew,
    HomeHot,
    HomeBrand,
    HomeProduct,
    HomeSpecial
  }
}
</script>

<style scoped lang="less">

</style>
