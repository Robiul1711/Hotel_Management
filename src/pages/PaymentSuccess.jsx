import { CheckCircle2, Clock, Home, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const PaymentSuccess = () => {
    // Sample booking data (replace with actual data from your API/state)
    const bookingDetails = {
        bookingId: 'BK12345678',
        date: new Date().toLocaleDateString(),
        amount: '₹ 12,500',
        property: 'Luxury Beach Villa',
        checkIn: '2023-11-15',
        checkOut: '2023-11-20',
        guests: 4
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
                {/* Success Header */}
                <div className="bg-green-100 p-8 text-center">
                    <div className="flex justify-center">
                        <CheckCircle2 className="h-16 w-16 text-green-600" />
                    </div>
                    <h1 className="mt-4 text-3xl font-bold text-green-800">Payment Successful!</h1>
                    <p className="mt-2 text-green-600">
                        Your booking is confirmed. We've sent the details to your email.
                    </p>
                </div>

                {/* Booking Summary */}
                <div className="p-8 border-b">
                    <h2 className="text-xl font-semibold text-gray-800">Booking Summary</h2>
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <div>
                                <p className="text-sm text-gray-500">Booking ID</p>
                                <p className="font-medium">{bookingDetails.bookingId}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Date</p>
                                <p className="font-medium">{bookingDetails.date}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Amount Paid</p>
                                <p className="font-medium text-green-600">{bookingDetails.amount}</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <p className="text-sm text-gray-500">Property</p>
                                <p className="font-medium">{bookingDetails.property}</p>
                            </div>
                            <div className="flex space-x-4">
                                <div>
                                    <p className="text-sm text-gray-500">Check-in</p>
                                    <p className="font-medium">{bookingDetails.checkIn}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Check-out</p>
                                    <p className="font-medium">{bookingDetails.checkOut}</p>
                                </div>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Guests</p>
                                <p className="font-medium">{bookingDetails.guests}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Next Steps */}
                <div className="p-8 border-b">
                    <h2 className="text-xl font-semibold text-gray-800">What's Next?</h2>
                    <div className="mt-6 space-y-4">
                        <div className="flex items-start">
                            <Clock className="h-5 w-5 text-blue-500 mt-0.5 mr-3" />
                            <div>
                                <p className="font-medium">Check your email</p>
                                <p className="text-sm text-gray-500">
                                    We've sent your booking confirmation and invoice to your email address.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <Home className="h-5 w-5 text-blue-500 mt-0.5 mr-3" />
                            <div>
                                <p className="font-medium">Prepare for your stay</p>
                                <p className="text-sm text-gray-500">
                                    The property host will contact you with check-in instructions before your arrival.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Support */}
                <div className="p-8">
                    <h2 className="text-xl font-semibold text-gray-800">Need Help?</h2>
                    <div className="mt-6 space-y-4">
                        <div className="flex items-center">
                            <Phone className="h-5 w-5 text-gray-500 mr-3" />
                            <span className="text-sm">+1 (555) 123-4567</span>
                        </div>
                        <div className="flex items-center">
                            <Mail className="h-5 w-5 text-gray-500 mr-3" />
                            <span className="text-sm">support@yourcompany.com</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PaymentSuccess;