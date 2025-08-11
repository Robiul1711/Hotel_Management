
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
            <div className="flex justify-between items-center">
                <p className="text-primary mb-0 font-semibold text-lg md:text-4xl  md:text-left">
                    Create Memories, One Stay at a Time
                </p>
                {/* <div className="">
                    <button className='text-gray-400'>See all</button>
                </div> */}
            </div>
            <div className='grid grid-cols-3 gap-4'>
                {
                    galleryItems?.map((item) => <div key={item?.img}>
                        <img src={item?.img} alt="" className='h-[100px] rounded-2xl'/>
                    </div>)
                }
            </div>
        </div>

    );
};

export default MobileGallery;