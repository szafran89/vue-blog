<template>
  <div class="post">
    <h1>
      {{ post.title }}
    </h1>
    <vue-markdown :source="this.post.body"></vue-markdown>
  </div>
</template>

<script>
  import VueMarkdown from 'vue-markdown';

  export default {
    name: 'post',
    data() {
      return {
        post: {},
      };
    },
    created() {
      this.$config.client.getEntries({
        content_type: this.$config.contentTypes.posts,
        'fields.slug': this.$route.params.slug,
      }).then(
        response => {
          this.post = response.items[0].fields;
        },
      );
    },
    components: {
      VueMarkdown,
    },
  };
</script>

<style>
  .post {
    text-align: left;
  }
</style>
