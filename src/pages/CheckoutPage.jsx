import React from 'react';
import { FaCcVisa } from "react-icons/fa6";
import { RiMastercardFill } from "react-icons/ri";
import { FaPaypal } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa";
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { IoMdArrowDropdown } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import cartProduct1 from '../assets/images/cartproduct/cartProduct1.png';
import product8 from '../assets/images/products/product8.png';

const CheckoutPage = () => {
  return (
    <div className='checkout-page' style={{
        padding: '2rem 4rem'
    }}>
        <div className='checkout-title'>
            <Link to="/cart" ><FaArrowLeft /></Link>
            <h1>Checkout</h1>
        </div>
        <hr/>
        <h1 className='order'>ORDER</h1>
        <hr />
        <div className="checkout-product-container">
            <div className="checkout-product checkout-product1">
                <div className="checkout-product-image" style={{
                    padding: '2rem 4rem',
                }}>
                    <div style={{
                        width: '200px',
                        height: '250px',
                        backgroundImage: `url(${cartProduct1})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}></div>
                </div>
                <div className="checkout-product-info" style={{
                    color: '#2790C3',
                }}>
                    <h3>cheese cake dress</h3>
                    <h2>Girls Yellow Butterfly Floral with Ruched Waistline Details</h2>
                    <div className="checkout-product-description">
                        <div className="size-qty">
                            <div className="size">
                                <p>Size: 7-8 yrs</p>
                
                            </div>
                            <div className="qty">
                                <p>Qty: 1</p>
                                <IoMdArrowDropdown />
                            </div>
                        </div>
                        <div className="shipping-info">
                            <p>shipping from: lagos</p>
                            <p>shipping note: delivers in 5days</p>
                        </div>
                        <div className="removecheckout">
                            <IoClose />
                            <p>Remove</p>
                        </div>
                    </div>
                </div>
                <div className="checkout-product-price" style={{
                    color: '#2790C3'
                }}>
                        <p>$25.00</p>
                </div>
            </div>
            <div className="checkout-product checkout-product2">
                <div className="checkout-product-image" style={{
                    padding: '2rem 4rem',
                }}>
                <div style={{
                        width: '200px',
                        height: '300px',
                        backgroundImage: `url(${product8})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}></div>

                </div>
                <div className="checkout-product-info"  style={{
                    color: '#2790C3',
                }}>
                    <h3>cheese cake dress</h3>
                    <h2>Girls Yellow Butterfly Floral with Ruched Waistline Details</h2>
                    <div className="checkout-product-description">
                        <div className="size-qty">
                            <div className="size">
                                <p>Size: 7-8 yrs</p>
                
                            </div>
                            <div className="qty">
                                <p>Qty: 1</p>
                                <IoMdArrowDropdown />
                            </div>
                        </div>
                        <div className="shipping-info">
                            <p>shipping from: lagos</p>
                            <p>shipping note: delivers in 5days</p>
                        </div>
                        <div className="removecheckout">
                            <IoClose />
                            <p>Remove</p>
                        </div>
                    </div>
                </div>
                <div className="checkout-product-price" style={{
                    color: '#2790C3'
                }}>
                        <p>$25.00</p>
                </div>
            </div>
        </div>
        <hr />
        <div className="checkout-total-price" style={{
            width: '100%',
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'space-between',
            color: '#2790C3',
            padding: '2rem 4rem'

        }}>
            <p className="checkout-total-text">Total</p>
            <p className="checkout-price">$65.00</p>
        </div>
        <hr />
        <div className="payment-container" style={{
            textAlign: 'center',
        }}>
            <h2 className="checkout-payment" style={{
                fontWeight: '600px',
                fontSize: '64px',
                lineHeight: '71.36px',
                color: '#2790C3',
                marginBottom: '1rem'
            }}>PAYMENT</h2>
            <hr />
            <p className="payment-method" style={{
                textAlign: 'left',
                color: '#2790C3',
                fontWeight: '600',
                fontSize: '32px',
                lineHeight: '35.68px',
                padding: '2rem 4rem '
            }}>Payment method</p>
            <div className="payment-type-btn" style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                columnGap: '1rem',
                padding: '2rem 4rem'

            }}>
                <button style={{
                    width: '100%',
                    height: '50px',
                      border: '1px solid #2790C3'
                }}><FaCcVisa /></button>
                <button style={{
                    width: '100%',
                    height: '50px',
                    border: '1px solid #2790C3'
                }}><RiMastercardFill /></button>
                <button style={{
                    width: '100%',
                    height: '50px',
                    border: '1px solid #2790C3'
                }}><FaPaypal style={{
                    width: '80%',
                    border: '1px solid #2790C3'
                }} /></button>
            </div>           
        </div>
        <form action="">
            <label htmlFor="cardholder-name" style={{
                padding: '2rem 4rem'
            }}>Cardholder Name</label>
            <input type="text" name="cardholder-name" id="cardholder-name" style={{
                border: '1px solid #2790C3',
                width: '100%',
                padding: '0rem 4rem'
            }}/>
            <section className='card-details-section' style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                columnGap: '4px'
            }}>
                <section>
                    <label htmlFor="card-number">Card number</label>
                    <input type="number" name="card-number" id="card-number" style={{
                        height: '100px',
                        width: '100%',
                        border: '1px solid #2790C3',
                        borderRadius:'12px'
                    }} />
                </section>
                <section>
                    <label htmlFor="month-year">MM/YY</label>
                    <input type="text" name="month-year" id="month-year" style={{
                        height: '100px',
                        width: '100%',
                        border: '1px solid #2790C3',
                        borderRadius:'12px'
                    
                    }}
                         />
                </section>
                <section>
                    <label htmlFor="cvc">CVC</label>
                    <input type="number" name="cvc" id="cvc"  style={{
                        height: '100px',
                        width: '100%',
                        border: '1px solid #2790C3',
                        borderRadius:'12px' }}/>
                </section>
            </section>
        </form>
        <button style={{
            margin: '1rem auto',
            placeItems: 'center',
            backgroundColor: '#2790C3',
            width: '50%',
            borderRadius: '32px',
            position: 'relative',
            left: '20%'
        }}>PURCHASE</button>
        <Footer />
    </div>
  )
}

export default CheckoutPage