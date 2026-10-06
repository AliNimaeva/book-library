<template>
    <div class="app">
        <header class="header">
            <h1>📚 Онлайн-библиотека</h1>
            <nav class="nav">
                <router-link to="/">Главная</router-link>
                <router-link to="/books">Книги</router-link>
                <router-link to="/add">Добавить книгу</router-link>
            </nav>
        </header>

        <main class="content">
            <router-view />
        </main>

        <footer class="footer">
            <p>Учебный проект на Vue.js + Vue Router</p>
        </footer>
    </div>
</template>

<script setup>
import { ref, watch, provide } from 'vue';
import { initialBooks } from './data/books';

const STORAGE_KEY = 'book-library-books';

function loadBooks() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        return raw ? JSON.parse(raw) : initialBooks;
    } catch (e) {
        console.log('Ошибка чтения localStorage:', e);
        return initialBooks;
    }
}

const books = ref(loadBooks());

watch(
    books,
    (newValue) => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newValue));
    },
    { deep: true }
);

function addBook(book) {
    const nextId = books.value.length
        ? Math.max(...books.value.map((b) => b.id)) + 1
        : 1;
    books.value.push({
        id: nextId,
        title: book.title,
        author: book.author,
        category: book.category,
        description: book.description,
        year: book.year,
    });
}

function getBookById(id) {
    return books.value.find((b) => b.id === Number(id));
}

provide('books', books);
provide('addBook', addBook);
provide('getBookById', getBookById);
</script>