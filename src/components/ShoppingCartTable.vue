<template>
  <div class="shopping-cart-table">
    <h2>Your Order</h2>
    <table class="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Item</th>
          <th>Count</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in cartItems" :key="item.id">
          <td>{{item.id}}</td>
          <td>{{item.title}}</td>
          <td>{{item.count}}</td>
          <td>{{item.total}}</td>
          <td>
            <button class="btn btn-outline-danger btn-sm float-right" @click="delBook(item.id)">
              <i class="fa fa-trash-o"></i>
            </button>
            <button class="btn btn-outline-success btn-sm float-right" @click="addBook(item.id)">
              <i class="fa fa-plus-circle"></i>
            </button>
            <button class="btn btn-outline-warning btn-sm float-right" @click="decBook(item.id)">
              <i class="fa fa-minus-circle"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="total">Total: $201</div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters(['cartItems'])
    },
    methods: {
      addBook(id) {
        this.$store.dispatch('addBookToCart', id);
      },
      delBook(id) {
        this.$store.dispatch('delBookFromCart', id);
      },
      decBook(id) {
        this.$store.dispatch('decBookInCart', id);
      }
    }
  }
</script>

<style scoped>
.shopping-cart-table {
  margin-top: 45px;
}

.shopping-cart-table .total {
  text-align: right;
  font-size: 20px;
}

.shopping-cart-table button {
  margin-left: 5px;
  margin-top: 5px;
}
</style>