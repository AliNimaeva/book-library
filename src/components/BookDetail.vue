<template>
    <article class="book-detail">
        <h1>{{ book.title }}</h1>
        <p class="author">Автор: <b>{{ book.author }}</b></p>
        <div class="meta">
            <span class="category">{{ book.category }}</span>
            <span class="year">Год: {{ book.year }}</span>
        </div>
        <p class="description">{{ book.description }}</p>

        <router-link to="/books" class="back-link">
            ← Назад к списку книг
        </router-link>
    </article>
</template>

<script setup>
defineProps({
    book: { type: Object, required: true },
});
</script>

<style scoped>
.book-detail {
    background-color: #ffffff;
    border: 1px solid #e0e4e8;
    border-radius: 10px;
    padding: 24px;
}

h1 {
    margin: 0 0 12px 0;
    color: #2c3e50;
    font-size: 24px;
}

.author {
    font-size: 16px;
    color: #555;
    margin: 0 0 12px 0;
}

.meta {
    display: flex;
    gap: 16px;
    font-size: 14px;
    color: #666;
    margin-bottom: 16px;
}

.category {
    background-color: #eaf8f1;
    color: #2c7a54;
    padding: 3px 10px;
    border-radius: 4px;
}

.description {
    font-size: 16px;
    line-height: 1.6;
    color: #333;
    margin-bottom: 24px;
}

.back-link {
    display: inline-block;
    color: #42b883;
    text-decoration: none;
    font-weight: 600;
}

.back-link:hover {
    text-decoration: underline;
}
</style>