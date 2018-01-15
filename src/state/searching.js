const SET_SEARCH_PHRASE = 'searching/SET_SEARCH_PHRASE';
const RESET = 'searching/RESET';

export const search = text => ({
  type: SET_SEARCH_PHRASE,
  text
});

export const reset = () => ({
  type: RESET
})

const initialState = {
  searchPhrase: ''
};

export default(state=initialState, action) => {
  switch (action.type){
    case SET_SEARCH_PHRASE:
      return {
        searchPhrase: action.text
      };
    case RESET:
      return initialState
    default:
      return state
  }
}

