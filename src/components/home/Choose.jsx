import choose from '@/assets/images/choose.png';
import { CareIcons, FingerIcons, TailorIcons } from '@/lib/CustomIcons';

const Choose = () => {
    return (
        <div className='space-y-20 hidden md:block'>
            <div className='space-y-4 xlg:w-1/2'>
                <p className="text-primary text-5xl">
                    Why Choose Us?
                </p>
                <p className="text-lg">
                    Whether you're here for leisure or business, we ensure personalized service, modern amenities, and seamless experiences that feel like home.
                </p>
            </div>

            <div className="flex flex-col xlg:flex-row items-center gap-14">
                <div className="xlg:w-[60%] ">
                    <img src={choose} className="w-full" alt="" />
                </div>

                <div className="w-full xlg:w-[30%] flex  xlg:flex-col  xlg:space-y-16">
                    {/* First Feature */}
                    <div className="flex gap-3 md:gap-4 flex-col sm:flex-row">
                        <div className="flex-shrink-0">
                            <FingerIcons className="w-8 h-8 md:w-10 md:h-10" />
                        </div>
                        <div>
                            <p className="text-xl sm:text-2xl lg:text-3xl font-medium">Effortless Convenience</p>
                            <p className="text-sm sm:text-base">
                                One-click services for housekeeping, room service, and amenities.
                            </p>
                        </div>
                    </div>

                    {/* Second Feature */}
                    <div className="flex gap-3 md:gap-4 flex-col sm:flex-row">
                        <div className="flex-shrink-0">
                            <CareIcons className="w-8 h-8 md:w-10 md:h-10" />
                        </div>
                        <div>
                            <p className="text-xl sm:text-2xl lg:text-3xl font-medium">Comfort & Care</p>
                            <p className="text-sm sm:text-base">
                                Cozy accommodations designed for relaxation and productivity.
                            </p>
                        </div>
                    </div>

                    {/* Third Feature */}
                    <div className="flex gap-3 md:gap-4 flex-col sm:flex-row">
                        <div className="flex-shrink-0">
                            <TailorIcons className="w-8 h-8 md:w-10 md:h-10" />
                        </div>
                        <div>
                            <p className="text-xl sm:text-2xl lg:text-3xl font-medium">Tailored Experiences</p>
                            <p className="text-sm sm:text-base">
                                Complimentary activities and personalized services to enhance your stay.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Choose;