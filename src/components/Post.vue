<template>
  <div class="post">
    <article class="markdown-body">
      <h1>
        {{ post.title }}
      </h1>
      <vue-markdown :source="this.post.body"></vue-markdown>
    </article>
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

<style lang="scss" src="github-markdown-css">
  .post {
    text-align: left;
  }
</style>
