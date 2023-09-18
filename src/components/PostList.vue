<template>
<h3>Listado de posts</h3>
<ul class="post-list">
    <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
</ul>
</template>

<script lang="ts">
    import { defineComponent, onMounted } from 'vue';
    import PostService from '@/services/PostService';

    export default defineComponent({
        name: 'PostList',
        setup() {
            const service = new PostService();
            const posts = service.getPosts();

            onMounted(
                async() => {
                    await service.fetchAll();
                }
            );
            return { posts }
        }
    })
</script>

<style scoped>
    .post-list {
        font-size: 14pt;
    }
</style>