import React from 'react';

// components
import { ChatBoxUserProfile } from './ChatBoxUserProfile';
import AppsIcon from '@mui/icons-material/Apps';
import { userProfileCollection } from 'components/imageContainer/ImageContainer';

export const ChatBoxHeader = ({
  id,
  disPlayName,
  showProfile,
}: {
  id: string;
  disPlayName?: string;
  showProfile: boolean;
}) => {
  const Icon = id.includes('a') ? AppsIcon : userProfileCollection[parseInt(id.slice(1)) % 3];

  const headerTitle = <ChatBoxUserProfile id={id} disPlayName={disPlayName} Icon={showProfile ? Icon : null} />;

  return (
    <div className="chat-header">
      <div className="chat-header-title">{headerTitle}</div>
      {showProfile === false ? (
        <img
          className="chat-header-icon"
          src="https://image.shutterstock.com/image-vector/add-user-male-line-icon-260nw-751010065.jpg"
          alt="add user"
          width={30}
          height={30}
        />
      ) : null}
    </div>
  );
};
