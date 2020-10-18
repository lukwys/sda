<template>
  <div>
    <User  />
  </div>
</template>

<script>
import User from '../components/User';
import { mapActions } from 'vuex';

export default {
  name: 'UserInfo',
  components: {
    User
  },
  computed: {
    users() {
      return this.$store.state.users;
    }
  },
  methods: {
    ...mapActions(['fetchUsers'])
  },
  mounted() {
    this.fetchUsers();
  }
  
}
</script>
