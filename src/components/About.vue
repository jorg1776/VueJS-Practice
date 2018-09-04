<template>
    <div id="about">
        <p>{{name}}, you have {{todoList.length}} things to do:</p>
        
        <template v-for="(item, index) in todoList">
            <template v-if="todoList.length == 1">{{item.todo}}</template>
            <template v-else-if="index < todoList.length - 1">{{item.todo}}, </template>
            <template v-else>{{item.todo}}</template>
        </template>
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

<style scoped>
    #about {
        font-size: 1.5em;
    }

    p {
        padding: 5px;
        border-bottom: 2px solid black;
    }
</style>


