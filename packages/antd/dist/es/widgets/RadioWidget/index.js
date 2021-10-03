/* eslint-disable no-else-return */
import React from 'react';
import Radio from 'antd/lib/radio';

var RadioWidget = function RadioWidget(_ref) {
  var autofocus = _ref.autofocus,
      disabled = _ref.disabled,
      formContext = _ref.formContext,
      id = _ref.id,
      onBlur = _ref.onBlur,
      onChange = _ref.onChange,
      onFocus = _ref.onFocus,
      options = _ref.options,
      readonly = _ref.readonly,
      schema = _ref.schema,
      value = _ref.value;
  var _formContext$readonly = formContext.readonlyAsDisabled,
      readonlyAsDisabled = _formContext$readonly === void 0 ? true : _formContext$readonly;
  var enumOptions = options.enumOptions,
      enumDisabled = options.enumDisabled;

  var handleChange = function handleChange(_ref2) {
    var nextValue = _ref2.target.value;
    return onChange(schema.type === 'boolean' ? nextValue !== 'false' : nextValue);
  };

  var handleBlur = function handleBlur(_ref3) {
    var target = _ref3.target;
    return onBlur(id, target.value);
  };

  var handleFocus = function handleFocus(_ref4) {
    var target = _ref4.target;
    return onFocus(id, target.value);
  };

  return /*#__PURE__*/React.createElement(Radio.Group, {
    disabled: disabled || readonlyAsDisabled && readonly,
    id: id,
    name: id,
    onBlur: !readonly ? handleBlur : undefined,
    onChange: !readonly ? handleChange : undefined,
    onFocus: !readonly ? handleFocus : undefined,
    value: "".concat(value)
  }, enumOptions.map(function (_ref5, i) {
    var optionValue = _ref5.value,
        optionLabel = _ref5.label;
    return /*#__PURE__*/React.createElement(Radio, {
      autoFocus: i === 0 ? autofocus : false,
      disabled: enumDisabled && enumDisabled.indexOf(value) !== -1,
      key: "".concat(optionValue),
      value: "".concat(optionValue)
    }, optionLabel);
  }));
};

export default RadioWidget;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy93aWRnZXRzL1JhZGlvV2lkZ2V0L2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiUmFkaW8iLCJSYWRpb1dpZGdldCIsImF1dG9mb2N1cyIsImRpc2FibGVkIiwiZm9ybUNvbnRleHQiLCJpZCIsIm9uQmx1ciIsIm9uQ2hhbmdlIiwib25Gb2N1cyIsIm9wdGlvbnMiLCJyZWFkb25seSIsInNjaGVtYSIsInZhbHVlIiwicmVhZG9ubHlBc0Rpc2FibGVkIiwiZW51bU9wdGlvbnMiLCJlbnVtRGlzYWJsZWQiLCJoYW5kbGVDaGFuZ2UiLCJuZXh0VmFsdWUiLCJ0YXJnZXQiLCJ0eXBlIiwiaGFuZGxlQmx1ciIsImhhbmRsZUZvY3VzIiwidW5kZWZpbmVkIiwibWFwIiwiaSIsIm9wdGlvblZhbHVlIiwib3B0aW9uTGFiZWwiLCJsYWJlbCIsImluZGV4T2YiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUVBLE9BQU9DLEtBQVAsTUFBa0IsZ0JBQWxCOztBQUVBLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BZWQ7QUFBQSxNQWRKQyxTQWNJLFFBZEpBLFNBY0k7QUFBQSxNQWJKQyxRQWFJLFFBYkpBLFFBYUk7QUFBQSxNQVpKQyxXQVlJLFFBWkpBLFdBWUk7QUFBQSxNQVhKQyxFQVdJLFFBWEpBLEVBV0k7QUFBQSxNQVRKQyxNQVNJLFFBVEpBLE1BU0k7QUFBQSxNQVJKQyxRQVFJLFFBUkpBLFFBUUk7QUFBQSxNQVBKQyxPQU9JLFFBUEpBLE9BT0k7QUFBQSxNQU5KQyxPQU1JLFFBTkpBLE9BTUk7QUFBQSxNQUpKQyxRQUlJLFFBSkpBLFFBSUk7QUFBQSxNQUZKQyxNQUVJLFFBRkpBLE1BRUk7QUFBQSxNQURKQyxLQUNJLFFBREpBLEtBQ0k7QUFBQSw4QkFDa0NSLFdBRGxDLENBQ0lTLGtCQURKO0FBQUEsTUFDSUEsa0JBREosc0NBQ3lCLElBRHpCO0FBQUEsTUFHSUMsV0FISixHQUdrQ0wsT0FIbEMsQ0FHSUssV0FISjtBQUFBLE1BR2lCQyxZQUhqQixHQUdrQ04sT0FIbEMsQ0FHaUJNLFlBSGpCOztBQUtKLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlO0FBQUEsUUFBb0JDLFNBQXBCLFNBQUdDLE1BQUgsQ0FBYU4sS0FBYjtBQUFBLFdBQ25CTCxRQUFRLENBQUNJLE1BQU0sQ0FBQ1EsSUFBUCxLQUFnQixTQUFoQixHQUE0QkYsU0FBUyxLQUFLLE9BQTFDLEdBQW9EQSxTQUFyRCxDQURXO0FBQUEsR0FBckI7O0FBR0EsTUFBTUcsVUFBVSxHQUFHLFNBQWJBLFVBQWE7QUFBQSxRQUFHRixNQUFILFNBQUdBLE1BQUg7QUFBQSxXQUFnQlosTUFBTSxDQUFDRCxFQUFELEVBQUthLE1BQU0sQ0FBQ04sS0FBWixDQUF0QjtBQUFBLEdBQW5COztBQUVBLE1BQU1TLFdBQVcsR0FBRyxTQUFkQSxXQUFjO0FBQUEsUUFBR0gsTUFBSCxTQUFHQSxNQUFIO0FBQUEsV0FBZ0JWLE9BQU8sQ0FBQ0gsRUFBRCxFQUFLYSxNQUFNLENBQUNOLEtBQVosQ0FBdkI7QUFBQSxHQUFwQjs7QUFFQSxzQkFDRSxvQkFBQyxLQUFELENBQU8sS0FBUDtBQUNFLElBQUEsUUFBUSxFQUFFVCxRQUFRLElBQUtVLGtCQUFrQixJQUFJSCxRQUQvQztBQUVFLElBQUEsRUFBRSxFQUFFTCxFQUZOO0FBR0UsSUFBQSxJQUFJLEVBQUVBLEVBSFI7QUFJRSxJQUFBLE1BQU0sRUFBRSxDQUFDSyxRQUFELEdBQVlVLFVBQVosR0FBeUJFLFNBSm5DO0FBS0UsSUFBQSxRQUFRLEVBQUUsQ0FBQ1osUUFBRCxHQUFZTSxZQUFaLEdBQTJCTSxTQUx2QztBQU1FLElBQUEsT0FBTyxFQUFFLENBQUNaLFFBQUQsR0FBWVcsV0FBWixHQUEwQkMsU0FOckM7QUFPRSxJQUFBLEtBQUssWUFBS1YsS0FBTDtBQVBQLEtBU0dFLFdBQVcsQ0FBQ1MsR0FBWixDQUFnQixpQkFBNkNDLENBQTdDO0FBQUEsUUFBVUMsV0FBVixTQUFHYixLQUFIO0FBQUEsUUFBOEJjLFdBQTlCLFNBQXVCQyxLQUF2QjtBQUFBLHdCQUNmLG9CQUFDLEtBQUQ7QUFDRSxNQUFBLFNBQVMsRUFBRUgsQ0FBQyxLQUFLLENBQU4sR0FBVXRCLFNBQVYsR0FBc0IsS0FEbkM7QUFFRSxNQUFBLFFBQVEsRUFBRWEsWUFBWSxJQUFJQSxZQUFZLENBQUNhLE9BQWIsQ0FBcUJoQixLQUFyQixNQUFnQyxDQUFDLENBRjdEO0FBR0UsTUFBQSxHQUFHLFlBQUthLFdBQUwsQ0FITDtBQUlFLE1BQUEsS0FBSyxZQUFLQSxXQUFMO0FBSlAsT0FNR0MsV0FOSCxDQURlO0FBQUEsR0FBaEIsQ0FUSCxDQURGO0FBc0JELENBakREOztBQW1EQSxlQUFlekIsV0FBZiIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLWVsc2UtcmV0dXJuICovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgUmFkaW8gZnJvbSAnYW50ZC9saWIvcmFkaW8nO1xyXG5cclxuY29uc3QgUmFkaW9XaWRnZXQgPSAoe1xyXG4gIGF1dG9mb2N1cyxcclxuICBkaXNhYmxlZCxcclxuICBmb3JtQ29udGV4dCxcclxuICBpZCxcclxuICAvLyBsYWJlbCxcclxuICBvbkJsdXIsXHJcbiAgb25DaGFuZ2UsXHJcbiAgb25Gb2N1cyxcclxuICBvcHRpb25zLFxyXG4gIC8vIHBsYWNlaG9sZGVyLFxyXG4gIHJlYWRvbmx5LFxyXG4gIC8vIHJlcXVpcmVkLFxyXG4gIHNjaGVtYSxcclxuICB2YWx1ZSxcclxufSkgPT4ge1xyXG4gIGNvbnN0IHsgcmVhZG9ubHlBc0Rpc2FibGVkID0gdHJ1ZSB9ID0gZm9ybUNvbnRleHQ7XHJcblxyXG4gIGNvbnN0IHsgZW51bU9wdGlvbnMsIGVudW1EaXNhYmxlZCB9ID0gb3B0aW9ucztcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKHsgdGFyZ2V0OiB7IHZhbHVlOiBuZXh0VmFsdWUgfSB9KSA9PlxyXG4gICAgb25DaGFuZ2Uoc2NoZW1hLnR5cGUgPT09ICdib29sZWFuJyA/IG5leHRWYWx1ZSAhPT0gJ2ZhbHNlJyA6IG5leHRWYWx1ZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUJsdXIgPSAoeyB0YXJnZXQgfSkgPT4gb25CbHVyKGlkLCB0YXJnZXQudmFsdWUpO1xyXG5cclxuICBjb25zdCBoYW5kbGVGb2N1cyA9ICh7IHRhcmdldCB9KSA9PiBvbkZvY3VzKGlkLCB0YXJnZXQudmFsdWUpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFJhZGlvLkdyb3VwXHJcbiAgICAgIGRpc2FibGVkPXtkaXNhYmxlZCB8fCAocmVhZG9ubHlBc0Rpc2FibGVkICYmIHJlYWRvbmx5KX1cclxuICAgICAgaWQ9e2lkfVxyXG4gICAgICBuYW1lPXtpZH1cclxuICAgICAgb25CbHVyPXshcmVhZG9ubHkgPyBoYW5kbGVCbHVyIDogdW5kZWZpbmVkfVxyXG4gICAgICBvbkNoYW5nZT17IXJlYWRvbmx5ID8gaGFuZGxlQ2hhbmdlIDogdW5kZWZpbmVkfVxyXG4gICAgICBvbkZvY3VzPXshcmVhZG9ubHkgPyBoYW5kbGVGb2N1cyA6IHVuZGVmaW5lZH1cclxuICAgICAgdmFsdWU9e2Ake3ZhbHVlfWB9XHJcbiAgICA+XHJcbiAgICAgIHtlbnVtT3B0aW9ucy5tYXAoKHsgdmFsdWU6IG9wdGlvblZhbHVlLCBsYWJlbDogb3B0aW9uTGFiZWwgfSwgaSkgPT4gKFxyXG4gICAgICAgIDxSYWRpb1xyXG4gICAgICAgICAgYXV0b0ZvY3VzPXtpID09PSAwID8gYXV0b2ZvY3VzIDogZmFsc2V9XHJcbiAgICAgICAgICBkaXNhYmxlZD17ZW51bURpc2FibGVkICYmIGVudW1EaXNhYmxlZC5pbmRleE9mKHZhbHVlKSAhPT0gLTF9XHJcbiAgICAgICAgICBrZXk9e2Ake29wdGlvblZhbHVlfWB9XHJcbiAgICAgICAgICB2YWx1ZT17YCR7b3B0aW9uVmFsdWV9YH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7b3B0aW9uTGFiZWx9XHJcbiAgICAgICAgPC9SYWRpbz5cclxuICAgICAgKSl9XHJcbiAgICA8L1JhZGlvLkdyb3VwPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSYWRpb1dpZGdldDtcclxuIl19