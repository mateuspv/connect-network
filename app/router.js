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
    this.route('result');
  });

  this.route('profiles', {path: 'profiles/:network/:id'}, function() {
  });

  this.route('friends');
  this.route('group', {path: 'group/:id'});

  this.route('login', {path: '/'});
  this.route('about');
  this.route('security');
});
