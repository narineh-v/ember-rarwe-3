import Route from '@ember/routing/route';
//import { Promise as EmberPromise } from 'rsvp';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

// function wait(delay) {
//     return new EmberPromise(function (resolve) {
//         setTimeout(function () {
//             resolve();
//         }, delay);
//     });
// }

export default Route.extend(AuthenticatedRouteMixin, {
    model() {
        return this.store.findAll('band');
        },
    actions: {
        didTransition() {
            document.title = 'Bands - Rock & Roll';
        }
    }
});