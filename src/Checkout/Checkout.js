import React from 'react'
import { useStateValue } from '../datalayer/StateProvider'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal.js'

function Checkout() {
  const [{basket, user}, dispatch] = useStateValue();
  var username = user.email.split('@')[0]; 
  return (
    <div className='checkout'>
        <div className='checkout__left'>
            <img className='checkout__ad' src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg' alt='' />
            <div>
                <h3 className='checkout__username'>Hello, {!user ? 'user' : username}</h3>
                <h2 className='checkout__title'>
                    Your shopping Basket
                </h2>
                {basket.map(item => (
                    <CheckoutProduct
                        id={item.id}
                        image={item.image}
                        title={item.title}
                        price={item.price}
                        rating={item.rating} />
                ))}
            </div>
        </div>
        <div className='checkout__right'>
            <Subtotal />
        </div>
    </div>
  )
}

export default Checkout
