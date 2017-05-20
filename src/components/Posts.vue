<template>
  <div>
    <h1>Posts</h1>
    <div v-for="post in posts">
      <router-link :to="{ name: 'post', params: { slug: post.fields.slug }}">
        {{ post.fields.title }}
      </router-link>
    </div>
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
