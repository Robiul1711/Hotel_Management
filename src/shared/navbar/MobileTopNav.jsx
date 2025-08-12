import logo from '@/assets/images/logo.png'
import { NavigationIcons } from '@/lib/CustomIcons';
import { CiSearch } from 'react-icons/ci';
import { GoArrowLeft } from "react-icons/go";

import nearby from '@/assets/images/nearby.png'
import pune from '@/assets/images/pune.png'
import mumbai from '@/assets/images/mumbai.png'
import delhi from '@/assets/images/delhi.png'
import goa from '@/assets/images/goa.png'
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FaPhone } from 'react-icons/fa';
import { BsTelephone } from "react-icons/bs";
import UserDropdown from './UserDropdown';
import ListYourVilla from '@/components/home/ListYourVilla';
import PropertyListingForm from '@/components/home/PropertyListingForm';
import useAuth from '@/hooks/useAuth';


const data = [
    {
        id: 0,
        name: 'Nearby',
        image: nearby
    },
    {
        id: 1,
        name: 'Pune',
        image: pune
    },
    {
        id: 2,
        name: 'Mumbai',
        image: mumbai
    },
    {
        id: 3,
        name: 'Delhi',
        image: delhi
    },
    {
        id: 4,
        name: 'Goa',
        image: goa
    }
]


const MobileTopNav = () => {
 const { user } = useAuth();
    const location = useLocation();
    const show = ["/", "/stays", "/experience"].includes(location.pathname);

    return (
        <div className='px-5'>
            <div className='flex justify-center'>
                <Link to={'/'}>
                    <img src={logo} alt="" />
                </Link>
            </div>

            {/* input and navigation  */}

            {/* need to hide search and reels for now.  */}
            {/* {
                show && (
                    <div className="">
                        <div className="bg-white flex justify-between items-center w-full border gap-5  px-4 rounded-full p-5 md:py-5">
                            <GoArrowLeft className='text-black text-xl md:text-2xl' />
                            <input
                                type="text"
                                className='w-full text-sm  text-black outline-none'
                                placeholder='Search for Location/Stay/Experience'
                            />
                        </div>

                        <div className="flex flex-wrap justify-between my-5">
                            {
                                data?.map((item) =>
                                    <div key={item?.id} className="flex justify-center items-center flex-col gap-2">
                                        <img src={item?.image} alt="" />
                                        <p className="font-extralight text-sm">{item?.name}</p>
                                    </div>)
                            }
                        </div>
                    </div>
                )
            } */}

            <div className="font-semibold flex justify-around items-center text-sm">
                <p className=""> <Link to={'/stays'} className="">Stays</Link></p>
                <p className="flex justify-center items-center gap-2"><BsTelephone />+91 97693 89956</p>
                {/* <p className="">   <PropertyListingForm button={false} /></p> */}
                <p className="">   <ListYourVilla/> </p>

                {
            user ?
             <UserDropdown />
              :

              <NavLink className={`-mt-4`} to={'/auth/registration'}>Login</NavLink>

          }
            
                {/* <div className="">
                    <UserDropdown />
                </div> */}
            </div>
        </div>

    );
};

export default MobileTopNav;