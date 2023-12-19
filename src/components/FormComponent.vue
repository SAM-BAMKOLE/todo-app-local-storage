<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { todo } from '@/stores/todos'
import { useTodosStore } from '@/stores/todos'
const todos = useTodosStore()
import { uid } from 'uid'
// interface formType {
//     title: string
//     time: Date
// }

const uniqueId = ref()
function generateUniqueId(): void {
    uniqueId.value = uid()
}
const currentDate = new Date()
currentDate.setHours(new Date().getHours() + 1)
const formValue = reactive({
    title: '',
    time: currentDate.toISOString().slice(0, 16)
}) as Omit<todo, 'completed' | 'id'>
function submitHandler() {
    generateUniqueId()

    todos.addTodo({ ...formValue, completed: false, id: uniqueId.value })
    // console.log({ ...formValue, completed: false })

    formValue.title = ''
}
</script>
<template>
    <form v-on:submit.prevent="submitHandler" class="w-full max-w-3xl mx-auto my-10">
        <div class="flex flex-col md:flex-row gap-2">
            <input
                type="text"
                minlength="3"
                maxlength="35"
                name="title"
                v-model="formValue.title"
                placeholder="Add new todo"
                class="input input-bordered input-secondary w-full"
            />
            <!-- <input
                type="date"
                name="date"
                class="input input-bordered input-secondary"
                v-model="formValue.date"
            />
            <input
                type="time"
                name="time"
                class="input input-bordered input-secondary"
                v-model="formValue.time"
            /> -->
            <input
                type="datetime-local"
                name="time"
                class="input input-bordered input-secondary w-full"
                v-model="formValue.time"
            />
        </div>
        <button type="submit" class="btn btn-secondary w-full mt-2">Add Todo</button>
    </form>
</template>
