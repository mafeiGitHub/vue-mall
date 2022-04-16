import { createStore } from 'vuex'
// 创建vuex仓库并导出
export default createStore({
  state: {
    // 数据
    username: 'zs'
  },
  mutations: {
    // 改数据函数
    updateName (state) {
      state.username = 'ls'
    }
  },
  actions: {
    // 请求数据函数
    updateName (ctx) {
      setTimeout(() => {
        ctx.commit('updateName')
      }, 1000)
    }
  },
  modules: {
    // 分模块
  },
  getters: {
    // vuex的计算属性
    newName (state) {
      return state.username
    }
  }
})
