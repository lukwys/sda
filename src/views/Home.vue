<template>
  <div class="home">
    <PostList :posts="posts" />
  </div>
</template>

<script>
import PostList from "../components/PostsList";
import { mapActions } from "vuex";

export default {
  name: "Home",
  components: {
    PostList,
  },
  data: () => {
    return {
      posts: [],
    };
  },
  methods: {
    ...mapActions(["fetchUsers"]),
    async fetchPosts() {
      const result = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await result.json();
      this.posts = data;
    },
  },
  mounted() {
    this.fetchPosts();
    this.fetchUsers();
  },
};
</script>
