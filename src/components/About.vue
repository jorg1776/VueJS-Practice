<template>
    <div name="about">
        <p>{{name}}'s Todo List: </p>
        <ul>
            <li v-for="(data, index) in todoList" :key='index'>{{data.todo}}</li>
        </ul>
    </div>
</template>

<script>
    import { todoStore } from '../store/TodoStore.js';

    export default {
        data() {
            return {
                name: this.$route.params.name,
                todoList: todoStore.data.todoItems
            }
        }
    }
</script>
