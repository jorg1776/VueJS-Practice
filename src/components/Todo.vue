<template>
    <div id="todo">
        <form @submit.prevent="addTodo">
            <input placeholder="Enter something you need to do" v-model="todo">
        </form>
        <div id="table">
            <ul>
                <li v-for="(data, index) in todoList" :key='index'>
                    <span>{{data.todo}}</span>
                    <i class="fa fa-minus-circle" @click="remove(index)"></i>
                </li>   
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                todo: ''
            }
        },
        computed: {
            todoList() {
                return this.$store.getters.todoList;
            }
        },
        methods: {
            addTodo() {
                this.$store.commit('addTodo', {todo: this.todo});
                this.todo = '';
            },
            remove(index){
                this.$store.commit('removeTodo', index);
            }
        }
    }
</script>

<style scoped>
    @import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"; 

    #table {
        margin-top: 5px;
    }

    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        text-align: left;
    }

    ul li {
        border: 1px solid black;
        border-left: 5px solid rgb(4, 68, 112);
        background-color:rgb(227, 240, 249);
        padding: 20px; 
        margin-top: 10px;
        font-size: 1.2em;
    }
    
    input {
        width: 100%;
        height: 2em;
        text-align: center;
        font-size: 1em;
        background-color: rgb(23, 38, 26);
        color: rgb(219, 219, 219);
    }

    i {
        float: right;
    }

    i:hover {
        cursor: pointer;
    }

</style>
