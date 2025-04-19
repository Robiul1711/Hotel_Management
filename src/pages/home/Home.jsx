
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


const Home = () => {
  return (
    <div className=''>
      <Banner />
      <CommonPageWrapper>
        <App />
        <Service />
        <Stays />
        <Experience />
        <Gallery />
        <Choose />
      </CommonPageWrapper>
      <SectionBanner />
    </div>
  );
};

export default Home;