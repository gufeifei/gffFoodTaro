const INITIAL_STATE = {
  wishlist: {},
  coupon: null,
}

export default function cart(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_CART':
      return {
        ...state,
        wishlist: action.payload,
      }
    case 'CHOOSE_COUPON':
      return {
        ...state,
        coupon: action.payload,
      }
    case 'ADD_PLAYLIST':
      return {
        ...state,
        audioContent: action.payload,
      }
    default:
      return state
  }
}
