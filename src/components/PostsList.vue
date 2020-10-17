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
  data: () => {
    return {
      posts: [],
      perPage: 10,
      currentPage: 1,
      users: [],
    };
  },
  computed: {
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
  methods: {
    async fetchPosts() {
      const result = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await result.json();
      this.posts = data;
    },
    async fetchUsers() {
      const result = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await result.json();
      this.users = data;
    }
  },
  mounted() {
    this.fetchPosts();
    this.fetchUsers();
  },
};
</script>

<style lang="scss">
.posts {
  list-style: none;
}
</style>
  