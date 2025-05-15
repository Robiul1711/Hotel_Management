import React from 'react'
import { Info, XCircle } from 'lucide-react'

const BookingCancellationPolicy = () => {
  return (
    <div className=" border rounded-xl p-6 bg-white shadow-sm">
      {/* Title */}
      <h2 className="text-lg font-semibold mb-2 sm:mb-4">Booking & Cancellation Policy</h2>

      {/* Policies */}
      <div className="flex flex-col sm:flex-row justify-between text-sm mb-2 sm:mb-4">
        {/* Refundable */}
        <div className="flex-1 xxs:mb-4 sm:mb-0">
          <div className="flex items-center gap-2 font-medium text-yellow-700">
            <Info className="w-4 h-4 text-yellow-500" />
            50% Future Stay Voucher / Refund
          </div>
          <p className="mt-1 text-gray-600">On/Before 10th May, 2025</p>
        </div>

        {/* No Refund */}
        <div className="flex-1">
          <div className="flex items-center gap-2 font-medium text-red-700">
            <XCircle className="w-4 h-4 text-red-500" />
            No Refund
          </div>
          <p className="mt-1 text-gray-600">After 10th May, 2025</p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col xxs:flex-row gap-4 mb-4">
        <button className="px-4 py-2 border rounded-lg text-sm font-medium text-gray-800 bg-[#FFF3E0] hover:bg-[#ffe0b2] transition">
          Refund Policy
        </button>
        <button className="px-4 py-2 border rounded-lg text-sm font-medium text-gray-800 bg-[#FFF3E0] hover:bg-[#ffe0b2] transition">
          Home Rules and Policy
        </button>
      </div>

      {/* Check-in info */}
      <p className="text-xs text-gray-600">
        Check-in time: <span className="font-semibold">2PM</span>, Check-out time: <span className="font-semibold">11AM</span>
      </p>
      <p className="text-xs text-gray-500">
        Note: Early check-in and late check-out is subject to availability (at an
      </p>
    </div>
  )
}

export default BookingCancellationPolicy
