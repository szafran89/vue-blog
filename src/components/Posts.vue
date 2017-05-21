<template>
  <div>
    <div class="box" v-for="post in posts">
      <article class="media">
        <div class="media-content">
          <div class="content">
            <router-link :to="{ name: 'post', params: { slug: post.fields.slug }}">
              <strong>
                {{ post.fields.title }}
              </strong>
            </router-link>
            <br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
          </div>
        </div>
      </article>
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
