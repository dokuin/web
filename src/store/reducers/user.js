const initialState = {
  isLogin: false
}

function user(state = initialState, action) {
  switch (action.type) {
    case 'SET_LOGIN_STATE':
      return { ...state, isLogin: true }

    case 'SET_LOGOUT_STATE':
      return { ...state, isLogin: false }

    default:
      return state
  }
}

export default user
