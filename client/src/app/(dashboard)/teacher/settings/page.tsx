import SharedNotificationSettings from '@/components/SharedNotificationSettings';
import React from 'react'

const UserSettings = () => {
  return  <div className="w-3/5">
   <SharedNotificationSettings
    title="Teacher Settings"
    subtitle="Manage your teacher notification settings"
   />
    </div>
  
};

export default UserSettings;