<template>
<h1>Post view del elemento: {{ postId }}</h1>
</template>

<script lang="ts" setup>
    // cacht params url, format apply all APIS VUE
    import { onMounted, ref } from 'vue';
    import { useRoute } from 'vue-router';

    let postId = ref(0);

    onMounted(() => {
        const route = useRoute();
        postId.value = Number(route.params.id);
    });

</script>

<style scoped>
</style>