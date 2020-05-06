import VueRouter from  'vue-router';
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";

export default new VueRouter({
    //создание путей ссылок
    routes: [
        {
            path: '',
            component: HomePage
        },
        {
            path: '/cart',
            component: CartPage
        }
    ],
    mode: 'history' //нужно добавить

});