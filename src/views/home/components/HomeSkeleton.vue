<template>
<div class="home-skeleton">
  <div class="item" v-for="i in 4" :key="i" :style="{backgroundColor:bg}">
    <Skeleton bg="#e4e4e4" width="306px" height="306px" animated />
    <Skeleton bg="#e4e4e4" width="160px" height="24px" animated />
    <Skeleton bg="#e4e4e4" width="120px" height="24px" animated />
  </div>
</div>
</template>

<script>
import Skeleton from '@/components/library/Skeleton'

export default {
  name: 'HomeSkeleton',
  components: { Skeleton },
  props: {
    bg: {
      type: String,
      default: '#fff'
    }
  }
}
</script>

<style lang="less" scoped>
.home-skeleton {
  width: 1240px;
  height: 406px;
  display: flex;
  justify-content: space-between;
  .item {
    width: 306px;
    .Skeleton ~ .Skeleton{
      display: block;
      margin: 16px auto 0;
    }
  }
}
</style>
