"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DetailIndex = (_temp2 = _class = function (_BaseComponent) {
  _inherits(DetailIndex, _BaseComponent);

  function DetailIndex() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, DetailIndex);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DetailIndex.__proto__ || Object.getPrototypeOf(DetailIndex)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["loopArray2", "resuleArray", "title", "steps", "ingredients", "burden"], _this.config = {
      navigationBarTitleText: ''
    }, _this.customComponents = ["StepView"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DetailIndex, [{
    key: "_constructor",
    value: function _constructor() {
      _get(DetailIndex.prototype.__proto__ || Object.getPrototypeOf(DetailIndex.prototype), "_constructor", this).apply(this, arguments);
      /**
       * 指定config的类型声明为: Taro.Config
       *
       * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
       * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
       * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
       */

      this.state = {
        title: '',
        steps: [],
        ingredients: '',
        burden: ''
      };
      this.$$refs = new _index2.default.RefsArray();
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {}
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {
      var _$router$params = this.$router.params,
          title = _$router$params.title,
          steps = _$router$params.steps,
          ingredients = _$router$params.ingredients,
          burden = _$router$params.burden;

      this.setState({
        title: title,
        steps: JSON.parse(steps),
        ingredients: ingredients,
        burden: burden
      });
      console.log(this.state.ingredients, '======hah');
      _index2.default.setNavigationBarTitle({
        title: title
      });
    }
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {}
  }, {
    key: "onShareAppMessage",
    value: function onShareAppMessage(res) {
      if (res.from === 'button') {
        // 来自页面内转发按钮
        console.log(res.target);
      }
      return {
        title: this.state.title + '的做法',
        path: "pages/detailIndex/detailIndex?title=" + this.state.title + "&steps=" + JSON.stringify(this.state.steps)
      };
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var resuleArray = this.__state.steps;
      var loopArray2 = resuleArray.map(function (index, _anonIdx) {
        index = {
          $original: (0, _index.internal_get_original)(index)
        };

        var _genCompid = (0, _index.genCompid)(__prefix + "czzzzzzzzz" + _anonIdx, true),
            _genCompid2 = _slicedToArray(_genCompid, 2),
            $prevCompid__2 = _genCompid2[0],
            $compid__2 = _genCompid2[1];

        _index.propsManager.set({
          "img": index.$original.img,
          "step": index.$original.step
        }, $compid__2, $prevCompid__2);
        return {
          $compid__2: $compid__2,
          $original: index.$original
        };
      });
      Object.assign(this.__state, {
        loopArray2: loopArray2,
        resuleArray: resuleArray
      });
      return this.__state;
    }
  }]);

  return DetailIndex;
}(_index.Component), _class.$$events = [], _class.$$componentPath = "pages/detailIndex/detailIndex", _temp2);
exports.default = DetailIndex;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(DetailIndex, true));