<template>
    <section>
        <h2>Каталог книг</h2>

        <CategoryFilter
            v-model="selectedCategory"
            :categories="categories"
        />

        <BookList :books="filteredBooks" />
    </section>
</template>

<script setup>
import { computed, inject, ref } from 'vue';
import CategoryFilter from '../components/CategoryFilter.vue';
import BookList from '../components/BookList.vue';

const books = inject('books');
const selectedCategory = ref('all');

const categories = computed(() =>
    [...new Set(books.value.map((b) => b.category))].sort()
);

const filteredBooks = computed(() => {
    if (selectedCategory.value === 'all') return books.value;
    return books.value.filter((b) => b.category === selectedCategory.value);
});
</script>

<style scoped>
h2 {
    color: #2c3e50;
    font-size: 22px;
    margin: 0 0 20px 0;
}
</style>