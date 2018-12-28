new Vue({
  el: '#app',
  data: {
    todos: [],
    userInput: ''
  },
  methods: {
    addTodo: function(){
      if(this.userInput.trim() == ''){
        return;
      }
      var newTodo = {
        id: _.uniqueId(),
        value: this.userInput
      };
      this.todos.push(newTodo);
      console.log(this.todos);
    }
  }
});

