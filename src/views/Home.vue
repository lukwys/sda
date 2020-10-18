<template>
  <div class="home">
    <PostList />
  </div>
</template>

<script>

import PostList from '../components/PostsList'

export default {
  name: 'Home',
  components: {
    PostList
  }
}
</script>
