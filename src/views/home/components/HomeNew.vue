<template>
  <div class="home-new">
    <HomePanel title="新鲜好物" sub-title="新鲜出炉 品质靠谱">
      <template v-slot:right>
        <More path="/"></More>
      </template>
      <div ref="target" style="position: relative;height: 406px;">
        <Transition name="fade">
          <ul v-if="goods.length"  class="goods-list">
            <!--面板内容-->
            <li v-for="item in goods" :key="item.id">
              <router-link :to="`/product/${item.id}`">
                <img :src="item.picture" alt="">
                <p class="name ellipsis">{{ item.name }}</p>
                <p class="price">{{ item.price }}</p>
              </router-link>
            </li>
          </ul>
          <HomeSkeleton bg="#f0f9f4" v-else/>
        </Transition>
      </div>
    </HomePanel>
  </div>

</template>

<script>
import HomePanel from '@/views/home/components/HomePanel'
import { findNew } from '@/api/home'
import More from '@/components/library/More'
import { useLazyData } from '@/hooks'
import HomeSkeleton from '@/views/home/components/HomeSkeleton'

export default {
  name: 'HomeNew',
  components: {
    HomePanel,
    More,
    HomeSkeleton
  },
  setup () {
    const { target, result } = useLazyData(findNew)

    return {
      goods: result, target
    }
  }
}
</script>

<style lang="less" scoped>
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 406px;

  li {
    width: 306px;
    height: 406px;
    background: #f0f9f4;
    .hoverShadow();

    img {
      width: 306px;
      height: 306px;
    }

    p {
      font-size: 22px;
      padding: 12px 30px 0 30px;
      text-align: center;
    }

    .price {
      color: @priceColor;
    }
  }
}
</style>
