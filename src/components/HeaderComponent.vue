<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'
import { useTodosStore } from '@/stores/todos'
const todos = useTodosStore()
const currentRoute = useRoute()

defineProps({
    header: {
        type: String,
        required: true
    }
})
</script>
<template>
    <header>
        <div
            class="w-full bg-gradient-to-tr from-primary to-sky-500 px-5 md:px-10 py-10 relative overflow-hidden flex items-center justify-center flex-col"
        >
            <h1
                class="text-center font-bold md:font-extrabold text-white capitalize text-5xl md:text-6xl"
            >
                {{ header }}
            </h1>
            <ul class="gap-3 mt-7 flex flex-col md:flex-row">
                <li>
                    <RouterLink to="/completed-todo" class="btn btn-secondary w-full"
                        >Completed Todos ({{ todos.completedTodo().length }})</RouterLink
                    >
                </li>
                <li>
                    <RouterLink
                        :to="{ name: 'uncompletedTodo' }"
                        class="btn btn-outline btn-secondary w-full"
                        >Uncompleted Todos ({{ todos.notCompletedTodo().length }})</RouterLink
                    >
                </li>
                <li>
                    <RouterLink to="/all-todos" class="btn btn-secondary w-full"
                        >All Todos ({{ todos.todos.length }})</RouterLink
                    >
                </li>
            </ul>
            <slot></slot>
            <div class="flex justify-center mt-10" v-if="currentRoute.name !== 'home'">
                <RouterLink class="btn btn-accent capitalize" to="/">Add New Todo</RouterLink>
            </div>
        </div>
    </header>
</template>
