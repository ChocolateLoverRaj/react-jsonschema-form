"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _form = _interopRequireDefault(require("antd/lib/form"));

var _WrapIfAdditional = _interopRequireDefault(require("./WrapIfAdditional"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "field-hidden"
    }, children);
  }

  var renderFieldErrors = function renderFieldErrors() {
    return _toConsumableArray(new Set(rawErrors)).map(function (error) {
      return /*#__PURE__*/_react.default.createElement("div", {
        key: "field-".concat(id, "-error-").concat(error)
      }, error);
    });
  };

  return /*#__PURE__*/_react.default.createElement(_WrapIfAdditional.default, {
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
  }, id === 'root' ? children : /*#__PURE__*/_react.default.createElement(_form.default.Item, {
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

var _default = FieldTemplate;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90ZW1wbGF0ZXMvRmllbGRUZW1wbGF0ZS9pbmRleC5qcyJdLCJuYW1lcyI6WyJWRVJUSUNBTF9MQUJFTF9DT0wiLCJzcGFuIiwiVkVSVElDQUxfV1JBUFBFUl9DT0wiLCJGaWVsZFRlbXBsYXRlIiwiY2hpbGRyZW4iLCJjbGFzc05hbWVzIiwiZGVzY3JpcHRpb24iLCJkaXNhYmxlZCIsImRpc3BsYXlMYWJlbCIsImZvcm1Db250ZXh0IiwiaGVscCIsImhpZGRlbiIsImlkIiwibGFiZWwiLCJvbkRyb3BQcm9wZXJ0eUNsaWNrIiwib25LZXlDaGFuZ2UiLCJyYXdEZXNjcmlwdGlvbiIsInJhd0Vycm9ycyIsInJhd0hlbHAiLCJyZWFkb25seSIsInJlcXVpcmVkIiwic2NoZW1hIiwiY29sb24iLCJsYWJlbENvbCIsIndyYXBwZXJDb2wiLCJ3cmFwcGVyU3R5bGUiLCJyZW5kZXJGaWVsZEVycm9ycyIsIlNldCIsIm1hcCIsImVycm9yIiwidHlwZSIsImxlbmd0aCIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsa0JBQWtCLEdBQUc7QUFBRUMsRUFBQUEsSUFBSSxFQUFFO0FBQVIsQ0FBM0I7QUFDQSxJQUFNQyxvQkFBb0IsR0FBRztBQUFFRCxFQUFBQSxJQUFJLEVBQUU7QUFBUixDQUE3Qjs7QUFFQSxJQUFNRSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLE9Bc0JoQjtBQUFBLE1BckJKQyxRQXFCSSxRQXJCSkEsUUFxQkk7QUFBQSxNQXBCSkMsVUFvQkksUUFwQkpBLFVBb0JJO0FBQUEsTUFuQkpDLFdBbUJJLFFBbkJKQSxXQW1CSTtBQUFBLE1BbEJKQyxRQWtCSSxRQWxCSkEsUUFrQkk7QUFBQSxNQWpCSkMsWUFpQkksUUFqQkpBLFlBaUJJO0FBQUEsTUFkSkMsV0FjSSxRQWRKQSxXQWNJO0FBQUEsTUFiSkMsSUFhSSxRQWJKQSxJQWFJO0FBQUEsTUFaSkMsTUFZSSxRQVpKQSxNQVlJO0FBQUEsTUFYSkMsRUFXSSxRQVhKQSxFQVdJO0FBQUEsTUFWSkMsS0FVSSxRQVZKQSxLQVVJO0FBQUEsTUFUSkMsbUJBU0ksUUFUSkEsbUJBU0k7QUFBQSxNQVJKQyxXQVFJLFFBUkpBLFdBUUk7QUFBQSxNQVBKQyxjQU9JLFFBUEpBLGNBT0k7QUFBQSxNQU5KQyxTQU1JLFFBTkpBLFNBTUk7QUFBQSxNQUxKQyxPQUtJLFFBTEpBLE9BS0k7QUFBQSxNQUpKQyxRQUlJLFFBSkpBLFFBSUk7QUFBQSxNQUhKQyxRQUdJLFFBSEpBLFFBR0k7QUFBQSxNQUZKQyxNQUVJLFFBRkpBLE1BRUk7QUFBQSxNQUVGQyxLQUZFLEdBTUFiLFdBTkEsQ0FFRmEsS0FGRTtBQUFBLDhCQU1BYixXQU5BLENBR0ZjLFFBSEU7QUFBQSxNQUdGQSxRQUhFLHNDQUdTdkIsa0JBSFQ7QUFBQSw4QkFNQVMsV0FOQSxDQUlGZSxVQUpFO0FBQUEsTUFJRkEsVUFKRSxzQ0FJV3RCLG9CQUpYO0FBQUEsTUFLRnVCLFlBTEUsR0FNQWhCLFdBTkEsQ0FLRmdCLFlBTEU7O0FBUUosTUFBSWQsTUFBSixFQUFZO0FBQ1Ysd0JBQU87QUFBSyxNQUFBLFNBQVMsRUFBQztBQUFmLE9BQStCUCxRQUEvQixDQUFQO0FBQ0Q7O0FBRUQsTUFBTXNCLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0I7QUFBQSxXQUN4QixtQkFBSSxJQUFJQyxHQUFKLENBQVFWLFNBQVIsQ0FBSixFQUF3QlcsR0FBeEIsQ0FBNEIsVUFBQ0MsS0FBRDtBQUFBLDBCQUMxQjtBQUFLLFFBQUEsR0FBRyxrQkFBV2pCLEVBQVgsb0JBQXVCaUIsS0FBdkI7QUFBUixTQUF5Q0EsS0FBekMsQ0FEMEI7QUFBQSxLQUE1QixDQUR3QjtBQUFBLEdBQTFCOztBQUtBLHNCQUNFLDZCQUFDLHlCQUFEO0FBQ0UsSUFBQSxVQUFVLEVBQUV4QixVQURkO0FBRUUsSUFBQSxRQUFRLEVBQUVFLFFBRlo7QUFHRSxJQUFBLFdBQVcsRUFBRUUsV0FIZjtBQUlFLElBQUEsRUFBRSxFQUFFRyxFQUpOO0FBS0UsSUFBQSxLQUFLLEVBQUVDLEtBTFQ7QUFNRSxJQUFBLG1CQUFtQixFQUFFQyxtQkFOdkI7QUFPRSxJQUFBLFdBQVcsRUFBRUMsV0FQZjtBQVFFLElBQUEsUUFBUSxFQUFFSSxRQVJaO0FBU0UsSUFBQSxRQUFRLEVBQUVDLFFBVFo7QUFVRSxJQUFBLE1BQU0sRUFBRUM7QUFWVixLQVlHVCxFQUFFLEtBQUssTUFBUCxHQUNDUixRQURELGdCQUdDLDZCQUFDLGFBQUQsQ0FBTSxJQUFOO0FBQ0UsSUFBQSxLQUFLLEVBQUVrQixLQURULENBRUU7QUFGRjtBQUdFLElBQUEsV0FBVyxFQUFFRCxNQUFNLENBQUNTLElBQVAsS0FBZ0IsT0FBaEIsSUFBMkJULE1BQU0sQ0FBQ1MsSUFBUCxLQUFnQixRQUgxRDtBQUlFLElBQUEsSUFBSSxFQUFHLENBQUMsQ0FBQ1osT0FBRixJQUFhUixJQUFkLElBQXdCLENBQUMsRUFBQ08sU0FBRCxhQUFDQSxTQUFELHVCQUFDQSxTQUFTLENBQUVjLE1BQVosQ0FBRCxJQUF1QkwsaUJBQWlCLEVBSnhFO0FBS0UsSUFBQSxPQUFPLEVBQUVkLEVBTFg7QUFNRSxJQUFBLEtBQUssRUFBRUosWUFBWSxJQUFJSyxLQU56QjtBQU9FLElBQUEsUUFBUSxFQUFFVSxRQVBaO0FBUUUsSUFBQSxRQUFRLEVBQUVILFFBUlo7QUFTRSxJQUFBLEtBQUssRUFBRUssWUFUVDtBQVVFLElBQUEsY0FBYyxFQUFFLENBQUFSLFNBQVMsU0FBVCxJQUFBQSxTQUFTLFdBQVQsWUFBQUEsU0FBUyxDQUFFYyxNQUFYLElBQW9CLE9BQXBCLEdBQThCQyxTQVZoRDtBQVdFLElBQUEsVUFBVSxFQUFFUjtBQVhkLEtBYUdwQixRQWJILENBZkosQ0FERjtBQWtDRCxDQXpFRDs7ZUEyRWVELGEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IEZvcm0gZnJvbSAnYW50ZC9saWIvZm9ybSc7XHJcblxyXG5pbXBvcnQgV3JhcElmQWRkaXRpb25hbCBmcm9tICcuL1dyYXBJZkFkZGl0aW9uYWwnO1xyXG5cclxuY29uc3QgVkVSVElDQUxfTEFCRUxfQ09MID0geyBzcGFuOiAyNCB9O1xyXG5jb25zdCBWRVJUSUNBTF9XUkFQUEVSX0NPTCA9IHsgc3BhbjogMjQgfTtcclxuXHJcbmNvbnN0IEZpZWxkVGVtcGxhdGUgPSAoe1xyXG4gIGNoaWxkcmVuLFxyXG4gIGNsYXNzTmFtZXMsXHJcbiAgZGVzY3JpcHRpb24sXHJcbiAgZGlzYWJsZWQsXHJcbiAgZGlzcGxheUxhYmVsLFxyXG4gIC8vIGVycm9ycyxcclxuICAvLyBmaWVsZHMsXHJcbiAgZm9ybUNvbnRleHQsXHJcbiAgaGVscCxcclxuICBoaWRkZW4sXHJcbiAgaWQsXHJcbiAgbGFiZWwsXHJcbiAgb25Ecm9wUHJvcGVydHlDbGljayxcclxuICBvbktleUNoYW5nZSxcclxuICByYXdEZXNjcmlwdGlvbixcclxuICByYXdFcnJvcnMsXHJcbiAgcmF3SGVscCxcclxuICByZWFkb25seSxcclxuICByZXF1aXJlZCxcclxuICBzY2hlbWEsXHJcbiAgLy8gdWlTY2hlbWEsXHJcbn0pID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBjb2xvbixcclxuICAgIGxhYmVsQ29sID0gVkVSVElDQUxfTEFCRUxfQ09MLFxyXG4gICAgd3JhcHBlckNvbCA9IFZFUlRJQ0FMX1dSQVBQRVJfQ09MLFxyXG4gICAgd3JhcHBlclN0eWxlLFxyXG4gIH0gPSBmb3JtQ29udGV4dDtcclxuXHJcbiAgaWYgKGhpZGRlbikge1xyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQtaGlkZGVuXCI+e2NoaWxkcmVufTwvZGl2PjtcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlbmRlckZpZWxkRXJyb3JzID0gKCkgPT5cclxuICAgIFsuLi5uZXcgU2V0KHJhd0Vycm9ycyldLm1hcCgoZXJyb3IpID0+IChcclxuICAgICAgPGRpdiBrZXk9e2BmaWVsZC0ke2lkfS1lcnJvci0ke2Vycm9yfWB9PntlcnJvcn08L2Rpdj5cclxuICAgICkpOyBcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxXcmFwSWZBZGRpdGlvbmFsXHJcbiAgICAgIGNsYXNzTmFtZXM9e2NsYXNzTmFtZXN9XHJcbiAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cclxuICAgICAgZm9ybUNvbnRleHQ9e2Zvcm1Db250ZXh0fVxyXG4gICAgICBpZD17aWR9XHJcbiAgICAgIGxhYmVsPXtsYWJlbH1cclxuICAgICAgb25Ecm9wUHJvcGVydHlDbGljaz17b25Ecm9wUHJvcGVydHlDbGlja31cclxuICAgICAgb25LZXlDaGFuZ2U9e29uS2V5Q2hhbmdlfVxyXG4gICAgICByZWFkb25seT17cmVhZG9ubHl9XHJcbiAgICAgIHJlcXVpcmVkPXtyZXF1aXJlZH1cclxuICAgICAgc2NoZW1hPXtzY2hlbWF9XHJcbiAgICA+XHJcbiAgICAgIHtpZCA9PT0gJ3Jvb3QnID8gKFxyXG4gICAgICAgIGNoaWxkcmVuXHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgY29sb249e2NvbG9ufVxyXG4gICAgICAgICAgLy8gZXh0cmE9eyEhcmF3RGVzY3JpcHRpb24gJiYgZGVzY3JpcHRpb259XHJcbiAgICAgICAgICBoYXNGZWVkYmFjaz17c2NoZW1hLnR5cGUgIT09ICdhcnJheScgJiYgc2NoZW1hLnR5cGUgIT09ICdvYmplY3QnfVxyXG4gICAgICAgICAgaGVscD17KCEhcmF3SGVscCAmJiBoZWxwKSB8fCAoISFyYXdFcnJvcnM/Lmxlbmd0aCAmJiByZW5kZXJGaWVsZEVycm9ycygpKX1cclxuICAgICAgICAgIGh0bWxGb3I9e2lkfVxyXG4gICAgICAgICAgbGFiZWw9e2Rpc3BsYXlMYWJlbCAmJiBsYWJlbH1cclxuICAgICAgICAgIGxhYmVsQ29sPXtsYWJlbENvbH1cclxuICAgICAgICAgIHJlcXVpcmVkPXtyZXF1aXJlZH1cclxuICAgICAgICAgIHN0eWxlPXt3cmFwcGVyU3R5bGV9XHJcbiAgICAgICAgICB2YWxpZGF0ZVN0YXR1cz17cmF3RXJyb3JzPy5sZW5ndGggPyAnZXJyb3InIDogdW5kZWZpbmVkfVxyXG4gICAgICAgICAgd3JhcHBlckNvbD17d3JhcHBlckNvbH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICl9XHJcbiAgICA8L1dyYXBJZkFkZGl0aW9uYWw+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpZWxkVGVtcGxhdGU7XHJcbiJdfQ==