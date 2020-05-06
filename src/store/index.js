import Vue from 'vue'
import Vuex from 'vuex'
import bookList from './modules/book-list'
import shoppingCart from './modules/shopping-cart'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        bookList,
        shoppingCart
    }
});