import banner from '@/assets/images/experienceBanner.png';
import SearchBar from '../home/SearchBar';

const ExperienceBanner = () => {
    return (
        <div className="relative">
            {/* Banner Image */}
            <img
                src={banner}
                className="w-full h-auto object-cover"
                alt="Banner background"
            />

            {/* Main Text Overlay - Responsive */}
            
            {/* Search Bar Overlay */}
            <SearchBar />
        </div>
    );
};

export default ExperienceBanner;