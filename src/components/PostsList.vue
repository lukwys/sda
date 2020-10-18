<template>
  <div>
    <ul class="posts">
      <Post
        :post="post"
        :users="users"
        v-for="post in paginatedPosts"
        :key="post.id"
      />
    </ul>
    <BPagination align="center" :total-rows="rows" :per-page="perPage" v-model="currentPage" />
  </div>
</template>

<script>
import Post from "./Post";
import { BPagination } from "bootstrap-vue";

export default {
  name: "PostsList",
  components: {
    Post,
    BPagination,
  },
  props: ['posts'],
  data: () => {
    return {
      perPage: 10,
      currentPage: 1
    };
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
    rows() {
      return this.posts.length;
    },
    paginatedPosts() {
      return this.posts.slice(this.paginatedPostFirst, this.paginatedPostLast);
    },
    pageIndex() {
      return this.currentPage - 1;
    },
    paginatedPostFirst() {
      if (this.currentPage === 0) return 0;
      return this.pageIndex * this.perPage;
    },
    paginatedPostLast() {
      if (this.currentPage === 0) return 10;
      return this.paginatedPostFirst + this.perPage;
    }
  },
};
</script>

<style lang="scss">
.posts {
  list-style: none;
}
</style>
  