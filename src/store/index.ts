import { Container } from 'aurelia-dependency-injection';
import { Store } from 'aurelia-store';

const store = Container.instance.get(Store);

export default store;
