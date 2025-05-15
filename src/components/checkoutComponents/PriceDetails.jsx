import React from 'react'
import { CheckCircle, ShieldCheck } from 'lucide-react'

const PriceDetails = () => {
  return (
    <div className="xlg:max-w-md w-full mx-auto border rounded-xl p-6 bg-white shadow-md">
      {/* Title */}
      <h2 className="text-lg font-semibold mb-4">Price Details</h2>

      {/* Zero convenience fees */}
      <p className="text-sm text-green-600 flex items-center gap-1 mb-4">
        <CheckCircle className="w-4 h-4 text-green-600" />
        You Pay Zero Convenience Fees On Your Booking!
      </p>

      {/* Charges */}
      <div className="text-sm space-y-2 mb-4">
        <div className="flex justify-between">
          <span>Rental Charges</span>
          <span className="font-medium">₹ 26,200</span>
        </div>
        <div className="flex justify-between">
          <span>GST (As Per Government Guidelines)</span>
          <span className="font-medium">₹ 4,716</span>
        </div>
      </div>

      {/* Coupon input */}
      <div className="flex items-center justify-between border rounded-lg p-3 mb-2 bg-[#F5F8FF]">
        <div>
          <p className="text-sm font-medium">ESCAPE5</p>
          <p className="text-xs text-green-600">Apply To Save Upto ₹ 1,500</p>
        </div>
        <button className="text-blue-600 font-medium text-sm">Apply</button>
      </div>

      {/* Voucher link */}
      <p className="text-xs text-blue-600 mb-4 cursor-pointer underline">
        View coupons / Apply Future Stay Voucher →
      </p>

      {/* Total Payable */}
      <div className="flex justify-between items-center bg-[#FF5A1F] text-white px-4 py-3 rounded-lg mb-4">
        <span className="text-sm font-semibold">Total Payable</span>
        <span className="text-lg font-bold">₹ 30,916</span>
      </div>

      {/* Terms & checkbox */}
      <div className="flex items-start mb-4 text-xs text-gray-600">
        <input type="checkbox" className="mt-1 mr-2" />
        <span>
          I have read and accepted the{' '}
          <span className="underline cursor-pointer">Terms & Conditions</span>,{' '}
          <span className="underline cursor-pointer">Privacy Policies</span>,{' '}
          <span className="underline cursor-pointer">Cancellation Policy</span>, and{' '}
          <span className="underline cursor-pointer">Indemnity Form</span>
        </span>
      </div>

      {/* Continue button */}
      <button className="w-full bg-[#FF7820] hover:bg-orange-600 text-white font-semibold py-3 rounded-lg mb-4">
        Continue
      </button>

      {/* Secure payment */}
      <div className="flex items-center justify-center border rounded-lg p-3 text-sm text-green-600">
        <ShieldCheck className="w-4 h-4 mr-2" />
        100% secure payment&nbsp;—&nbsp;Trusted by 5Lakh+ guests
      </div>
    </div>
  )
}

export default PriceDetails
