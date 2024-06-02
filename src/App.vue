<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import jeBig from "./assets/img/je-big.png"
</script>

<template>
    <header>
        <div class="title">
            <h1>Pathole</h1>
            <img :src="jeBig">
        </div>
        <nav>
            <ul>
                <li><RouterLink to="/">Search</RouterLink></li>
                <li><RouterLink to="/about">About</RouterLink></li>
            </ul>
        </nav>
    </header>

    <RouterView />
</template>

<style scoped>
</style>
