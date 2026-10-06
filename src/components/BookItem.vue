<template>
    <router-link :to="`/books/${book.id}`" class="book-item">
        <h3 class="book-title">{{ book.title }}</h3>
        <p class="book-author">{{ book.author }}</p>
        <div class="book-meta">
            <span class="book-category">{{ book.category }}</span>
            <span class="book-year">{{ book.year }}</span>
        </div>
    </router-link>
</template>

<script setup>
defineProps({
    book: { type: Object, required: true },
});
</script>

<style scoped>
.book-item {
    display: block;
    padding: 16px;
    background-color: #ffffff;
    border: 1px solid #e0e4e8;
    border-radius: 8px;
    text-decoration: none;
    color: inherit;
    transition: border-color 0.15s ease, box-shadow 0.15s ease;
}

.book-item:hover {
    border-color: #42b883;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.book-title {
    margin: 0 0 6px 0;
    font-size: 18px;
    color: #2c3e50;
}

.book-author {
    margin: 0 0 10px 0;
    font-size: 14px;
    color: #666;
}

.book-meta {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    color: #888;
}

.book-category {
    background-color: #eaf8f1;
    color: #2c7a54;
    padding: 2px 8px;
    border-radius: 4px;
}

.book-year {
    font-style: italic;
}
</style>