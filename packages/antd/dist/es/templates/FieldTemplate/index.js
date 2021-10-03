function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

import React from 'react';
import Form from 'antd/lib/form';
import WrapIfAdditional from './WrapIfAdditional';
var VERTICAL_LABEL_COL = {
  span: 24
};
var VERTICAL_WRAPPER_COL = {
  span: 24
};

var FieldTemplate = function FieldTemplate(_ref) {
  var children = _ref.children,
      classNames = _ref.classNames,
      description = _ref.description,
      disabled = _ref.disabled,
      displayLabel = _ref.displayLabel,
      formContext = _ref.formContext,
      help = _ref.help,
      hidden = _ref.hidden,
      id = _ref.id,
      label = _ref.label,
      onDropPropertyClick = _ref.onDropPropertyClick,
      onKeyChange = _ref.onKeyChange,
      rawDescription = _ref.rawDescription,
      rawErrors = _ref.rawErrors,
      rawHelp = _ref.rawHelp,
      readonly = _ref.readonly,
      required = _ref.required,
      schema = _ref.schema;
  var colon = formContext.colon,
      _formContext$labelCol = formContext.labelCol,
      labelCol = _formContext$labelCol === void 0 ? VERTICAL_LABEL_COL : _formContext$labelCol,
      _formContext$wrapperC = formContext.wrapperCol,
      wrapperCol = _formContext$wrapperC === void 0 ? VERTICAL_WRAPPER_COL : _formContext$wrapperC,
      wrapperStyle = formContext.wrapperStyle;

  if (hidden) {
    return /*#__PURE__*/React.createElement("div", {
      className: "field-hidden"
    }, children);
  }

  var renderFieldErrors = function renderFieldErrors() {
    return _toConsumableArray(new Set(rawErrors)).map(function (error) {
      return /*#__PURE__*/React.createElement("div", {
        key: "field-".concat(id, "-error-").concat(error)
      }, error);
    });
  };

  return /*#__PURE__*/React.createElement(WrapIfAdditional, {
    classNames: classNames,
    disabled: disabled,
    formContext: formContext,
    id: id,
    label: label,
    onDropPropertyClick: onDropPropertyClick,
    onKeyChange: onKeyChange,
    readonly: readonly,
    required: required,
    schema: schema
  }, id === 'root' ? children : /*#__PURE__*/React.createElement(Form.Item, {
    colon: colon // extra={!!rawDescription && description}
    ,
    hasFeedback: schema.type !== 'array' && schema.type !== 'object',
    help: !!rawHelp && help || !!(rawErrors === null || rawErrors === void 0 ? void 0 : rawErrors.length) && renderFieldErrors(),
    htmlFor: id,
    label: displayLabel && label,
    labelCol: labelCol,
    required: required,
    style: wrapperStyle,
    validateStatus: (rawErrors === null || rawErrors === void 0 ? void 0 : rawErrors.length) ? 'error' : undefined,
    wrapperCol: wrapperCol
  }, children));
};

export default FieldTemplate;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90ZW1wbGF0ZXMvRmllbGRUZW1wbGF0ZS9pbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkZvcm0iLCJXcmFwSWZBZGRpdGlvbmFsIiwiVkVSVElDQUxfTEFCRUxfQ09MIiwic3BhbiIsIlZFUlRJQ0FMX1dSQVBQRVJfQ09MIiwiRmllbGRUZW1wbGF0ZSIsImNoaWxkcmVuIiwiY2xhc3NOYW1lcyIsImRlc2NyaXB0aW9uIiwiZGlzYWJsZWQiLCJkaXNwbGF5TGFiZWwiLCJmb3JtQ29udGV4dCIsImhlbHAiLCJoaWRkZW4iLCJpZCIsImxhYmVsIiwib25Ecm9wUHJvcGVydHlDbGljayIsIm9uS2V5Q2hhbmdlIiwicmF3RGVzY3JpcHRpb24iLCJyYXdFcnJvcnMiLCJyYXdIZWxwIiwicmVhZG9ubHkiLCJyZXF1aXJlZCIsInNjaGVtYSIsImNvbG9uIiwibGFiZWxDb2wiLCJ3cmFwcGVyQ29sIiwid3JhcHBlclN0eWxlIiwicmVuZGVyRmllbGRFcnJvcnMiLCJTZXQiLCJtYXAiLCJlcnJvciIsInR5cGUiLCJsZW5ndGgiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFFQSxPQUFPQyxJQUFQLE1BQWlCLGVBQWpCO0FBRUEsT0FBT0MsZ0JBQVAsTUFBNkIsb0JBQTdCO0FBRUEsSUFBTUMsa0JBQWtCLEdBQUc7QUFBRUMsRUFBQUEsSUFBSSxFQUFFO0FBQVIsQ0FBM0I7QUFDQSxJQUFNQyxvQkFBb0IsR0FBRztBQUFFRCxFQUFBQSxJQUFJLEVBQUU7QUFBUixDQUE3Qjs7QUFFQSxJQUFNRSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLE9Bc0JoQjtBQUFBLE1BckJKQyxRQXFCSSxRQXJCSkEsUUFxQkk7QUFBQSxNQXBCSkMsVUFvQkksUUFwQkpBLFVBb0JJO0FBQUEsTUFuQkpDLFdBbUJJLFFBbkJKQSxXQW1CSTtBQUFBLE1BbEJKQyxRQWtCSSxRQWxCSkEsUUFr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InNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgRm9ybSBmcm9tICdhbnRkL2xpYi9mb3JtJztcclxuXHJcbmltcG9ydCBXcmFwSWZBZGRpdGlvbmFsIGZyb20gJy4vV3JhcElmQWRkaXRpb25hbCc7XHJcblxyXG5jb25zdCBWRVJUSUNBTF9MQUJFTF9DT0wgPSB7IHNwYW46IDI0IH07XHJcbmNvbnN0IFZFUlRJQ0FMX1dSQVBQRVJfQ09MID0geyBzcGFuOiAyNCB9O1xyXG5cclxuY29uc3QgRmllbGRUZW1wbGF0ZSA9ICh7XHJcbiAgY2hpbGRyZW4sXHJcbiAgY2xhc3NOYW1lcyxcclxuICBkZXNjcmlwdGlvbixcclxuICBkaXNhYmxlZCxcclxuICBkaXNwbGF5TGFiZWwsXHJcbiAgLy8gZXJyb3JzLFxyXG4gIC8vIGZpZWxkcyxcclxuICBmb3JtQ29udGV4dCxcclxuICBoZWxwLFxyXG4gIGhpZGRlbixcclxuICBpZCxcclxuICBsYWJlbCxcclxuICBvbkRyb3BQcm9wZXJ0eUNsaWNrLFxyXG4gIG9uS2V5Q2hhbmdlLFxyXG4gIHJhd0Rlc2NyaXB0aW9uLFxyXG4gIHJhd0Vycm9ycyxcclxuICByYXdIZWxwLFxyXG4gIHJlYWRvbmx5LFxyXG4gIHJlcXVpcmVkLFxyXG4gIHNjaGVtYSxcclxuICAvLyB1aVNjaGVtYSxcclxufSkgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIGNvbG9uLFxyXG4gICAgbGFiZWxDb2wgPSBWRVJUSUNBTF9MQUJFTF9DT0wsXHJcbiAgICB3cmFwcGVyQ29sID0gVkVSVElDQUxfV1JBUFBFUl9DT0wsXHJcbiAgICB3cmFwcGVyU3R5bGUsXHJcbiAgfSA9IGZvcm1Db250ZXh0O1xyXG5cclxuICBpZiAoaGlkZGVuKSB7XHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJmaWVsZC1oaWRkZW5cIj57Y2hpbGRyZW59PC9kaXY+O1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVuZGVyRmllbGRFcnJvcnMgPSAoKSA9PlxyXG4gICAgWy4uLm5ldyBTZXQocmF3RXJyb3JzKV0ubWFwKChlcnJvcikgPT4gKFxyXG4gICAgICA8ZGl2IGtleT17YGZpZWxkLSR7aWR9LWVycm9yLSR7ZXJyb3J9YH0+e2Vycm9yfTwvZGl2PlxyXG4gICAgKSk7IFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFdyYXBJZkFkZGl0aW9uYWxcclxuICAgICAgY2xhc3NOYW1lcz17Y2xhc3NOYW1lc31cclxuICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxyXG4gICAgICBmb3JtQ29udGV4dD17Zm9ybUNvbnRleHR9XHJcbiAgICAgIGlkPXtpZH1cclxuICAgICAgbGFiZWw9e2xhYmVsfVxyXG4gICAgICBvbkRyb3BQcm9wZXJ0eUNsaWNrPXtvbkRyb3BQcm9wZXJ0eUNsaWNrfVxyXG4gICAgICBvbktleUNoYW5nZT17b25LZXlDaGFuZ2V9XHJcbiAgICAgIHJlYWRvbmx5PXtyZWFkb25seX1cclxuICAgICAgcmVxdWlyZWQ9e3JlcXVpcmVkfVxyXG4gICAgICBzY2hlbWE9e3NjaGVtYX1cclxuICAgID5cclxuICAgICAge2lkID09PSAncm9vdCcgPyAoXHJcbiAgICAgICAgY2hpbGRyZW5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICBjb2xvbj17Y29sb259XHJcbiAgICAgICAgICAvLyBleHRyYT17ISFyYXdEZXNjcmlwdGlvbiAmJiBkZXNjcmlwdGlvbn1cclxuICAgICAgICAgIGhhc0ZlZWRiYWNrPXtzY2hlbWEudHlwZSAhPT0gJ2FycmF5JyAmJiBzY2hlbWEudHlwZSAhPT0gJ29iamVjdCd9XHJcbiAgICAgICAgICBoZWxwPXsoISFyYXdIZWxwICYmIGhlbHApIHx8ICghIXJhd0Vycm9ycz8ubGVuZ3RoICYmIHJlbmRlckZpZWxkRXJyb3JzKCkpfVxyXG4gICAgICAgICAgaHRtbEZvcj17aWR9XHJcbiAgICAgICAgICBsYWJlbD17ZGlzcGxheUxhYmVsICYmIGxhYmVsfVxyXG4gICAgICAgICAgbGFiZWxDb2w9e2xhYmVsQ29sfVxyXG4gICAgICAgICAgcmVxdWlyZWQ9e3JlcXVpcmVkfVxyXG4gICAgICAgICAgc3R5bGU9e3dyYXBwZXJTdHlsZX1cclxuICAgICAgICAgIHZhbGlkYXRlU3RhdHVzPXtyYXdFcnJvcnM/Lmxlbmd0aCA/ICdlcnJvcicgOiB1bmRlZmluZWR9XHJcbiAgICAgICAgICB3cmFwcGVyQ29sPXt3cmFwcGVyQ29sfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgKX1cclxuICAgIDwvV3JhcElmQWRkaXRpb25hbD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmllbGRUZW1wbGF0ZTtcclxuIl19