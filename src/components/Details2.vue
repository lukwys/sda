<template>
<div class="details">
    <BIcon icon="person-circle" class="details__icon" />
    <span class="details__user" @click="openUser">{{user.name}}</span>
    <BIcon icon="envelope" class="details__icon" />
    <span class="details__comment">{{commentsCounter}}</span>
  </div>
</template>

<script>
import { BIcon } from "bootstrap-vue";

export default {
  name: "Details",
  components: {
    BIcon,
  },
  props: ["user", "commentsCounter"],
  methods: {
      openUser() {
          this.$router.push(`/user/${this.user.id}`)
      }
  }
};
</script>

<style scoped lang="scss">
.details {
  &__user{
    margin-right: 40px;
    cursor: pointer;
  }
  &__icon {
    margin-right: 10px;
  }
}
</style>