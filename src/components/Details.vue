<template>
<div class="details">
    <p class="details__user">{{user.name}}</p>
    <p class="details__comment">{{commentsCounter}}</p>
</div>
</template>

<script>
export default {
  name: "Details",  
  props: ['user', 'commentsCounter']
};
</script>

<style scoped lang="scss">
  .details {
    display: flex;
    justify-content: space-around;
  }
</style>


