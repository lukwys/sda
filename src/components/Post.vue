<template>
  <li class="post">
      <h2 class="post__title">{{post.title}}</h2>
      <p class="post__body">{{post.body}}</p>
      <Details :user="user" :commentsCounter="commentsCounter"/>
  </li>
</template>

<script>
import Details from "./Details2";

export default {
  name: 'Post', 
  components: {
    Details, 
  },
  data: () => {
    return {
      comments: []
    }
  },
  props: ['post', 'users'],
  computed: {
    user() {
      return this.users.find(user => this.post.userId === user.id)
    },
    commentsCounter() {
      return this.comments.length;
    }
  },
  async mounted() {
    const result = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${this.post.id}`);
    const data = await result.json();
    this.comments = data;
  }
};
</script>

<style scoped lang="scss">
.post {
  &__title::first-letter {
    text-transform: uppercase;
  }
}
</style>