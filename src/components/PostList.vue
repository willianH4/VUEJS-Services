<template>
<h3>Listado de posts <button class="btn btn-primary">Estilado con bootstrap</button> </h3>
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

        li {
            padding: 10px;
            width: 100%;
            border: 1px solid $border-color;
            color: $red;
        }

        li:hover {
            background-color: darken(#000000, 10%);
        }

    }

</style>