<template>
  <div>
    <header>
      <nav class="nav">
        <div class="nav-left">
          <router-link :to="{ name: 'home' }" class="nav-item">
            <img src="../assets/logo.png">
          </router-link>
        </div>
        <div class="nav-center">
          <a class="nav-item">
            <span class="icon">
              <i class="fa fa-github"></i>
            </span>
          </a>
          <a class="nav-item">
            <span class="icon">
              <i class="fa fa-twitter"></i>
            </span>
          </a>
        </div>
        <span class="nav-toggle">
          <span></span>
          <span></span>
          <span></span>
        </span>
        <div class="nav-right nav-menu">
          <a class="nav-item">
            Home
          </a>
          <a class="nav-item">
            About
          </a>
          <a class="nav-item">
            Blog
          </a>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
  export default {
  };
</script>
