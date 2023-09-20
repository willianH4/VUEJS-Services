<template>
<h3>Listado de posts</h3>
<ul class="post-list">
    <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
</ul>
</template>

<script lang="ts" setup>
    import { onMounted } from 'vue';
    import PostService from '@/data/services/PostService';

    const service = new PostService();
    const posts = service.getPosts();

    onMounted(
        async() => {
            await service.fetchAll();
        }
    );

</script>

<style scoped lang="scss">
$border-color: #ccc;
    .post-list {
        width: 95vw;
        height: 75px;
        padding: 20px;
        list-style: none;
    }

    .post-list li {
        padding: 10px;
        width: 100%;
        border: 1px solid $border-color;
        color: $red;
    }

</style>