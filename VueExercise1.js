Vue.component('app-username', {
  props: ['username'],
  data: function(){
    return {
      username: 'Chris'
    }
  },
  template: '<p v-on:click="usernameClicked">{{username}}</p>',
  methods: {
    usernameClicked(){
      this.$emit('userclicked', this.username);                 // userclicked must be lowercase

    }
  }
});

new Vue({
  el: '#app',
  data: {
    name: 'Max',
    elements: []
  },
  methods: {
    changeName: function() {
        this.name = 'Anna'
    },
    addElement: function() {
      this.elements.push(this.elements.length+1)
    },
    getColor: function(number) {
      return number % 2 == 0 ? 'green': 'red';
    },
    userWasClicked(name){
      alert(name);
    }
  }
});

new Vue({
   el: '#app2',
     data: {
      message: 'Hello there'
  }
});

new Vue({
   el: '.username',
    data: {
     username: 'Max'
    }
});
