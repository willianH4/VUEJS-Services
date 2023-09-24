<template>
    <nav class="navbar  bg-dark border-bottom border-body navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Home</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item me-2">
                        <router-link to="/">
                            Home
                        </router-link>
                    </li>
                    <li class="nav-item me-2">
                        <router-link to="/about">
                            About
                        </router-link>
                    </li>
                    <li class="nav-item me-2">
                        <router-link to="/contact">
                            Contact
                        </router-link>
                    </li>
                    <li class="nav-item me-2">
                        <router-link to="/services">
                            Services
                        </router-link>
                    </li>
                    <li class="nav-item me-2">
                        <router-link to="/blog">
                            Blog
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script lang="ts" setup>
</script>

<style scoped>
    a {
        text-decoration: none;
    }

    .router-link-active {
            color: red !important;
        }

        .router-link-exact-active {
            color: aqua !important;
        }
</style>