<template>
    <div>
        <p v-if="books.length === 0" class="empty">
            Книг пока нет
        </p>
        <div v-else class="book-list">
            <BookItem v-for="book in books" :key="book.id" :book="book" />
        </div>
    </div>
</template>

<script setup>
import BookItem from './BookItem.vue';

defineProps({
    books: { type: Array, required: true },
});
</script>

<style scoped>
.book-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 16px;
}

.empty {
    text-align: center;
    color: #888;
    font-style: italic;
    padding: 20px;
}
</style>