
import { OfferIcons } from '@/lib/CheckOutIconAll'
import React from 'react'

const AnySpecialRequests = () => {
  return (
    <div className='border shadow-lg rounded-2xl w-full bg-white p-6 '>
      <p className='text-sm flex items-center gap-1 pb-2'>
        <OfferIcons /> Any Special Requests
      </p>
      <textarea
        className=' border-[1px] rounded-2xl p-4 h-[170px] w-full resize-none'
        placeholder='(Birthday, Anniversary, Family getaway etc.)'
      />
      <p className='text-sm pt-2 text-[#8B8B8B]'>
        Share your special requests with us and we’ll do our best to accommodate them!
      </p>
    </div>
  )
}

export default AnySpecialRequests
