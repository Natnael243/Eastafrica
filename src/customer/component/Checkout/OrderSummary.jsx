import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import CartItem from '../Cart/CartItem'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const OrderSummary=()=>{
    const navigate = useNavigate();
    return(
        <div>
            <div className='p-5 shadow-lg rounded-s-md border'>
                <AddressCard/>

            </div>

            <div className='lg:grid grid-cols-3 lg:px-10 mt-5 relative'>
            <div className='col-span-2'>
            <CartItem/>
            </div>
            <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-1'>
                <div className='p-5 shadow-lg border rounded-md'>
                    
                    <div className='px-4 space-y-1 font-semibold mb-10'>
                        
                    <p className='uppercase font-bold opacity-60'>
                        price details
                    </p>
                    <hr />
                    
                        <div className='flex justify-between pt-3 text-black'>
                            <span>Price</span>
                            <span>240Br</span>
                        </div>

                        <hr className='pt-10'/>
                        <div className='flex justify-between'>
                            <span>Service charge</span>
                            <span className='text-green-600'>80Br</span>
                        </div>
                        
                        <div className='flex justify-between text-black'>
                            <span>Delivery fee</span>
                            <span className='text-green-600'>150Br</span>
                        </div>
                        <div className=' flex justify-between font-bold text-black'>
                            <span>Total Price</span>
                            <span className='text-green-600'>480Br</span>
                        </div>

                        <Button onClick ={()=>navigate(`/payment/paymentform`)} variant="contained" className="w-full" sx={{py:"0.5rem",bgcolor:"Green"}}>
                        Pay
                    </Button>
                    </div>
                    
                </div>

            </div>
        </div>
        </div>
    )
}

export default OrderSummary