<template>
    <div class="category-filter">
        <label for="category">Категория:</label>
        <select
            id="category"
            :value="modelValue"
            @change="$emit('update:modelValue', $event.target.value)"
        >
            <option value="all">Все категории</option>
            <option v-for="cat in categories" :key="cat" :value="cat">
                {{ cat }}
            </option>
        </select>
    </div>
</template>

<script setup>
defineProps({
    modelValue: { type: String, default: 'all' },
    categories: { type: Array, default: () => [] },
});

defineEmits(['update:modelValue']);
</script>

<style scoped>
.category-filter {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
}

.category-filter label {
    font-weight: 600;
    color: #2c3e50;
}

.category-filter select {
    padding: 8px 12px;
    font-size: 15px;
    border: 1px solid #c8cfd6;
    border-radius: 6px;
    background-color: #fff;
    cursor: pointer;
    outline: none;
}

.category-filter select:focus {
    border-color: #42b883;
}
</style>