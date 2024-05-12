<script setup lang="ts">
import { ref } from 'vue';
import { useVocabDataStore } from '../stores/vocabDataStore';
import jeMid from "../assets/img/je-mid.png"
import ukMid from "../assets/img/uk-mid.png"

const dataStore = useVocabDataStore();
const searchTerm = ref('');
const searchResults = ref([]);

// Function to handle search; debouncing could be added here
function handleSearch() {
    if (searchTerm.value) {
        searchResults.value = dataStore.search(searchTerm.value);
    } else {
        searchResults.value = [];
    }
}
</script>

<template>
    <search>
        <input
            type="text"
            v-model="searchTerm"
            @input="handleSearch"
            placeholder="Search by word"
        />
    </search>
    <output>
        <ul v-if="searchResults.length > 0">
            <li>
                <div class="first-result">
                    <img :src="jeMid">
                </div>
                <div class="second-result">
                    <img :src="ukMid">
                </div>
            </li>
            <li v-for="(item, index) in searchResults" :key="index">
                <div class="first-result">{{ item.jerriais }}</div>
                <div class="second-result">{{ item.english }}</div>
            </li>
        </ul>
    </output>
</template>

<style scoped>
</style>
