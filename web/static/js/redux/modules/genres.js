import genres from '../../data/genres.json';

export const LOAD = 'sonora/genres/LOAD';

export const initialState = {
  data: []
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      state.data = action.genres;
      return state;
    default:
      return state;
  }
}

export function load(){
  return dispatch => {
    dispatch({
      type: LOAD,
      genres: genres
    });
  };
}