import React from 'react'
import details from '@/assets/images/details.png'
import PhotoGallery from '@/components/bookingComponents/PhotoGallery'
import DetailsAboutBooking from '@/components/bookingComponents/DetailsAboutBooking'
const ViewDetails = () => {
  return (
    <div className='font-neris'>
           <h1 className='text-2xl font-semibold xlg:mb-6 font-neris'>View Details</h1>
           <div>
         <PhotoGallery />
         <DetailsAboutBooking />
           </div>
    </div>
  )
}

export default ViewDetails