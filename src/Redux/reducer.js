export let data = {
  numberOfBooks: 15,
  numberOfPens: 20,
};

export function reducer(state=data, action) {
  switch (action.type) {
    case "DECRESE_BOOKS": {
        return {
            ...state,
            numberOfBooks:state.numberOfBooks-1
        }
    }
    default:
      return state;
  }
}
