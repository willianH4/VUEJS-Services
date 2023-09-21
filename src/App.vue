<template>
  <nav class="nav">
    <router-link class="me-3" to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
</template>

<script lang="ts" setup>
  
</script>

<style scoped>
  #app {
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    color: burlywood;
  }

  .nav {
    padding: 30px;

    .router-link-exact-active {
      color: red;
    }

    .router-link-active {
      color: blue;
    }

  }
</style>