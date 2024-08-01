import React from 'react'
import HeadingComponent from '../../components/headingCompo/HeadingComponent'

const Payment = () => {
    return (
        <div className='payment-page d-flex justify-content-center align-items-start'>
        <div className='container'>
            <HeadingComponent heading="Payment-Gateway" />
            <div className='my-5'>
                <form>
                    <div className='row mb-3'>
                        <div className='col-12 col-md-6'>
                            <label htmlFor='name' className='form-label'>Name</label>
                            <input type='text' className='form-control' id='name' placeholder='Write your name' />
                        </div>
                        <div className='col-12 col-md-6'>
                            <label htmlFor='email' className='form-label'>Email</label>
                            <input type='email' className='form-control' id='email' placeholder='Write your email' />
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <div className='col-12 col-md-6'>
                            <label htmlFor='phone' className='form-label'>Phone No</label>
                            <input type='text' className='form-control' id='phone' placeholder='Write your phone number' />
                        </div>
                        <div className='col-12 col-md-6'>
                            <label htmlFor='quantity' className='form-label'>Quantity</label>
                            <input type='number' className='form-control' id='quantity' placeholder='Enter quantity' />
                        </div>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='address' className='form-label'>Address</label>
                        <textarea className='form-control' id='address' rows='3' placeholder='Write your address'></textarea>
                    </div>
                    <div className='d-flex justify-content-end'>
                        <button type='button' className='btn btn-primary buy-now'>BUY NOW</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
);
};


export default Payment
