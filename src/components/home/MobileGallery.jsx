
import img1 from '@/assets/images/gallery/1.png';
import img2 from '@/assets/images/gallery/2.png';
import img3 from '@/assets/images/gallery/3.png';

const galleryItems = [
    { img: img1, title: "Modern Loft", category: "Contemporary" },
    { img: img2, title: "Mountain Retreat", category: "Nature" },
    { img: img3, title: "Cozy Cabin", category: "Woodland" },

];

const MobileGallery = () => {
    return (
        <div className='md:hidden space-y-5'>
            <div className="flex justify-between">
                <p className="text-primary  md:text-4xl lg:text-5xl md:text-left">
                    Create Memories, One Stay at a Time
                </p>
                <button className='text-gray-400'>See all</button>
            </div>
            <div className='grid grid-cols-3 gap-4'>
                {
                    galleryItems?.map((item) => <div key={item?.img}>
                        <img src={item?.img} alt="" />
                    </div>)
                }
            </div>
        </div>

    );
};

export default MobileGallery;