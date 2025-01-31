/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
  - `npm run test-todo-list`
*/

class Todo {
  constructor(todos) {
    this.todos=[]
  }

  add(todo) {
    this.todos.push(todo)
  }

  remove(ind) {
    if(ind<0 || ind>this.todos.length)
      return
    this.todos.splice(ind,1)
  }

  update(ind, updatedTodo) {
    if(ind<0 || ind>=this.todos.length)
      return null
    this.todos[ind]=updatedTodo
  }

  getAll() {
    return this.todos
  }

  get(ind) {
    if(ind<0 || ind>=this.todos.length)
      return null
    return this.todos[ind]
  }

  clear() {
    this.todos=[]
  }

}

module.exports = Todo;
