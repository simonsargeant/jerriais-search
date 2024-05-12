<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import jeBig from "./assets/img/je-big.png"
</script>

<template>
    <header>
        <div class="title">
            <h1>Jèrriais</h1>
            <img :src="jeBig">
        </div>
        <nav>
            <RouterLink to="/">Search</RouterLink>
            <RouterLink to="/about">About</RouterLink>
        </nav>
    </header>

    <RouterView />
</template>

<style scoped>
</style>
