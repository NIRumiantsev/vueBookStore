<template>
  <div>
    <div v-if="loading" class="spinner-border text-primary" role="status"></div>
    <div v-if="error" class="alert alert-danger">
      {{error}}
    </div>
    <ul class="book-list">
      <li v-for="book in books" :key="book.id">
        <BookListItem
                :id="book.id"
                :cover-image="book.coverImage"
                :title="book.title"
                :author="book.author"
                :price="book.price"
        />
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import BookListItem from "./BookListItem";

  export default {
    components: {
      BookListItem
    },
    created: function () {
      this.$store.dispatch('fetchBooks');
    },
    computed: {
      ...mapGetters(['books', 'error', 'loading'])
    }
  };
</script>

<style scoped>
  .book-list {
    list-style: none;
  }
</style>