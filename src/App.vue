<template>
  <div id="app">
    <page-header></page-header>
    <section class="section">
      <div class="container">
        <router-view></router-view>
      </div>
    </section>
    <page-footer></page-footer>
  </div>
</template>

<script>
  import PageHeader from '@/components/PageHeader';
  import PageFooter from '@/components/PageFooter';

  export default {
    name: 'app',
    components: {
      PageHeader,
      PageFooter,
    },
  };
</script>

<style lang="scss" src="bulma"></style>
