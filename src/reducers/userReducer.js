export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SIGN_IN': 
      return action.user
    default:
      return state
  }
}