import React from 'react';
import {
  FaBroom,
  FaRunning,
  FaShuttleVan,
  FaUtensils,
  FaSuitcaseRolling,
  FaConciergeBell,
} from 'react-icons/fa';

const data = [
  {
    icon: <FaBroom className="text-2xl" />,
    title: 'One– Click Room Service & Housekeeping',
    description: 'Request room service or housekeeping with one tap, just download Hich app.',
  },
  {
    icon: <FaRunning className="text-2xl" />,
    title: 'Complimentary In-Hotel Activities',
    description: 'Join complimentary wellness, sports, and leisure activities.',
  },
  {
    icon: <FaShuttleVan className="text-2xl" />,
    title: 'Transportation Services',
    description: 'Travel hassle-free with our reliable transport services.',
  },
  {
    icon: <FaUtensils className="text-2xl" />,
    title: 'Order Food',
    description:
      'Enjoy delicious meals delivered straight to your room or savor a delightful dining experience at our restaurant. Conveniently settle your bill during check-out.',
  },
  {
    icon: <FaSuitcaseRolling className="text-2xl" />,
    title: 'Pack My Bag Service',
    description: 'Let us pack your belongings for a stress-free departure.',
  },
  {
    icon: <FaConciergeBell className="text-2xl" />,
    title: 'Other Amenities (10 Facilities)',
    description:
      'Enjoy access to Wi-Fi, laundry services, concierge assistance, and a range of other premium amenities for a comfortable stay.',
  },
];

// Optional: Custom heights for variation
const cardHeights = ['h-48', 'h-60', 'h-52', 'h-60', 'h-48', 'h-56'];

const Card = ({ icon, title, description, height }) => (
  <div className={`bg-[#F5A623] text-white rounded-lg p-6 mb-4 shadow-md break-inside-avoid ${height}`}>
    <div>{icon}</div>
    <h3 className="font-bold text-lg mt-2">{title}</h3>
    <p className="text-sm mt-1">{description}</p>
  </div>
);

const CardGrid = () => {
  // Split cards into 3 columns manually (for flexbox-based masonry feel)
  const columns = [[], [], []];
  data.forEach((item, index) => {
    columns[index % 3].push({ ...item, height: cardHeights[index % cardHeights.length] });
  });

  return (
    <div className="max-w-6xl mx-auto flex gap-3 p-4">
      {columns.map((column, colIndex) => (
        <div key={colIndex} className="flex flex-col">
          {column.map((item, i) => (
            <Card
              key={i}
              icon={item.icon}
              title={item.title}
              description={item.description}
              height={item.height}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default CardGrid;
