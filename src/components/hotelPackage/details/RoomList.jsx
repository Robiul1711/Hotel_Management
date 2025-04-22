/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { RightOutlined } from '@ant-design/icons';
import room1 from '@/assets/images/stay2.png'; // default fallback image

const mockRoomData = [
    {
        id: 1,
        name: 'Deluxe Room',
        image: room1,
        price: 2500,
        description:
            'Experience comfort and elegance in our deluxe room, featuring spacious interiors, modern amenities, and stunning views.',
        stayServices:
            'Enjoy personalized services, including daily housekeeping, in-room dining, transport assistance, and curated activities.',
        experiences:
            'Our dedicated support team ensures a seamless and enjoyable stay, with both complimentary and premium experiences available.',
        availability: 1,
    },
    {
        id: 2,
        name: 'Executive Room',
        image: room1,
        price: 3500,
        description:
            'Experience comfort and elegance in our deluxe room, featuring spacious interiors, modern amenities, and stunning views.',
        stayServices:
            'Enjoy personalized services, including daily housekeeping, in-room dining, transport assistance, and curated activities.',
        experiences:
            'Our dedicated support team ensures a seamless and enjoyable stay, with both complimentary and premium experiences available.',
        availability: 1,
    },
];

const RoomCard = ({ room }) => {
    return (
        <div className="flex flex-col md:flex-row mb-6">
            <div className="hidden md:block md:w-1/3 border rounded-lg p-4">
                <img src={room.image} alt={room.name} className="rounded-lg object-cover h-full mx-auto md:w-full" />
            </div>

            <div className="md:hidden md:w-1/3 border rounded-lg p-4 flex gap-10">
                <div className="w-1/4">
                    <img src={room.image} alt={room.name} className="rounded-lg object-cover h-full mx-auto md:w-full" />
                </div>
                <div className="">
                    <h2 className="text-lg font-semibold">{room.name}</h2>
                    <div className="">
                        <p className="text-xl font-bold">₹ {room.price.toLocaleString()}</p>
                        <p className="text-xs text-gray-500">Incl. Taxes Per Night</p>
                    </div>
                </div>
            </div>

            <div className="md:w-2/3 flex flex-col justify-between border rounded-lg p-4">
                <div>
                    <div className="hidden md:flex justify-between items-start">
                        <h2 className="text-lg font-semibold">{room.name}</h2>
                        <div className="text-center">
                            <p className="text-xl font-bold">₹ {room.price.toLocaleString()}</p>
                            <p className="text-xs text-gray-500">Incl. Taxes Per Night</p>
                        </div>
                    </div>

                    <p className="mt-2 text-sm ">{room.description}</p>

                    <div className="mt-3">
                        <p className="font-medium text-sm">Hich Exclusives:</p>
                        <ul className="list-disc list-inside text-sm  mt-1 space-y-1">
                            <li>Stay Services: {room.stayServices}</li>
                            <li>Experiences: {room.experiences}</li>
                        </ul>
                    </div>
                </div>
                <div className=" flex justify-between">

                    <button className=" underline flex items-center gap-1 text-lg font-medium">
                        View Facilities <RightOutlined />
                    </button>
                    <div className="flex flex-col gap-2">
                        <button className="bg-primary text-white px-6 py-2 rounded-full shadow-md">Book</button>
                        <p className="text-xs ">Only {room.availability} Room Left!</p>
                    </div>
                </div>


            </div>
        </div>
    );
};

const RoomList = () => {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        // Replace this with real API call when backend is ready
        setRooms(mockRoomData);
    }, []);

    return (
        <div className=" mx-auto my-4">
            {rooms.map((room) => (
                <RoomCard key={room.id} room={room} />
            ))}
        </div>
    );
};

export default RoomList;
