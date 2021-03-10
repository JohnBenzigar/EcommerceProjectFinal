import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function RadioButtonsGroup() {
  const [value, setValue] = React.useState('COD');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Payment Options </FormLabel>
      <RadioGroup aria-label="payment options" name="payment1" value={value} onChange={handleChange}>
        <FormControlLabel value="COD" control={<Radio />} label="Cash On Delivery" />
        <FormControlLabel value="stripe" control={<Radio />} label="Stripe" />
        <FormControlLabel value="razorpay" control={<Radio />} label="RazorPay" />
      </RadioGroup>
    </FormControl>
  );
}
