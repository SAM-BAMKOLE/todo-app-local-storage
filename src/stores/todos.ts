import { computed, ref, watch } from 'vue'
import { defineStore } from 'pinia'

export interface todo {
    title: string
    completed: boolean
    time: Date | string
    id: string
}

export const useTodosStore = defineStore('todos', () => {
    const todos = ref()

    if (localStorage.getItem('myTodos')) {
        todos.value = JSON.parse(localStorage.getItem('myTodos')!)
    } else {
        todos.value = []
    }
    const addTodo = (newTodo: todo) => {
        // const todoToAdd = localItem ? [newTodo, ...JSON.parse(localItem)] : [newTodo]
        todos.value.push(newTodo)
    }

    const latestTodos = computed(() => {
        const returnedArray: Array<todo> =
            todos.value.length < 5 ? todos.value : todos.value.slice(-5)
        return returnedArray
    })

    const toggleCompleted = (id: string) => {
        const indexOfId = todos.value.findIndex((todo: todo) => todo.id === id)
        todos.value[indexOfId].completed = !todos.value[indexOfId].completed
    }

    const deleteTodo = (id: string) => {
        todos.value = todos.value.filter((todo: todo) => todo.id !== id)
    }
    const completedTodo = () => {
        const newTodos = todos.value.filter((todo: todo) => todo.completed === true)
        return newTodos
    }
    const notCompletedTodo = () => {
        const newTodos = todos.value.filter((todo: todo) => todo.completed === false)
        return newTodos
    }

    watch(
        [todos, todos.value],
        () => {
            localStorage.setItem('myTodos', JSON.stringify(todos.value))
        },
        { deep: true }
    )

    return {
        todos,
        addTodo,
        latestTodos,
        toggleCompleted,
        deleteTodo,
        completedTodo,
        notCompletedTodo
    }
})
