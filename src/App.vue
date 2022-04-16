<template>
  <div id="nav">
    APP
    <div>{{$store.state.username}}</div>
    <div>{{$store.getters['newName']}}</div>
    <button @click="mutationsFn">mutationsFn</button>
   </div>
 </template>
<script>
import { useStore } from 'vuex'
export default {
  name: 'App',
  setup () {
  // 使用vuex仓库
    const store = useStore()
    console.log(store.state.username)
    // 使用根模块getters的数据
    console.log(store.getters.newName)
    const mutationsFn = () => {
      // 3.提交根模块mutation函数
      store.commit('updateName')
      // 调用根模块actions函数
      store.dispatch('updateName')
    }
    return { mutationsFn }
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
