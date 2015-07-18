import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('article', {
      friend: this.modelFor('friends/show')
    });
  },
  deactivate: function() {
    var model = this.modelFor('articles/new');
    if (model.get('isNew')) {
      model.destroyRecord();
    }
  },
  actions: {
    save: function() {
      var self = this;
      var model = this.modelFor('articles/new');

      model.save().then(function() {
        self.transitionTo('articles');
      });
    },
    cancel: function() {
      this.transitionTo('articles');
    }
  }
});
