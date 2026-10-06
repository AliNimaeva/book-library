import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import BooksView from '../views/BooksView.vue';
import BookDetailView from '../views/BookDetailView.vue';
import AddBookView from '../views/AddBookView.vue';

const routes = [
    { path: '/', name: 'home', component: HomeView },
    { path: '/books', name: 'books', component: BooksView },
    { path: '/books/:id', name: 'book-detail', component: BookDetailView },
    { path: '/add', name: 'add-book', component: AddBookView },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;