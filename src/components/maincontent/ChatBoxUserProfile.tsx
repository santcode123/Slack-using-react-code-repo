import React from 'react';
import { userProfileCollection } from '../imageContainer/ImageConatiner';

export const ChatBoxUserProfile = ({ userName, id }: { userName: string; id: number }) => {
  const ProfileImage = userProfileCollection[id % 3];
  return userName ? (
    <div className="chatbox-userprofile-container">
      <ProfileImage />
      {userName}
    </div>
  ) : null;
};
