export const todoStore = {
    data: {
        todoItems: [
            {"todo": "Finish this Project"}
        ]
    },
    addTodo(newTodo) {
        this.data.todoItems.push(newTodo);
    }
}