'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = cart;
var INITIAL_STATE = {
  wishlist: {},
  coupon: null
};

function cart() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];

  switch (action.type) {
    case 'ADD_CART':
      return _extends({}, state, {
        wishlist: action.payload
      });
    case 'CHOOSE_COUPON':
      return _extends({}, state, {
        coupon: action.payload
      });
    case 'ADD_PLAYLIST':
      return _extends({}, state, {
        audioContent: action.payload
      });
    default:
      return state;
  }
}