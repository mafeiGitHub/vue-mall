<template>
  <div class="home-category" @mouseleave="categoryId = null">
    <ul class="menu">
      <li :class="{active:categoryId === item.id}" v-for="item in menuList" :key="item.id" @mouseenter="categoryId = item.id">
        <router-link :to="`/category/${item.id}`">{{ item.name }}</router-link>
        <template v-if="item.children">
          <router-link v-for="sub in item.children" :key="sub.id" :to="`/category/sub/${sub.id}`">{{ sub.name }}
          </router-link>
        </template>
        <span v-else>
          <Skeleton width="60px" height="18px" style="margin-right: 5px" bg="rgba(255,255,255,0.2)"></Skeleton>
          <Skeleton width="50px" height="18px" bg="rgba(255,255,255,0.2)"></Skeleton>
        </span>
      </li>
    </ul>
  </div>
  <div class="layer">
    <h4 v-if="currCategory">{{ currCategory.id === 'brand' ? '品牌' : '分类' }}推荐 <small>根据您的购买或浏览记录推荐</small></h4>
<!--    记录-->
    <ul v-if="currCategory && currCategory.goods &&currCategory.goods.length">

      <li v-for="item in currCategory.goods" :key="item.id">
        <router-link to="/">
          <img :src="item.picture" alt="">
          <div class="info">
            <p class="name ellipsis-2">{{ item.name }}</p>
            <p class="desc ellipsis">{{ item.desc }}</p>
            <p class="price"><i>￥</i>{{ item.price }}</p>
          </div>
        </router-link>
      </li>
    </ul>
<!--品牌-->
    <ul v-if="currCategory && currCategory.brands && currCategory.brands.length">
      <li class="brand" v-for="item in currCategory.brands" :key="item.id">
        <RouterLink to="/">
          <img :src="item.picture" alt="">
          <div class="info">
            <p class="place"><i class="iconfont icon-dingwei"></i>{{ item.place }}</p>
            <p class="name ellipsis">{{ item.name }}</p>
            <p class="desc ellipsis-2">{{ item.desc }}</p>
          </div>
        </RouterLink>
      </li>
    </ul>

  </div>

</template>

<script>
import { useStore } from 'vuex'
import { computed, reactive, ref } from 'vue'
import category from '@/store/modules/category'
import { findBrand } from '@/api/home'
import Skeleton from '@/components/library/Skeleton'

export default {
  name: 'HomeCategory',
  components: { Skeleton },
  setup () {
    const store = useStore()
    const menuList = computed(() => {
      const list = store.state.category.list.map(item => {
        return {
          id: item.id,
          name: item.name,
          children: item.children && item.children.slice(0, 2),
          goods: item.goods
        }
      })
      list.push(brand)
      return list
    })
    // 获取当前分类逻辑
    const categoryId = ref(null)
    const currCategory = computed(() => {
      return menuList.value.find(item => item.id === category.value)
    })
    const brand = reactive({
      id: 'brand',
      name: '品牌',
      children: [{
        id: 'brand-children',
        name: '品牌推荐'
      }],
      brands: []
    })
    findBrand().then(data => {
      // console.log(data)
      brand.brands = data.result
      // console.log(brand.brands)
    })
    return {
      menuList,
      categoryId,
      currCategory
    }
  }
}
</script>

<style lang="less" scoped>
.home-category {
  width: 250px;
  height: 500px;
  background: rgba(0, 0, 0, 0.8);
  position: relative;
  z-index: 99;

  .menu {
    li {
      padding-left: 40px;
      height: 50px;
      line-height: 50px;

      &:hover,&.active {
        background: @xtxColor;
      }

      a {
        margin-right: 4px;
        color: #fff;

        &:first-child {
          font-size: 16px;
        }
      }
    }
  }
}

.layer {
  width: 990px;
  height: 500px;
  background: rgba(255, 255, 255, 0.8);
  position: absolute;
  left: 250px;
  top: 0;
  display: none;
  padding: 0 15px;

  h4 {
    font-size: 20px;
    font-weight: normal;
    line-height: 80px;

    small {
      font-size: 16px;
      color: #666;
    }
  }

  ul {
    display: flex;
    flex-wrap: wrap;

    li {
      width: 310px;
      height: 120px;
      margin-right: 15px;
      margin-bottom: 15px;
      border: 1px solid #eee;
      border-radius: 4px;
      background: #fff;

      &:nth-child(3n) {
        margin-right: 0;
      }

      a {
        display: flex;
        width: 100%;
        height: 100%;
        align-items: center;
        padding: 10px;

        &:hover {
          background: #e3f9f4;
        }

        img {
          width: 95px;
          height: 95px;
        }

        .info {
          padding-left: 10px;
          line-height: 24px;
          width: 190px;

          .name {
            font-size: 16px;
            color: #666;
          }

          .desc {
            color: #999;
          }

          .price {
            font-size: 22px;
            color: @priceColor;

            i {
              font-size: 16px;
            }
          }
        }
      }
    }
  }
}

&:hover {
  .layer {
    display: block;
  }
}

li.brand {
  height: 180px;

  a {
    align-items: flex-start;

    img {
      width: 120px;
      height: 160px;
    }

    .info {
      p {
        margin-top: 8px;
      }

      .place {
        color: #999;
      }
    }
  }
}
.skeleton{
  animation: fade 1s linear infinite alternate;
}
@keyframes fade {
  from {
    opacity: 0.2;
  }
  to {
    opacity: 1;
  }
}
</style>
