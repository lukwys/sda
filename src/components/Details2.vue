<template>
  <div class="details">
    <BIcon icon="person-circle" class="details__icon" />
    <span class="details__user" @click="openUser">{{ user.name }}</span>
    <div v-b-toggle="'comments'">
      <BIcon icon="envelope" class="details__icon" />
      <span class="details__comment" >{{ commentsCounter }}</span>
    </div>
    <BCollapse id="comments"> <Comments :comments="comments" /> </BCollapse>
  </div>
</template>

<script>
import { BIcon } from "bootstrap-vue";
import { BCollapse } from 'bootstrap-vue'
import Comments from "./Comments";
export default {
  name: "Details",
  components: {
    BIcon, BCollapse, Comments
  },
  props: ["user", "comments", "commentsCounter"],
  methods: {
    openUser() {
      this.$router.push(`/user/${this.user.id}`);
    },
  }
};
</script>

<style scoped lang="scss">
.details {
  &__user {
    margin-right: 40px;
    cursor: pointer;
  }
  &__icon {
    margin-right: 10px;
  }
}
</style>