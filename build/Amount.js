"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AmountPlaceholder = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ui = require("@yosmy/ui");

var _excluded = ["send", "receive", "currency"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Amount = _react["default"].memo(function (_ref) {
  var send = _ref.send,
      receive = _ref.receive,
      currency = _ref.currency,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react["default"].createElement(_ui.Container, props, /*#__PURE__*/_react["default"].createElement(_ui.Text, null, "Env\xEDa ", send, " USD"), /*#__PURE__*/_react["default"].createElement(_ui.Text, {
    type: "secondary"
  }, "Recibe ", receive, " ", currency));
}, function () {
  return true;
});

Amount.propTypes = {
  send: _propTypes["default"].number.isRequired,
  receive: _propTypes["default"].number.isRequired,
  currency: _propTypes["default"].string.isRequired
};

var AmountPlaceholder = _react["default"].memo(function (_ref2) {
  var props = _extends({}, _ref2);

  return /*#__PURE__*/_react["default"].createElement(_ui.Container, _extends({
    flow: "column"
  }, props), /*#__PURE__*/_react["default"].createElement(_ui.LinePlaceholder, {
    width: 50
  }), /*#__PURE__*/_react["default"].createElement(_ui.LinePlaceholder, {
    width: 70,
    margin: {
      top: 0.5
    }
  }));
}, function () {
  return true;
});

exports.AmountPlaceholder = AmountPlaceholder;
var _default = Amount;
exports["default"] = _default;