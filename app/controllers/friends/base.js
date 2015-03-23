import Ember from 'ember';

export default Ember.Controller.extend({

  isValid:Ember.computed(
    'model.email','model.firstName','model.lastName', 'model.twitter', function(){
      return !Ember.isEmpty(this.get('model.email')) &&
        !Ember.isEmpty(this.get('model.firstName')) &&
        !Ember.isEmpty(this.get('model.lastName')) &&
        !Ember.isEmpty(this.get('model.twitter'));
    }
  ),

  actions:{
    save: function(){
      console.log('+- save action in friends new controller');
      if(this.get('isValid')){
        var self = this;
        this.get('model').save().then(function(friend){
          self.transitionToRoute('friends.show',friend);
        });
      }else{
        this.set('errorMessage', 'You have to fill all the fields');
      }
      return false;
    },
    cancel: function(){
      return true;
    }
  }
});
