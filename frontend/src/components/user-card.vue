<script>
export default {
  name: 'UserCard',
  props: ['user'],
  data() {
    return {
      defaultBio: 'This user has no bios.'
    }
  }
}
</script>

<template lang="pug">
.box
  h1 {{ user.name }} ({{ user.age }})
  p Bio: {{ user.bio || defaultBio }}
  h2 Books ({{ user.books.length }})
  h2 Chapters ({{ user.chapters.length }})

  .book(v-for="book in user.books")
    h3 {{ book.filename }}
    p(v-if="!book.likedBy.length")
      | no likes yet!
    p(v-else)
      | {{ book.likedBy.map(user => user.name).join(', ') }}
</template>

<style lang="scss" scoped>
.box {
  padding: 2rem;
  border: 1px solid #333;
  background: #dd0;
  border-radius: 0.3rem;
}
</style>
