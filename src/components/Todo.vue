<template>
    <div id="todo">
        <form @submit.prevent="addTodo">
            <input placeholder="Enter something you need to do" v-model="todo">
        </form>
        <div id="table">
            <ul>
                <li v-for="(data, index) in todoList" :key='index'><span>{{data.todo}}</span></li>
            </ul>
        </div>
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

<style scoped>
    #todo {
        background: yellow;
    }
    ul {
        list-style-position: inside;
    }
</style>
