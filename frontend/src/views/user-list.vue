<script>
import Counter from '@/components/counter.vue'
import { mapActions } from 'vuex'

export default {
  name: 'UserList',
  components: { Counter },
  data() {
    return {
      users: [],
      time: new Date()
    }
  },
  async created() {
    this.users = await this.fetchUsers()
  },
  methods: {
    ...mapActions(['fetchUsers'])
  }
}
</script>

<template lang="pug">
  .home
    h1 Novels
    h2 Users
    p The time is: {{ time }}
    div(v-for="user in users")
      router-link(:to="`/users/${user._id}`") {{ user.name }}
    Counter
</template>