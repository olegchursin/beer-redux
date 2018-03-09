const initialState = {
  beers: []
}

const root = (state = initialState, action) => {
  // console.log("adding god")
  switch (action.type){
    case 'ADD_BEER':
      return {
        beers: [...state.beers, action.payload]
      }
    default:
      return state
  }
}

export { root }
