<script setup lang="ts">
import { useTodosStore } from '@/stores/todos'
const todos = useTodosStore()
import type { todo } from '@/stores/todos'
defineProps({
    currentShow: {
        type: Array<todo>,
        required: true
    },
    headerTitle: {
        type: String,
        required: false
    },
    noContent: {
        type: String,
        required: false
    }
})
</script>
<template>
    <main class="w-full px-5 py-10">
        <h2 class="font-semibold text-center text-3xl md:text-4xl mb-5">{{ headerTitle }}</h2>
        <p v-if="currentShow.length === 0" class="text-center text-black/70 text-md font-medium">
            {{ noContent }}
        </p>
        <ul class="w-full max-w-4xl space-y-3 mx-auto">
            <li
                v-for="todo in currentShow.slice().reverse()"
                :key="todo.id"
                class="w-full bg-accent rounded-md px-3 py-3 flex justify-between items-center border-l-4"
                :class="{ ' border-red-600': !todo.completed, 'border-green-600': todo.completed }"
            >
                <div class="flex flex-col md:items-center md:flex-row gap-1 md:gap-3">
                    <p class="font-medium" :class="{ 'line-through': todo.completed }">
                        {{ todo.title }}
                    </p>
                    <span class="text-sm">{{
                        new Date(todo.time).toLocaleString('en-US', {
                            year: 'numeric',
                            month: 'numeric',
                            day: 'numeric',
                            hour: 'numeric',
                            minute: 'numeric'
                        })
                    }}</span>
                </div>
                <div class="flex flex-col md:items-center md:flex-row gap-1 md:gap-3">
                    <button
                        class="font-bold rounded-full w-6 md:w-8 aspect-square text-sm text-center align-center bg-sky-500"
                        @click="todos.toggleCompleted(todo.id)"
                    >
                        &check;
                    </button>
                    <button
                        class="font-bold rounded-full w-6 md:w-8 aspect-square text-sm text-center align-center bg-red-500"
                        @click="todos.deleteTodo(todo.id)"
                    >
                        X
                    </button>
                </div>
            </li>
        </ul>
    </main>
</template>
