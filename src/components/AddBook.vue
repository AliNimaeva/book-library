<template>
    <form class="add-book-form" @submit.prevent="handleSubmit">
        <h2>Добавить новую книгу</h2>

        <div class="field">
            <label for="title">Название *</label>
            <input
                id="title"
                v-model="title"
                type="text"
                placeholder="Например: Война и мир"
            />
        </div>

        <div class="field">
            <label for="author">Автор *</label>
            <input
                id="author"
                v-model="author"
                type="text"
                placeholder="Например: Лев Толстой"
            />
        </div>

        <div class="field">
            <label for="category">Категория *</label>
            <select id="category" v-model="category">
                <option value="" disabled>Выберите категорию</option>
                <option value="Классика">Классика</option>
                <option value="Фантастика">Фантастика</option>
                <option value="Детектив">Детектив</option>
                <option value="Антиутопия">Антиутопия</option>
                <option value="Научная литература">Научная литература</option>
                <option value="Другое">Другое</option>
            </select>
        </div>

        <div class="field">
            <label for="year">Год издания</label>
            <input
                id="year"
                v-model.number="year"
                type="number"
                placeholder="Например: 1869"
                min="0"
                max="2100"
            />
        </div>

        <div class="field">
            <label for="description">Описание</label>
            <textarea
                id="description"
                v-model="description"
                rows="4"
                placeholder="Краткое описание книги"
            ></textarea>
        </div>

        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>

        <button type="submit" class="submit-btn">Добавить книгу</button>
    </form>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
    onAdd: { type: Function, required: true },
});

const router = useRouter();

const title = ref('');
const author = ref('');
const category = ref('');
const year = ref('');
const description = ref('');
const errorMessage = ref('');

function handleSubmit() {
    if (!title.value.trim() || !author.value.trim() || !category.value) {
        errorMessage.value = 'Заполните обязательные поля: название, автор, категория';
        return;
    }

    props.onAdd({
        title: title.value.trim(),
        author: author.value.trim(),
        category: category.value,
        year: year.value || new Date().getFullYear(),
        description: description.value.trim() || 'Описание не добавлено',
    });

    router.push('/books');
}
</script>

<style scoped>
.add-book-form {
    max-width: 520px;
    margin: 0 auto;
    background-color: #ffffff;
    border: 1px solid #e0e4e8;
    border-radius: 10px;
    padding: 24px;
}

h2 {
    margin: 0 0 20px 0;
    color: #2c3e50;
    font-size: 20px;
}

.field {
    display: flex;
    flex-direction: column;
    margin-bottom: 14px;
}

.field label {
    font-size: 14px;
    color: #555;
    margin-bottom: 4px;
}

.field input,
.field select,
.field textarea {
    padding: 9px 12px;
    font-size: 15px;
    border: 1px solid #c8cfd6;
    border-radius: 6px;
    outline: none;
    font-family: inherit;
    transition: border-color 0.15s ease;
}

.field input:focus,
.field select:focus,
.field textarea:focus {
    border-color: #42b883;
}

.field textarea {
    resize: vertical;
}

.error {
    color: #c0392b;
    font-size: 14px;
    margin: 8px 0 12px 0;
}

.submit-btn {
    width: 100%;
    padding: 12px;
    font-size: 16px;
    background-color: #42b883;
    color: #fff;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.15s ease;
}

.submit-btn:hover {
    background-color: #369870;
}
</style>