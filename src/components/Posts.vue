<template lang="html">
  <div>
    <h1>Posts</h1>
    <ul class="list-group">
      <li class="list-group-item"
          v-for="post in posts">
        {{ post }}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'posts',
    data() {
      return {
        posts: ['111', 222],
      };
    },
  };
</script>

<style lang="css">

</style>
