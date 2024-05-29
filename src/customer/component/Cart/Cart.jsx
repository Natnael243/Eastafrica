import React from 'react'
import CartItem from './CartItem'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Cart = ()=> {
    const navigate = useNavigate();

    const handleCheckOut=()=>{
        navigate("/checkout?step=2")
    }
    
    return (
        
        <div className='lg:grid grid-cols-3 lg:px-10 mt-5 relative'>
            <div className='col-span-2'>
            <CartItem/>
            </div>
            <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-8'>
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
                            <span className='text-green-600'>470Br</span>
                        </div>

                        <Button onClick={handleCheckOut} variant="contained" className="w-full" sx={{py:"0.5rem",bgcolor:"Green"}}>
                        Checkout
                    </Button>
                    </div>
                    
                </div>

            </div>
        </div>

)
}

export default Cart