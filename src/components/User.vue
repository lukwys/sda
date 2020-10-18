<template>
  <div>
    <div class="user">
      <p class="user__name">Name: {{ user.name }}</p>
      <p class="user__user-name">User Name: {{ user.username }}</p>
      <p class="user__email">Email: {{ user.email }}</p>
    </div>
    <PostList :posts="userPosts" />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import PostList from '../components/PostsList'

export default {
  name: "User",
  components: {
    PostList
  },
  computed: {
    user() {
      return this.$store.getters.getUserById(parseInt(this.$route.params.id));
    },
    userPosts() {
      return this.$store.state.userPosts;
    }
  },
  methods: {
    ...mapActions(["fetchPosts"]),
  },
  mounted() {
    this.fetchPosts(this.$route.params.id);
  },
};
</script>

<style>
</style>