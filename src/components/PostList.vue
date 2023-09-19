<template>
<h3>Listado de posts</h3>
<ul class="post-list">
    <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
</ul>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import PostService from '@/services/PostService';

    export default defineComponent({
        name: 'PostList',
        data() {
            const service = new PostService();
            const posts = service.getPosts();
            return { posts, service }
        },
        async mounted() {
             await this.service.fetchAll();
        }
    })
</script>

<style scoped>
    .post-list {
        font-size: 14pt;
    }
</style>