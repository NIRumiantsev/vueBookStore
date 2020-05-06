<template>
  <div class="container">
    <ShopHeader />
    <router-view></router-view>
  </div>
</template>

<script>

import ShopHeader from './components/ShopHeader';

export default {
  name: 'App',
  components: {
    ShopHeader,
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
