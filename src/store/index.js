import { createStore } from 'vuex'
import createPersistedstate from 'vuex-persistedstate'
import cart from '@/store/modules/cart'
import category from '@/store/modules/category'
import user from '@/store/modules/user'

// 创建vuex仓库并导出
export default createStore({
  modules: {
    cart,
    category,
    user
  },
  plugins: [
    createPersistedstate({
      key: 'vue-mall',
      path: ['user', 'cart']
    })
  ]
})
