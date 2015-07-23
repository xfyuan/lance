import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'lance/tests/helpers/start-app';

var application;

module('Acceptance | friends/new', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /friends/new', function(assert) {
  visit('/friends/new');

  andThen(function() {
    assert.equal(currentPath(), 'friends.new');
  });
});

test('creating a new friend', function(assert) {
  visit('/');
  click('a[href="/friends/new"]');

  andThen(function() {
    assert.equal(currentPath(), 'friends.new');
  });

  fillIn('.first-name input' , 'Johnny');
  fillIn('.last-name input'  , 'Cash');
  fillIn('.email input'      , 'j@cash.com');
  fillIn('.twitter input'    , 'jcash');
  click('button[type="submit"]');

  andThen(function() {
    assert.equal(currentRouteName(), 'friends.show.index', 'Redirects to friends.show after create');
  });
});

test('clicking save without filling fields', function(assert) {
  visit('/friends/new');
  click('button[type="submit"]');

  andThen(function() {
    assert.equal(currentRouteName(), 'friends.new', 'Stays on new page');
    assert.equal(find('h6:contains(You have to fill all fields)').length, 1, 'Display error message');
  });
});
