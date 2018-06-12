import { State } from "./state";
import store from '.';

export function setUser(state: State, user) {
  return { ...state, ...{ user } }
}

export function removeUser(state: State) {
  return { ...state, ...{ user: null } };
}

export function updatePlayerPosition(state: State, dice) {
  const newState = { ...state };

  return newState;
}

export function rollDice(state: State) {
  const newState = { ...state };

  const dice = Math.floor(Math.random() * (12 - 2) + 2);

  return newState;
}

store.registerAction('setUser', setUser);
store.registerAction('removeUser', removeUser);
