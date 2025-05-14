import MyProfile from '@/components/settingComponents/MyProfile';
import React from 'react';

const Settings = () => {
    return (
        <div>
           <h1 className='text-2xl font-semibold mb-6 font-neris'>Settings</h1>
            <div>
                <MyProfile />
            </div>
        </div>
    );
};

export default Settings;