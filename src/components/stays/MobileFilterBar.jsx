import { FilterIcons, Stay1Icons, Stay2Icons, Stay3Icons, Stay4Icons, Stay5Icons, Stay6Icons } from '@/lib/CustomIcons';
import { Filter, ChevronRight, ChevronDown } from 'lucide-react';

const filters = [
    { icon: <Stay1Icons />, label: "Pool" },
    { icon: <Stay2Icons />, label: "Haunted" },
    { icon: <Stay3Icons />, label: "Bike" },
    { icon: <Stay4Icons />, label: "Campfire" },
    { icon: <Stay5Icons />, label: "Campfire" },
    { icon: <Stay6Icons />, label: "Campfire" },

];

export default function MobileFilterBar() {
    return (
        <div className="p-4 space-y-4">
            {/* Filter Buttons Row */}
            <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap px-2 py-1 scrollbar-hide text-gray-500">
                <button>
                    <FilterIcons />
                </button>
                <button className="flex-shrink-0 flex items-center gap-1 border rounded-full px-3 py-1 text-sm">
                    {/* <Filter size={16} /> */}
                    Sort By <ChevronDown size={16} />
                </button>
                <button className="flex-shrink-0 border flex items-center rounded-full px-3 py-1 text-sm">Price <ChevronDown size={16} /></button>
                <button className="flex-shrink-0 border rounded-full px-3 py-1 text-sm">Newly Launched</button>
                <button className="flex-shrink-0 border rounded-full px-3 py-1 text-sm flex items-center gap-1">
                    Best Rated <ChevronRight size={16} />
                </button>
            </div>


            {/* Icon Filters Row */}
            <div className="overflow-hidden">
                <div className="flex gap-4 overflow-x-auto whitespace-nowrap py-1 px-2 scrollbar-hide">
                    {filters.map((item, index) => (
                        <div
                            key={index}
                            className="w-14 h-14 flex-shrink-0 flex items-center justify-center border rounded-full text-gray-700 hover:bg-gray-100 cursor-pointer"
                            title={item.label}
                        >
                            <span className="text-xl">{item.icon}</span>
                        </div>
                    ))}

                    <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center  text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                        See all
                    </div>
                </div>
            </div>

        </div>
    );
}
