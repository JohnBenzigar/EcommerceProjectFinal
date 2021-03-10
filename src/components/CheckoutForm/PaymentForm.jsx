import React from 'react';
import { Typography, Button, Radio, Divider ,FormControlLabel , RadioGroup } from '@material-ui/core';
import  RadioButtonsGroup from './RadioButtonsGroup';
import Review from './Review';




const PaymentForm = ({ checkoutToken, nextStep, backStep, shippingData, onCaptureCheckout }) => {
  const handleSubmit = async (event) => {
    event.preventDefault();
     

      const orderData = await {
        line_items: checkoutToken.live.line_items,
        customer: { firstname: shippingData.firstName, lastname: shippingData.lastName, email: shippingData.email },
        shipping: { name: 'International', street: shippingData.address1, town_city: shippingData.city, county_state: shippingData.shippingSubdivision, postal_zip_code: shippingData.zip, country: shippingData.shippingCountry },
        fulfillment: { shipping_method: shippingData.shippingOption },
        payment: {
          gateway: 'manual' ,
          manual:{
            id:  'pk_test_23565ff4d5ddbc98ebbce5933d19eaf2abb605cad5ceb',}
          }

          }
          onCaptureCheckout(checkoutToken.id, orderData);
          
          nextStep();
        }

        

      

        
    
    
  

  return (
    <>
      <Review checkoutToken={checkoutToken} />
      <Divider />
      <Typography variant="h6" gutterBottom style={{ margin: '20px 0' }}></Typography>
      <br>
      </br>
      <RadioButtonsGroup></RadioButtonsGroup>
          <form onSubmit={(e) => handleSubmit(e)}>
            
            <br /> <br />

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button variant="outlined" onClick={backStep}>Back</Button>
              <Button type="submit" variant="contained"  color="primary">
                Confirm
              </Button>
              
            </div>
          </form>
        
        
      
    </>
  );
};

export default PaymentForm;
