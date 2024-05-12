import { defineStore } from 'pinia'
import { vocabData } from '../data/vocabData'
import { ref } from 'vue';

export const useVocabDataStore = defineStore('vocabData', () => {
    const vocab = ref(vocabData);

    function search(term: string) {
        term = term.toLowerCase();
        return vocab.value.filter(row =>
            row.jerriais.toLowerCase().includes(term) || row.english.toLowerCase().includes(term)
        );
    }

    return { vocab, search }
});
