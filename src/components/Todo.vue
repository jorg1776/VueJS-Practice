<template>
    <div name="todo">
        <form @submit.prevent="addTodo">
            <input placeholder="Enter something you need to do" v-model="todo">
        </form>

        <ul>
            <li v-for="(data, index) in todoList" :key='index'>{{data.todo}}</li>
        </ul>
    </div>
</template>

<script>
    import { todoStore } from '../store/TodoStore.js';

    export default {
        data () {
            return {
                todo: '',
                todoList: todoStore.data.todoItems
            }
        },
        methods: {
            addTodo: function() {
                todoStore.addTodo({todo: this.todo});
                this.todo = '';
            }
        }
    }
</script>
