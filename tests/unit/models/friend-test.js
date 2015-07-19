import { moduleForModel, test } from 'ember-qunit';
import Ember from 'ember';

moduleForModel('friend', 'Unit | Model | friend', {
  // Specify the other units that are required for this test.
  needs: ['model:article', 'adapter:application']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(model);
});

test('fullName joins first and last name', function(assert) {
  var model = this.subject({ firstName: 'Syd', lastName: 'Barrett' });

  assert.equal(model.get('fullName'), 'Syd Barrett');

  Ember.run(function() {
    model.set('firstName', 'Geddy');
  });

  assert.equal(model.get('fullName'), 'Geddy Barrett', 'Updates fullName');
});

// test('articles relationship', function(assert) {
//   var klass = this.subject({}).constructor;
//   var relationship = Ember.get(klass, 'relationshipByName').get('articles');
//
//   assert.equal(relationship.key, 'articles');
//   assert.equal(relationship.kind, 'hasMany');
// });
