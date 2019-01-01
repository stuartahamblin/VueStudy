Vue.component('outsourced-inst', {
  props: ['hobby'],
  template: '<ul> <li v-on:click="removeHobby"> {{ hobby }}</li></ul>',
  methods: {
    removeHobby() {
      this.$emit('hobbyremoved', this.hobby)
    }
  }
});

new Vue({
  el: "#app3",
  data: {
    userHobby: '',
    hobbies: ['swimming','biking','running'],
    oneHobbyDeleted: false
  },
  methods: {
    addHobby(){
      if(this.userHobby.trim() == ''){
        return
      }
      this.hobbies.push(this.userHobby);
    },
    removeHobby(hobby){
      var position = this.hobbies.indexOf(hobby);
      this.oneHobbyDeleted = true;
      this.hobbies.splice(position,1);
    }
  }
});
