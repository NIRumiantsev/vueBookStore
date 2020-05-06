<template>
  <div class="book-list-item">
    <div class="book-cover">
      <img :src="coverImage" alt="cover image" />
    </div>
    <div class="book-details">
      <span class="book-title">{{title}}</span>
      <div class="book-author">{{author}}</div>
      <div class="book-price">${{price}}</div>
      <button class="book-button" @click="addBookToCart">Add to cart</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id", "title", "author", "price", "coverImage"],
  methods: {
    addBookToCart() {
      this.$store.dispatch('addBookToCart', this.id)
    }
  }
};
</script>

<style scoped>
.book-list-item {
  font-family: Roboto, sans-serif;
  display: flex;
  margin: 15px 0;
}

.book-list-item .book-cover {
  flex-shrink: 0;
  width: 120px;
  margin-right: 30px;
}

.book-list-item .book-cover img {
  max-width: 100%;
}

.book-list-item .book-details {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 10px;
  align-items: flex-start;
}

.book-list-item .book-details .book-title {
  font-size: 1.2rem;
}

.book-list-item .book-details .book-price {
  font-size: 1.4rem;
}

.book-button {
  padding: 5px 10px;
  background: #0f6674;
  border: none;
  border-radius: 5px;
  margin: 0;
  color: #FFFFFF;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
  cursor: pointer;
  transition: background-color 0.3s;
}

.book-button:hover {
  background-color: #0a3840;
}

</style>