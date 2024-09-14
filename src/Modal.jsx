import React from 'react'
import { useState } from 'react'


const Modal = () => {
    const [showModal, setShowModal] = useState(false);
  
  
  
    return (
        <>
      
        
            <button onClick={() => setShowModal(true)} className='lg:py-4 lg:px-8 rounded-xl text-white font-bold text-xl bg-red-600 hover:bg-red-950 hover:text-white '>Details</button>
            {showModal ? ( 
                <>
            <div className='w-[450px] h-[400px] justify-center text-center max-width-[500px] border rounded-lg'>
                    
                <h1 className='text-5xl font-bold underline py-4'>Details</h1>
                <h1 className='text-xl font-bold'>Street</h1>
                <h1 className='text-xl font-bold'>City</h1>
                <h1 className='text-xl font-bold'>State</h1>
                <h1 className='text-xl font-bold'>PostCode</h1>
                <h1 className='text-xl font-bold'>Phone</h1>
                <h1 className='text-xl font-bold'>Cell</h1>
                 
            </div>
            <button onClick={() => setShowModal(false)} className='lg:py-4 lg:px-8 rounded-xl text-white font-bold text-xl bg-red-600 hover:bg-red-950 hover:text-white '>Close</button>
            </>
    ) : null}
    </>
  )
}

export default Modal
