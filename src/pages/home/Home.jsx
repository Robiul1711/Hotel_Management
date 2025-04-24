
import CommonPageWrapper from '@/lib/CommonPageWrapper';
import React from 'react';
import { Calendar } from "@/components/ui/calendar"
import Banner from '@/components/home/Banner';
import App from '@/components/home/App';
import Service from '@/components/home/Service';
import Stays from '@/components/home/Stays';
import Experience from '@/components/home/Experience';
import Gallery from '@/components/home/Gallery';
import Choose from '@/components/home/Choose';
import SectionBanner from '@/components/home/SectionBanner';
import MobileGallery from '@/components/home/MobileGallery';
import { Helmet } from 'react-helmet-async';
import PromotionalBanner from '@/components/common/PromotionalBanner';


const Home = () => {
  return (
    <div className=''>
      <Helmet>
        <title>HICH</title>
      </Helmet>
      <div className="bg-secondary text-white text-[20px] py-3 text-center">
        <span className="font-plus font-extralight">
          FLAT 50% OFF on 2nd night on our newest escapes. 
        </span>
        <span className="">
           Use code: HICHUNHOTEL
        </span>
      </div>
      <Banner />
      <CommonPageWrapper>
        <App />
        <Service />
        <Stays />
        <PromotionalBanner/>
        <Experience />

        <Gallery />
        <MobileGallery />
        <Choose />
      </CommonPageWrapper>
      <SectionBanner />
    </div >
  );
};

export default Home;