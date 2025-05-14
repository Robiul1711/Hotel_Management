import React from 'react'
import { Link } from 'react-router-dom'

const SubmitForm = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen max-w-[530px] text-center  mx-auto'>
<h1 className='text-3xl font-semibold mb-2 font-neris'>Thank you! Your check-in details have been successfully submitted.</h1>
<p className='font-neris text-[#5A5C5F]'>Here's what's coming up and your recent activity.</p>
 <Link to={'/dashboard'} 
            type="submit"
            className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition-all"
          >
            Submit Check-In
          </Link>
    </div>
  )
}

export default SubmitForm