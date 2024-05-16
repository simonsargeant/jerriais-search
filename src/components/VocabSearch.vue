<script setup lang="ts">
import { ref } from 'vue';
import { useVocabDataStore } from '../stores/vocabDataStore';
import jeMid from "../assets/img/je-mid.png"
import ukMid from "../assets/img/uk-mid.png"
import { usePlausible } from 'v-plausible/vue'


const dataStore = useVocabDataStore();
const searchTerm = ref('');
const searchResults = ref([]);
const { trackEvent } = usePlausible();
let searchTimeout = null;

function handleSearch() {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(async () => {
        if (searchTerm.value) {
            let res = dataStore.search(searchTerm.value);
            searchResults.value = res
            trackEvent('search', { props: { term: searchTerm.value, results: res.length } })
        } else {
            searchResults.value = [];
        }
    }, 300);
}

</script>

<template>
    <div class="search">
        <input
            type="text"
            v-model="searchTerm"
            @input="handleSearch"
            placeholder="Search for a word in Jèrriais or English"
        />
    </div>
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
                <div class="first-result">{{ item.j }}</div>
                <div class="second-result">{{ item.e }}</div>
            </li>
        </ul>
    </output>
</template>

<style scoped>
</style>
