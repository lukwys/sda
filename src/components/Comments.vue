<template>
    <ul>
        <li v-for="comment in comments" :key="comment.id">
            {{comment.body}}
        </li>
    </ul>
</template>

<script>
export default {
  name: "Comments",
  props: ['comments']
  // data: () => {
  //   return {
  //     comments: [],
  //   };
  // },
  // methods: {
  //   async fetchComments() {
  //     const result = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${this.postId}`);
  //     const data = await result.json();
  //     this.comments = data;
  //   },
  // }
};
</script>

<style>
</style>