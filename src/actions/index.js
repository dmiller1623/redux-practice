export const signInUser = (user) => ({
  type: 'SIGN_IN', 
  user
})

export const signOutUser = () => ({
  type: 'SIGN_OUT'
})