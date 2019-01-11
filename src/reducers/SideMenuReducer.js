const SideMenuReducer = (state={}, action) => {
  switch (action.type) {
    case "CHANGE_SCROLL":{
      let newState = {...state, scrollTerm: action.payload};
      newState.rightComponent = "main"
      return newState;
    }

    case "CHANGE_RIGHT_COMPONENT":{
      let newState = {...state};
      newState.rightComponent = action.payload
      return newState;
    }

    default:
      return state;
  }
}

export default SideMenuReducer
