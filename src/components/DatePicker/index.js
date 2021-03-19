import React, { forwardRef, useState } from 'react';
import { func, string } from 'prop-types';
import { TouchableWithoutFeedback, View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns';
import { TextField } from '..';

const DatePicker = ({ onChange, value, ...props }, ref) => {
  const [show, setShow] = useState(false);

  const handleChange = (event, selectedDate) => {
    const currentDate = selectedDate ? format(selectedDate, 'dd/MM/yyyy') : value;

    onChange(currentDate);
    setShow(false);
  };

  const handleShow = () => {
    if (!show) {
      setShow(true);
    }
  };

  return (
    <View>
      <TouchableWithoutFeedback onPress={handleShow}>
        <TextField disabled ref={ref} value={value} {...props} />
      </TouchableWithoutFeedback>
      {show && (
        <DateTimePicker
          is24Hour
          mode="date"
          display="default"
          onChange={handleChange}
          value={getDatePickerValue(value)}
        />
      )}
    </View>
  );
};

const getDatePickerValue = value => {
  if (!value) {
    return new Date();
  }

  const [day, month, year] = value.split('/');

  const date = new Date(`${year}-${month}-${day}`);

  const offset = -1 * date.getTimezoneOffset() * 60 * 1000;

  return new Date(date.getTime() - offset);
};

const ForwardedRefDatePicker = forwardRef(DatePicker);

ForwardedRefDatePicker.propTypes = {
  onChange: func,
  value: string,
};

export default ForwardedRefDatePicker;
