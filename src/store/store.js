import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    todoItems: [
      { todo: "Finish this Project" }
    ]
  },
  getters:{
    todoList(state) {
      return state.todoItems;
    },
    totalItems(state) {
      return state.todoItems.length;
    }
  },
  mutations: {
    addTodo(state, newTodo) {
      state.todoItems.push(newTodo);
    },
    removeTodo(state, index) {
      state.todoItems.splice(index, 1);
    }
  }
})