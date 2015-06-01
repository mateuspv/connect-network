import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
	model() {
    let friends = this.store.find('friend');
    let groups = this.store.findAll('group-facebook');
		return Ember.RSVP.all([friends, groups])
      .then((response) => {
        let [friends, groups] = response;
        return {friends,groups};
      })
	}
});
