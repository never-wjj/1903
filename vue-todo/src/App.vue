<template>
  <div>
    <h1>Todo Mvc</h1>
<<<<<<< HEAD
    <TodoForm @addTodo="addTodo"/>
    <Todo @completed="completed" :todos="todos" @deleteComment="deleteComment"/>
=======
    <TodoForm @addTodo="addTodo" />
    <Todo @completed="completed" :todos="todos" />
>>>>>>> upstream/master
  </div>
</template>

<script>
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
export default {
  name: "app",
  components: {
    Todo,
    TodoForm
  },
  data() {
    return {
      todos: [
        {
          id: "1213",
          text: "qweqwewqe",
          isCompleted: true
        }
      ]
    };
  },
  methods: {
    addTodo(text) {
      const newTodo = {
        id: new Date().getTime(),
        text: text,
        isCompleted: false
      };
      this.todos.push(newTodo);
    },
    deleteComment(id) {
      this.comments = this.comments.filter(item => item.id != id);
    },
    completed(todo) {
      // 更改数据内 某一个元素的 isCompleted 属性的属性值
      // 已知某个对象下 id 的属性值   和   一个 数组
      // find
      // const todo = this.todo.find(item=> item.id === id)
      todo.isCompleted = !todo.isCompleted;
    }
  }
};
</script>

<style>
</style>
