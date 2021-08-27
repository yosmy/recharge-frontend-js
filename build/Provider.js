"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProviderPlaceholder = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ui = require("@yosmy/ui");

var _excluded = ["name", "logo"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Provider = _react["default"].memo(function (_ref) {
  var name = _ref.name,
      logo = _ref.logo,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react["default"].createElement(_ui.Container, _extends({
    flow: "row",
    align: {
      main: "flex-start",
      cross: "center"
    }
  }, props), /*#__PURE__*/_react["default"].createElement(_ui.Image, {
    width: logo.width,
    source: logo.data
  }), /*#__PURE__*/_react["default"].createElement(_ui.Text, {
    margin: {
      left: 1
    }
  }, name));
}, function () {
  return true;
});

Provider.propTypes = {
  name: _propTypes["default"].string.isRequired,
  logo: _propTypes["default"].shape({
    data: _propTypes["default"].string.isRequired,
    width: _propTypes["default"].number.isRequired,
    height: _propTypes["default"].number.isRequired
  }).isRequired
};

var ProviderPlaceholder = _react["default"].memo(function (_ref2) {
  var props = _extends({}, _ref2);

  return /*#__PURE__*/_react["default"].createElement(_ui.Container, _extends({
    flow: "row",
    align: {
      main: "flex-start",
      cross: "center"
    }
  }, props), /*#__PURE__*/_react["default"].createElement(_ui.LinePlaceholder, {
    width: 10
  }), /*#__PURE__*/_react["default"].createElement(_ui.LinePlaceholder, {
    width: 50,
    margin: {
      left: 1
    }
  }));
}, function () {
  return true;
});

exports.ProviderPlaceholder = ProviderPlaceholder;
var _default = Provider;
exports["default"] = _default;