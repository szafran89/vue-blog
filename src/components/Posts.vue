<template lang="html">
  <div>
    <h1>Posts</h1>
    <ul class="list-group">
      <li class="list-group-item"
          v-for="post in posts">
        {{ post.fields.title }}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'posts',
    data() {
      return {
        posts: [],
      };
    },
    created() {
      this.$config.client.getEntries({
        content_type: this.$config.contentTypes.posts,
      }).then(
        response => {
          this.posts = response.items;
          // eslint-disable-next-line
          console.log(this.posts);
        },
      );
    },
  };
</script>
