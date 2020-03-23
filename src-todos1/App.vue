<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader :addTodo="addTodo"/>
      <TodoList :todos="todos" :deleteTodo="deleteTodo"/>
      <TodoFooter :todos="todos" :deleteCompleteTodos="deleteCompleteTodos" :selectAllTodos="selectAllTodos"/>
    </div>
  </div>
</template>
<script>
import TodoHeader from  './components/TodoHeader.vue'
import TodoList from  './components/TodoList.vue'
import TodoFooter from  './components/TodoFooter.vue'
export default{
  data () {
    /*return {
      todos: [
        {title:'吃饭',complete:false},
        {title:'睡觉',complete:true},
        {title:'玩',complete:false}
      ]
    }*/
    return {
      todos: JSON.parse(window.localStorage.getItem('todos_key') || '[]')
    }
  },
  components: {
    TodoHeader,TodoList,TodoFooter
  },
  methods: {
    deleteTodo (index) {
      this.todos.splice(index,1)
    },
    // 删除所有选中的todo
    deleteCompleteTodos () {
      //过滤留下为false
      this.todos=this.todos.filter(todo => !todo.complete)

    },
    // 全选或者全不选
    selectAllTodos (check) {
      this.todos.forEach(todo => todo.complete=check)
    },
    addTodo (todo) {
      this.todos.unshift(todo)
    }
  },
  watch: {//深度监视
    todos: {
      deep: true,// true 深度监视
      handler: function(value){
        // 将todos最新的值,这个值是json数据，保存到localstorage里面
        window.localStorage.setItem("todos_key",JSON.stringify(value))
      }
    }

  }

}
</script>

<style>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
