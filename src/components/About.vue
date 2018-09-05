<template>
    <div id="about">
        <p>{{name}}, you have {{totalItems}} things to do:</p>
        
        <template v-for="(item, index) in todoList">
            <template v-if="totalItems == 1">{{item.todo}}</template>
            <template v-else-if="index < totalItems - 1">{{item.todo}}, </template>
            <template v-else>{{item.todo}}</template>
        </template>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        data() {
            return {
                name: this.$route.params.name,
            }
        },
        computed: {
            ...mapGetters({
                todoList: 'todoList',
                totalItems: 'totalItems'
            })
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


