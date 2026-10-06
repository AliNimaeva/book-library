<template>
    <BookDetail v-if="book" :book="book" />
    <div v-else class="not-found">
        <p>Книга не найдена</p>
        <router-link to="/books" class="back-link">
            ← Вернуться к списку
        </router-link>
    </div>
</template>

<script setup>
import { computed, inject } from 'vue';
import { useRoute } from 'vue-router';
import BookDetail from '../components/BookDetail.vue';

const route = useRoute();
const getBookById = inject('getBookById');

const book = computed(() => getBookById(route.params.id));
</script>

<style scoped>
.not-found {
    text-align: center;
    padding: 40px;
}

.not-found p {
    font-size: 18px;
    color: #888;
    margin-bottom: 16px;
}

.back-link {
    color: #42b883;
    text-decoration: none;
    font-weight: 600;
}

.back-link:hover {
    text-decoration: underline;
}
</style>