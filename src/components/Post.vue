<template>
  <div>
    <h1>
      {{ post.title }}
    </h1>
    <div>
      {{ post.body }}
    </div>
  </div>
</template>

<script>
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
  };
</script>
