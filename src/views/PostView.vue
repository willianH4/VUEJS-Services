<template>
    <section class="mt-3 mb-3 mx-auto row col-7">
        <router-link :to="{ name: 'blog' }">Volver atras</router-link>
        <div class="card">
            <div class="body">
                <h3>{{ post.title }}</h3>
                <p>{{ post.body }}</p>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
    // cacht params url, format apply all APIS VUE
    import PostService from '@/data/services/PostService';
    import { onMounted, ref } from 'vue';
    import { useRoute } from 'vue-router';

    const service = new PostService();
    const post = service.getPost();

    onMounted( async () => {
        const route = useRoute();
        let postId = Number(route.params.id);
        await service.fetchPostById(postId);
    });

</script>

<style scoped>
</style>