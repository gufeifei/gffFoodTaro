'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = user;
var INITIAL_STATE = {
  userInfo: null
};

function user() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];
  var type = action.type,
      payload = action.payload;

  switch (type) {
    case 'SET_USER':
      return _extends({}, state, {
        userInfo: payload
      });
    case 'SET_PLATFORM':
      return _extends({}, state, {
        platform: payload
      });
    case 'SET_PAGE':
      return _extends({}, state, {
        storedPage: payload
      });
    case 'REGISTER_USER':
      return _extends({}, state, {
        registerInfo: payload
      });
    case 'SET_VERIFICATION_STATUS':
      return _extends({}, state, {
        isVerifying: payload
      });
    default:
      return state;
  }
}