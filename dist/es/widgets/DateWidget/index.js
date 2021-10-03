import React from 'react';
import dayjs from 'dayjs';
import DatePicker from '../../components/DatePicker';
var DATE_PICKER_STYLE = {
  width: '100%'
};

var DateWidget = function DateWidget(_ref) {
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
    return onChange(nextValue && nextValue.format('YYYY-MM-DD'));
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
    showTime: false,
    style: DATE_PICKER_STYLE,
    value: value && dayjs(value)
  });
};

export default DateWidget;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy93aWRnZXRzL0RhdGVXaWRnZXQvaW5kZXguanMiXSwibmFtZXMiOlsiUmVhY3QiLCJkYXlqcyIsIkRhdGVQaWNrZXIiLCJEQVRFX1BJQ0tFUl9TVFlMRSIsIndpZHRoIiwiRGF0ZVdpZGdldCIsImRpc2FibGVkIiwiZm9ybUNvbnRleHQiLCJpZCIsIm9uQmx1ciIsIm9uQ2hhbmdlIiwib25Gb2N1cyIsInBsYWNlaG9sZGVyIiwicmVhZG9ubHkiLCJ2YWx1ZSIsInJlYWRvbmx5QXNEaXNhYmxlZCIsImhhbmRsZUNoYW5nZSIsIm5leHRWYWx1ZSIsImZvcm1hdCIsImhhbmRsZUJsdXIiLCJoYW5kbGVGb2N1cyIsImdldFBvcHVwQ29udGFpbmVyIiwibm9kZSIsInBhcmVudE5vZGUiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxLQUFQLE1BQWtCLE9BQWxCO0FBRUEsT0FBT0MsVUFBUCxNQUF1Qiw2QkFBdkI7QUFFQSxJQUFNQyxpQkFBaUIsR0FBRztBQUN4QkMsRUFBQUEsS0FBSyxFQUFFO0FBRGlCLENBQTFCOztBQUlBLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BZWI7QUFBQSxNQWJKQyxRQWFJLFFBYkpBLFFBYUk7QUFBQSxNQVpKQyxXQVlJLFFBWkpBLFdBWUk7QUFBQSxNQVhKQyxFQVdJLFFBWEpBLEVBV0k7QUFBQSxNQVRKQyxNQVNJLFFBVEpBLE1BU0k7QUFBQSxNQVJKQyxRQVFJLFFBUkpBLFFBUUk7QUFBQSxNQVBKQyxPQU9JLFFBUEpBLE9BT0k7QUFBQSxNQUxKQyxXQUtJLFFBTEpBLFdBS0k7QUFBQSxNQUpKQyxRQUlJLFFBSkpBLFFBSUk7QUFBQSxNQURKQyxLQUNJLFFBREpBLEtBQ0k7QUFBQSw4QkFDa0NQLFdBRGxDLENBQ0lRLGtCQURKO0FBQUEsTUFDSUEsa0JBREosc0NBQ3lCLElBRHpCOztBQUdKLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLFNBQUQ7QUFBQSxXQUNuQlAsUUFBUSxDQUFDTyxTQUFTLElBQUlBLFNBQVMsQ0FBQ0MsTUFBVixDQUFpQixZQUFqQixDQUFkLENBRFc7QUFBQSxHQUFyQjs7QUFHQSxNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYTtBQUFBLFdBQU1WLE1BQU0sQ0FBQ0QsRUFBRCxFQUFLTSxLQUFMLENBQVo7QUFBQSxHQUFuQjs7QUFFQSxNQUFNTSxXQUFXLEdBQUcsU0FBZEEsV0FBYztBQUFBLFdBQU1ULE9BQU8sQ0FBQ0gsRUFBRCxFQUFLTSxLQUFMLENBQWI7QUFBQSxHQUFwQjs7QUFFQSxNQUFNTyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNDLElBQUQ7QUFBQSxXQUFVQSxJQUFJLENBQUNDLFVBQWY7QUFBQSxHQUExQjs7QUFFQSxzQkFDRSxvQkFBQyxVQUFEO0FBQ0UsSUFBQSxRQUFRLEVBQUVqQixRQUFRLElBQUtTLGtCQUFrQixJQUFJRixRQUQvQztBQUVFLElBQUEsaUJBQWlCLEVBQUVRLGlCQUZyQjtBQUdFLElBQUEsRUFBRSxFQUFFYixFQUhOO0FBSUUsSUFBQSxJQUFJLEVBQUVBLEVBSlI7QUFLRSxJQUFBLE1BQU0sRUFBRSxDQUFDSyxRQUFELEdBQVlNLFVBQVosR0FBeUJLLFNBTG5DO0FBTUUsSUFBQSxRQUFRLEVBQUUsQ0FBQ1gsUUFBRCxHQUFZRyxZQUFaLEdBQTJCUSxTQU52QztBQU9FLElBQUEsT0FBTyxFQUFFLENBQUNYLFFBQUQsR0FBWU8sV0FBWixHQUEwQkksU0FQckM7QUFRRSxJQUFBLFdBQVcsRUFBRVosV0FSZjtBQVNFLElBQUEsUUFBUSxFQUFFLEtBVFo7QUFVRSxJQUFBLEtBQUssRUFBRVQsaUJBVlQ7QUFXRSxJQUFBLEtBQUssRUFBRVcsS0FBSyxJQUFJYixLQUFLLENBQUNhLEtBQUQ7QUFYdkIsSUFERjtBQWVELENBMUNEOztBQTRDQSxlQUFlVCxVQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJztcclxuXHJcbmltcG9ydCBEYXRlUGlja2VyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRGF0ZVBpY2tlcic7XHJcblxyXG5jb25zdCBEQVRFX1BJQ0tFUl9TVFlMRSA9IHtcclxuICB3aWR0aDogJzEwMCUnLFxyXG59O1xyXG5cclxuY29uc3QgRGF0ZVdpZGdldCA9ICh7XHJcbiAgLy8gYXV0b2ZvY3VzLFxyXG4gIGRpc2FibGVkLFxyXG4gIGZvcm1Db250ZXh0LFxyXG4gIGlkLFxyXG4gIC8vIGxhYmVsLFxyXG4gIG9uQmx1cixcclxuICBvbkNoYW5nZSxcclxuICBvbkZvY3VzLFxyXG4gIC8vIG9wdGlvbnMsXHJcbiAgcGxhY2Vob2xkZXIsXHJcbiAgcmVhZG9ubHksXHJcbiAgLy8gcmVxdWlyZWQsXHJcbiAgLy8gc2NoZW1hLFxyXG4gIHZhbHVlLFxyXG59KSA9PiB7XHJcbiAgY29uc3QgeyByZWFkb25seUFzRGlzYWJsZWQgPSB0cnVlIH0gPSBmb3JtQ29udGV4dDtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKG5leHRWYWx1ZSkgPT5cclxuICAgIG9uQ2hhbmdlKG5leHRWYWx1ZSAmJiBuZXh0VmFsdWUuZm9ybWF0KCdZWVlZLU1NLUREJykpO1xyXG5cclxuICBjb25zdCBoYW5kbGVCbHVyID0gKCkgPT4gb25CbHVyKGlkLCB2YWx1ZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUZvY3VzID0gKCkgPT4gb25Gb2N1cyhpZCwgdmFsdWUpO1xyXG5cclxuICBjb25zdCBnZXRQb3B1cENvbnRhaW5lciA9IChub2RlKSA9PiBub2RlLnBhcmVudE5vZGU7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RGF0ZVBpY2tlclxyXG4gICAgICBkaXNhYmxlZD17ZGlzYWJsZWQgfHwgKHJlYWRvbmx5QXNEaXNhYmxlZCAmJiByZWFkb25seSl9XHJcbiAgICAgIGdldFBvcHVwQ29udGFpbmVyPXtnZXRQb3B1cENvbnRhaW5lcn1cclxuICAgICAgaWQ9e2lkfVxyXG4gICAgICBuYW1lPXtpZH1cclxuICAgICAgb25CbHVyPXshcmVhZG9ubHkgPyBoYW5kbGVCbHVyIDogdW5kZWZpbmVkfVxyXG4gICAgICBvbkNoYW5nZT17IXJlYWRvbmx5ID8gaGFuZGxlQ2hhbmdlIDogdW5kZWZpbmVkfVxyXG4gICAgICBvbkZvY3VzPXshcmVhZG9ubHkgPyBoYW5kbGVGb2N1cyA6IHVuZGVmaW5lZH1cclxuICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxyXG4gICAgICBzaG93VGltZT17ZmFsc2V9XHJcbiAgICAgIHN0eWxlPXtEQVRFX1BJQ0tFUl9TVFlMRX1cclxuICAgICAgdmFsdWU9e3ZhbHVlICYmIGRheWpzKHZhbHVlKX1cclxuICAgIC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhdGVXaWRnZXQ7XHJcbiJdfQ==