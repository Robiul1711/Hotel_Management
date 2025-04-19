import choose from '@/assets/images/choose.png';
import { CareIcons, FingerIcons, TailorIcons } from '@/lib/CustomIcons';

const Choose = () => {
    return (
        <>
            <div className='space-y-4 w-1/2'>
                <p className="text-primary text-5xl">
                    Why Choose Us?
                </p>
                <p className="text-lg">
                    Whether you're here for leisure or business, we ensure personalized service, modern amenities, and seamless experiences that feel like home.
                </p>
            </div>

            <div className="flex items-center justify-between">
                <div className="w-[60%]">
                    <img src={choose} className="w-full" alt="" />
                </div>

                <div className="w-[30%] space-y-16">
                    <div className="flex gap-4">
                        <FingerIcons />
                        <div className="">
                            <p className="text-3xl">Effortless Convenience</p>
                            <p className="">
                                One-click services for housekeeping, room service, and amenities.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <CareIcons />
                        <div className="">
                            <p className="text-3xl">Comfort & Care</p>
                            <p className="">
                                Cozy accommodations designed for relaxation and productivity.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <TailorIcons />
                        <div className="">
                            <p className="text-3xl">Tailored Experiences</p>
                            <p className="">
                                Complimentary activities and personalized services to enhance your stay.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Choose;