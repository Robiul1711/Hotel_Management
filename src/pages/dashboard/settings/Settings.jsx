import MyProfile from '@/components/settingComponents/MyProfile';
import Security from '@/components/settingComponents/Security';
import React, { useState } from 'react';

const Settings = () => {
    
  const [showSecurity, setShowSecurity] = useState(false);


    return (
        <div>
           <h1 className='text-2xl font-semibold mb-6 font-neris'>Settings</h1>
             <div className="flex items-center gap-12 mb-6">
        <button
          onClick={() => setShowSecurity(false)}
          className={`text-lg font-semibold ${
            !showSecurity ? "text-orange-500 underline" : ""
          }`}
        >
          My Profile
        </button>
        <button
          onClick={() => setShowSecurity(true)}
          className={`text-lg font-semibold ${
            showSecurity ? "text-orange-500 underline" : ""
          }`}
        >
          Security
        </button>
      </div>

      {showSecurity ? (
        <Security />
      ) : (
        <MyProfile />
      )}
        </div>
    );
};

export default Settings;