export interface State {
  user: any;
  players: any[];
  game: any;
}

export const initialState: State = {
  user: {},
  players: [],
  game: {
    isRolling: false
  }
}
