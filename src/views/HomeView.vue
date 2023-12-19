<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue'
import FormComponent from '@/components/FormComponent.vue'
import TodoList from '@/components/TodoList.vue'
import { useTodosStore } from '@/stores/todos'
const todos = useTodosStore()
</script>

<template>
    <HeaderComponent header="Todo Tracker">
        <FormComponent />
    </HeaderComponent>
    <TodoList
        :header-title="'Latest Todos (' + todos.latestTodos.length.toString() + ')'"
        :current-show="todos.latestTodos"
        no-content="You do not have any schedule yet."
    />
</template>
