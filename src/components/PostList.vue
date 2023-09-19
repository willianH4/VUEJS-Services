<template>
<h3>Listado de posts</h3>
<ul class="post-list">
    <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
</ul>
</template>

<script lang="ts" setup>
    import { onMounted } from 'vue';
    import PostService from '@/services/PostService';

    const service = new PostService();
    const posts = service.getPosts();

    onMounted(
        async() => {
            await service.fetchAll();
        }
    );

</script>

<style scoped>
    .post-list {
        font-size: 14pt;
    }
</style>