import Route from '@ember/routing/route';
import { Promise as EmberPromise } from 'rsvp';

function wait(delay) {
    return new EmberPromise(function (resolve) {
        setTimeout(function () {
            resolve();
        }, delay);
    });
}

export default Route.extend({
    // model() {
	// 	return this.store.findAll('band');
    // },
    async model() {
        await wait(3000);
        return this.store.findAll('band');
        },
    actions: {
        didTransition() {
            document.title = 'Bands - Rock & Roll';
        }
    }
});