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

  this.resource('profiles', {path: 'profiles/:network/:id'}, function() {
  });

  this.route('login', {path: '/'});
  this.resource('friends', function() {});
  this.route('about');
  this.route('security');
});
