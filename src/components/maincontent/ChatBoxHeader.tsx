import React from 'react';

// components
import { ChatBoxUserProfile } from './ChatBoxUserProfile';

export const ChatBoxHeader = ({ channelName, userName, id }: { channelName: string; userName: string; id: number }) => {
  const HeaderTitle = channelName ? `#${channelName}` : userName && <ChatBoxUserProfile id={id} userName={userName} />;

  return (
    <div className="chat-header">
      <div className="chat-header-title">
        {HeaderTitle ? HeaderTitle : 'please select any channel or personal chat to start conversation'}
      </div>
      {channelName && (
        <img
          className="chat-header-icon"
          src="https://image.shutterstock.com/image-vector/add-user-male-line-icon-260nw-751010065.jpg"
          alt="add user"
          width={30}
          height={30}
        />
      )}
    </div>
  );
};
