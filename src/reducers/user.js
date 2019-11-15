const INITIAL_STATE = {
  userInfo: null,
}

export default function user(state = INITIAL_STATE, action) {
  const { type, payload } = action
  switch (type) {
    case 'SET_USER':
      return {
        ...state,
        userInfo: payload,
      }
    case 'SET_PLATFORM':
      return {
        ...state,
        platform: payload,
      }
    case 'SET_PAGE':
      return {
        ...state,
        storedPage: payload,
      }
    case 'REGISTER_USER':
      return {
        ...state,
        registerInfo: payload,
      }
    case 'SET_VERIFICATION_STATUS':
      return {
        ...state,
        isVerifying: payload,
      }
    default:
      return state
  }
}
