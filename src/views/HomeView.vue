<template>
    <section class="home">
        <h2>Добро пожаловать в онлайн-библиотеку!</h2>
        <p>
            Здесь вы можете просматривать книги по категориям, читать их описание
            и добавлять новые издания в каталог.
        </p>

        <div class="actions">
            <router-link to="/books" class="action-btn">
                📖 Перейти к списку книг
            </router-link>
            <router-link to="/add" class="action-btn secondary">
                ➕ Добавить книгу
            </router-link>
        </div>

        <div class="info">
            <p>
                Всего книг в каталоге: <b>{{ books.length }}</b>
            </p>
            <p>
                Категорий: <b>{{ categoriesCount }}</b>
            </p>
        </div>
    </section>
</template>

<script setup>
import { computed, inject } from 'vue';

const books = inject('books');

const categoriesCount = computed(
    () => new Set(books.value.map((b) => b.category)).size
);
</script>

<style scoped>
.home {
    max-width: 640px;
    margin: 0 auto;
    text-align: center;
}

h2 {
    color: #2c3e50;
    font-size: 24px;
    margin-bottom: 12px;
}

p {
    color: #555;
    line-height: 1.6;
}

.actions {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin: 24px 0;
}

.action-btn {
    display: inline-block;
    padding: 12px 20px;
    background-color: #42b883;
    color: #fff;
    text-decoration: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    transition: background-color 0.15s ease;
}

.action-btn:hover {
    background-color: #369870;
}

.action-btn.secondary {
    background-color: #ffffff;
    color: #42b883;
    border: 2px solid #42b883;
}

.action-btn.secondary:hover {
    background-color: #eaf8f1;
}

.info {
    margin-top: 24px;
    padding: 16px;
    background-color: #ffffff;
    border: 1px solid #e0e4e8;
    border-radius: 8px;
}

.info p {
    margin: 6px 0;
}
</style>