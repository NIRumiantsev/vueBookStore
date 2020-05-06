<template>
  <header class="shop-header row">
    <router-link to="/" class="logo-link">
      <div class="logo" href="#">Book store</div>
    </router-link>
    <router-link to="/cart" class="cart-link">
      <div class="shopping-cart">
        <i class="cart-icon fa fa-shopping-cart"></i>
        5 items 10
      </div>
    </router-link>
  </header>
</template>

<script>
export default {
  name: "ShopHeader",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.shop-header {
  font-family: Roboto, sans-serif;
  border-bottom: 1px solid #e5e5e5;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
}

.shop-header .logo-link {
  text-decoration: none;
}

.shop-header .logo {
  font-size: 35px;
  padding-left: 15px;
  color: #363636;
  transition: color 0.3s;
}

.shop-header .logo:hover {
  color: #5a5656;
}

.shop-header .cart-link {
  text-decoration: none;
}

.shop-header .shopping-cart {
  align-self: center;
  font-size: 1.3rem;
  padding-right: 15px;
}

.shop-header .shopping-cart .cart-icon {
  font-size: 40px;
  color: #17a2b8;
  margin-right: 10px;
}

.cart-icon {
  transition: color 0.3s;
}

.cart-icon:hover {
  color: #000066;
}
</style>
