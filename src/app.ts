import { autoinject, PLATFORM } from 'aurelia-framework';
import { RouterConfiguration, Router } from 'aurelia-router';

import { AuthorizeStep } from './authorize-step';

import { Store, connectTo } from 'aurelia-store';

import { State } from './store/state';
import { setUser } from './store/actions';

import firebase from './services/firebase';

@autoinject()
@connectTo()
export class App {
  private router: Router;
  private state: State;

  constructor(private store: Store<State>) {
    firebase.auth().onAuthStateChanged(user => {
      this.store.dispatch(setUser, user);
    });
  }

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Aurelia Monopoly';
    config.options.pushState = true;
    config.options.root = '/';

    config.map([
      { name: 'home', route: [ '' ], moduleId: PLATFORM.moduleName('./components/home/home'), title: 'Home' },
      { name: 'game/:gameId', route: 'game', moduleId: PLATFORM.moduleName('./components/game/game'), title: 'Game', nav: false, auth: true }
    ]);

    config.mapUnknownRoutes(PLATFORM.moduleName('./components/not-found/not-found'));

    config.addPipelineStep('authorize', AuthorizeStep);

    this.router = router;
  }
}
