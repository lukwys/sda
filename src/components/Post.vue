<template>
  <li class="post">
      <h2 class="post__title">{{title}}</h2>
      <p class="post__body">{{body}}</p>
  </li>
</template>

<script>
export default {
  name: 'Post', 
  props: ['title', 'body']
};
</script>

<style scoped lang="scss">
.post {
  &__title::first-letter {
    text-transform: uppercase;
  }
}
</style>