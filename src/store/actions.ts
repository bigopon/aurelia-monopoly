import { State } from "./state";
import store from '.';

export function setUser(state: State, user) {
  return { ...state, ...{ user } }
}

export function removeUser(state: State) {
  return { ...state, ...{ user: null } };
}

store.registerAction('setUser', setUser);
store.registerAction('removeUser', removeUser);
