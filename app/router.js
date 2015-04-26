import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.resource('posts', {path: '/posts'}, function() {
    this.route('index');
    this.route('post', {path: ':network/:id'});
  });

  this.resource('search', function () {
    this.route('new');
  });

  this.route('login', {path: '/'});
  this.resource('profiles', {path: '/:network/:id'}, function() {});
  this.resource('friends', function() {});
  this.route('about');
  this.route('security');
});
