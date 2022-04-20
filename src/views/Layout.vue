<template>
    <AppTopNav></AppTopNav>
  <AppHeader></AppHeader>
  <main>
    <!--    二级路由-->
    <router-view></router-view>
  </main>
  <AppFooter></AppFooter>
</template>

<script>
import AppTopNav from '@/components/AppTopNav'
import AppHeader from '@/components/AppHeader'
import AppFooter from '@/components/AppFooter'
import { useStore } from 'vuex'
export default {
  name: 'Layout',
  // eslint-disable-next-line vue/no-unused-components
  components: { AppTopNav, AppHeader, AppFooter },
  setup () {
    const store = useStore()
    store.dispatch('category/getList')
  }
}
</script>

<style scoped lang="less">

</style>
