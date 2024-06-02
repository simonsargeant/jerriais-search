import { defineStore } from 'pinia'
import { vocabData } from '../data/vocabData'
import { ref } from 'vue';

function normalizeString(str) {
  return str.normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/['’]/g, '')
    .replace(/[\s-]/g, '')
    .toLowerCase();
}

export const useVocabDataStore = defineStore('vocabData', () => {
  const vocab = ref(vocabData);
  const lastSearchedTerm = ref('');

  function search(term: string) {
    lastSearchedTerm.value = term;
    const normalized = normalizeString(term);
    return vocab.value.filter(row =>
      row.f.includes(normalized) || row.k.includes(normalized)
    );
  }

  return { vocab, search, lastSearchedTerm }
});
