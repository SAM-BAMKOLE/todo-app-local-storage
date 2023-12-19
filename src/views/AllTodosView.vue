<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue'
import TodoList from '@/components/TodoList.vue'
import { useTodosStore } from '@/stores/todos'
const todos = useTodosStore()
</script>
<template>
    <HeaderComponent header="All Todos" />
    <TodoList :current-show="todos.todos" />
</template>
