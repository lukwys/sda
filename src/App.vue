<template>
  <ul class="posts">
    <Post
      :title="post.title"
      :body="post.body"
      v-for="post in posts"
      :key="post.id"
    />
  </ul>
</template>

<script>
import Post from "./components/Post";
export default {
  name: "App",
  components: {
    Post,
  },
  data: () => {
    return {
      posts: [],
    };
  },
  async mounted() {
    const result = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await result.json();
    this.posts = data;
  },
};
</script>

<style lang="scss">
  .posts {
    list-style: none;
  }
</style>
  