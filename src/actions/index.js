export const selectTerm = (term) => {
  return {
    type:"CHANGE_SCROLL",
    payload:term
  }
}

export const selectComponent = (name) => {
  return {
    type: "CHANGE_RIGHT_COMPONENT",
    payload: name
  }
}
