import React from 'react';
import dayjs from 'dayjs';
import DatePicker from '../../components/DatePicker';
var DATE_PICKER_STYLE = {
  width: '100%'
};

var DateTimeWidget = function DateTimeWidget(_ref) {
  var disabled = _ref.disabled,
      formContext = _ref.formContext,
      id = _ref.id,
      onBlur = _ref.onBlur,
      onChange = _ref.onChange,
      onFocus = _ref.onFocus,
      placeholder = _ref.placeholder,
      readonly = _ref.readonly,
      value = _ref.value;
  var _formContext$readonly = formContext.readonlyAsDisabled,
      readonlyAsDisabled = _formContext$readonly === void 0 ? true : _formContext$readonly;

  var handleChange = function handleChange(nextValue) {
    return onChange(nextValue && nextValue.toISOString());
  };

  var handleBlur = function handleBlur() {
    return onBlur(id, value);
  };

  var handleFocus = function handleFocus() {
    return onFocus(id, value);
  };

  var getPopupContainer = function getPopupContainer(node) {
    return node.parentNode;
  };

  return /*#__PURE__*/React.createElement(DatePicker, {
    disabled: disabled || readonlyAsDisabled && readonly,
    getPopupContainer: getPopupContainer,
    id: id,
    name: id,
    onBlur: !readonly ? handleBlur : undefined,
    onChange: !readonly ? handleChange : undefined,
    onFocus: !readonly ? handleFocus : undefined,
    placeholder: placeholder,
    showTime: true,
    style: DATE_PICKER_STYLE,
    value: value && dayjs(value)
  });
};

export default DateTimeWidget;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy93aWRnZXRzL0RhdGVUaW1lV2lkZ2V0L2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiZGF5anMiLCJEYXRlUGlja2VyIiwiREFURV9QSUNLRVJfU1RZTEUiLCJ3aWR0aCIsIkRhdGVUaW1lV2lkZ2V0IiwiZGlzYWJsZWQiLCJmb3JtQ29udGV4dCIsImlkIiwib25CbHVyIiwib25DaGFuZ2UiLCJvbkZvY3VzIiwicGxhY2Vob2xkZXIiLCJyZWFkb25seSIsInZhbHVlIiwicmVhZG9ubHlBc0Rpc2FibGVkIiwiaGFuZGxlQ2hhbmdlIiwibmV4dFZhbHVlIiwidG9JU09TdHJpbmciLCJoYW5kbGVCbHVyIiwiaGFuZGxlRm9jdXMiLCJnZXRQb3B1cENvbnRhaW5lciIsIm5vZGUiLCJwYXJlbnROb2RlIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsS0FBUCxNQUFrQixPQUFsQjtBQUVBLE9BQU9DLFVBQVAsTUFBdUIsNkJBQXZCO0FBRUEsSUFBTUMsaUJBQWlCLEdBQUc7QUFDeEJDLEVBQUFBLEtBQUssRUFBRTtBQURpQixDQUExQjs7QUFJQSxJQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLE9BZWpCO0FBQUEsTUFiSkMsUUFhSSxRQWJKQSxRQWFJO0FBQUEsTUFaSkMsV0FZSSxRQVpKQSxXQVlJO0FBQUEsTUFYSkMsRUFXSSxRQVhKQSxFQVdJO0FBQUEsTUFUSkMsTUFTSSxRQVRKQSxNQVNJO0FBQUEsTUFSSkMsUUFRSSxRQVJKQSxRQVFJO0FBQUEsTUFQSkMsT0FPSSxRQVBKQSxPQU9JO0FBQUEsTUFMSkMsV0FLSSxRQUxKQSxXQUtJO0FBQUEsTUFKSkMsUUFJSSxRQUpKQSxRQUlJO0FBQUEsTUFESkMsS0FDSSxRQURKQSxLQUNJO0FBQUEsOEJBQ2tDUCxXQURsQyxDQUNJUSxrQkFESjtBQUFBLE1BQ0lBLGtCQURKLHNDQUN5QixJQUR6Qjs7QUFHSixNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxTQUFEO0FBQUEsV0FDbkJQLFFBQVEsQ0FBQ08sU0FBUyxJQUFJQSxTQUFTLENBQUNDLFdBQVYsRUFBZCxDQURXO0FBQUEsR0FBckI7O0FBR0EsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWE7QUFBQSxXQUFNVixNQUFNLENBQUNELEVBQUQsRUFBS00sS0FBTCxDQUFaO0FBQUEsR0FBbkI7O0FBRUEsTUFBTU0sV0FBVyxHQUFHLFNBQWRBLFdBQWM7QUFBQSxXQUFNVCxPQUFPLENBQUNILEVBQUQsRUFBS00sS0FBTCxDQUFiO0FBQUEsR0FBcEI7O0FBRUEsTUFBTU8saUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDQyxJQUFEO0FBQUEsV0FBVUEsSUFBSSxDQUFDQyxVQUFmO0FBQUEsR0FBMUI7O0FBRUEsc0JBQ0Usb0JBQUMsVUFBRDtBQUNFLElBQUEsUUFBUSxFQUFFakIsUUFBUSxJQUFLUyxrQkFBa0IsSUFBSUYsUUFEL0M7QUFFRSxJQUFBLGlCQUFpQixFQUFFUSxpQkFGckI7QUFHRSxJQUFBLEVBQUUsRUFBRWIsRUFITjtBQUlFLElBQUEsSUFBSSxFQUFFQSxFQUpSO0FBS0UsSUFBQSxNQUFNLEVBQUUsQ0FBQ0ssUUFBRCxHQUFZTSxVQUFaLEdBQXlCSyxTQUxuQztBQU1FLElBQUEsUUFBUSxFQUFFLENBQUNYLFFBQUQsR0FBWUcsWUFBWixHQUEyQlEsU0FOdkM7QUFPRSxJQUFBLE9BQU8sRUFBRSxDQUFDWCxRQUFELEdBQVlPLFdBQVosR0FBMEJJLFNBUHJDO0FBUUUsSUFBQSxXQUFXLEVBQUVaLFdBUmY7QUFTRSxJQUFBLFFBQVEsTUFUVjtBQVVFLElBQUEsS0FBSyxFQUFFVCxpQkFWVDtBQVdFLElBQUEsS0FBSyxFQUFFVyxLQUFLLElBQUliLEtBQUssQ0FBQ2EsS0FBRDtBQVh2QixJQURGO0FBZUQsQ0ExQ0Q7O0FBNENBLGVBQWVULGNBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnO1xyXG5cclxuaW1wb3J0IERhdGVQaWNrZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9EYXRlUGlja2VyJztcclxuXHJcbmNvbnN0IERBVEVfUElDS0VSX1NUWUxFID0ge1xyXG4gIHdpZHRoOiAnMTAwJScsXHJcbn07XHJcblxyXG5jb25zdCBEYXRlVGltZVdpZGdldCA9ICh7XHJcbiAgLy8gYXV0b2ZvY3VzLFxyXG4gIGRpc2FibGVkLFxyXG4gIGZvcm1Db250ZXh0LFxyXG4gIGlkLFxyXG4gIC8vIGxhYmVsLFxyXG4gIG9uQmx1cixcclxuICBvbkNoYW5nZSxcclxuICBvbkZvY3VzLFxyXG4gIC8vIG9wdGlvbnMsXHJcbiAgcGxhY2Vob2xkZXIsXHJcbiAgcmVhZG9ubHksXHJcbiAgLy8gcmVxdWlyZWQsXHJcbiAgLy8gc2NoZW1hLFxyXG4gIHZhbHVlLFxyXG59KSA9PiB7XHJcbiAgY29uc3QgeyByZWFkb25seUFzRGlzYWJsZWQgPSB0cnVlIH0gPSBmb3JtQ29udGV4dDtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKG5leHRWYWx1ZSkgPT5cclxuICAgIG9uQ2hhbmdlKG5leHRWYWx1ZSAmJiBuZXh0VmFsdWUudG9JU09TdHJpbmcoKSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUJsdXIgPSAoKSA9PiBvbkJsdXIoaWQsIHZhbHVlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRm9jdXMgPSAoKSA9PiBvbkZvY3VzKGlkLCB2YWx1ZSk7XHJcblxyXG4gIGNvbnN0IGdldFBvcHVwQ29udGFpbmVyID0gKG5vZGUpID0+IG5vZGUucGFyZW50Tm9kZTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxEYXRlUGlja2VyXHJcbiAgICAgIGRpc2FibGVkPXtkaXNhYmxlZCB8fCAocmVhZG9ubHlBc0Rpc2FibGVkICYmIHJlYWRvbmx5KX1cclxuICAgICAgZ2V0UG9wdXBDb250YWluZXI9e2dldFBvcHVwQ29udGFpbmVyfVxyXG4gICAgICBpZD17aWR9XHJcbiAgICAgIG5hbWU9e2lkfVxyXG4gICAgICBvbkJsdXI9eyFyZWFkb25seSA/IGhhbmRsZUJsdXIgOiB1bmRlZmluZWR9XHJcbiAgICAgIG9uQ2hhbmdlPXshcmVhZG9ubHkgPyBoYW5kbGVDaGFuZ2UgOiB1bmRlZmluZWR9XHJcbiAgICAgIG9uRm9jdXM9eyFyZWFkb25seSA/IGhhbmRsZUZvY3VzIDogdW5kZWZpbmVkfVxyXG4gICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XHJcbiAgICAgIHNob3dUaW1lXHJcbiAgICAgIHN0eWxlPXtEQVRFX1BJQ0tFUl9TVFlMRX1cclxuICAgICAgdmFsdWU9e3ZhbHVlICYmIGRheWpzKHZhbHVlKX1cclxuICAgIC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhdGVUaW1lV2lkZ2V0O1xyXG4iXX0=