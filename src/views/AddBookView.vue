<template>
    <AddBook :on-add="addBook" />
</template>

<script setup>
import { inject } from 'vue';
import AddBook from '../components/AddBook.vue';

const addBook = inject('addBook');
</script>