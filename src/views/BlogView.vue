<template>
<!-- <ul>
    rutas dinamicas mediante el name(name es una variable forma correcta de trabajar con rutas y no con el path)
    <li><router-link :to="{ name: 'post', params: { id: 1 } }">Primer post</router-link></li>
    <li><router-link :to="{ name: 'post', params: { id: 2 } }">Segundo post</router-link></li>
    <li><router-link :to="{ name: 'post', params: { id: 3 } }">Tercer post</router-link></li>
    <li><router-link :to="{ name: 'post', params: { id: 4 } }">Cuarto post</router-link></li>
</ul> -->
<section class="mt-3 mb-3 mx-auto row col-10">
    <PostList/>
</section>
    
</template>

<script lang="ts" setup>
    import PostList from '@/components/PostList.vue';
</script>

<style scoped>
</style>