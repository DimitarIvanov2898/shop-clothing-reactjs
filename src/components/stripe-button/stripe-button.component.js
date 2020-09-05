import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price*100
    const publishableKey = 'pk_test_51HNzUOIYwdY2WLxw2HejZ5m6FPMYrwrw9mIyULadzRhlM9HUaGvE4Bd5NxHdsHLUDQ4veoNHANjnxqXfYwpLIufx00nTpuduS7'

    const onToken = token => {
        console.log(token)
        alert('Test payment successfull')
    }
    return (
        <StripeCheckout 
            label='Pay now'
            name='React-Clothing' 
            billingAddress 
            shippingAddress 
            image='https://svgshare.com/i/CUz.svg' 
            description={`Your total is ${price}$`} 
            amount={priceForStripe} 
            panelLabel='Pay Now' 
            token={onToken} 
            stripeKey={publishableKey}
            />
    )
}

export default StripeCheckoutButton