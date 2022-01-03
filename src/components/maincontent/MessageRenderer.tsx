import React from 'react';

//component
import { UserProfile } from 'components/imageContainer/ImageContainer';

//helper
import { getCurrentTime } from 'components/helper';
import { MessageOption } from 'components/MessageOption';

export const MessageRenderer = ({ message, userName }: { message: string; userName: string }): React.ReactElement => {
  return (
    <div className="message__rendered__box">
      <UserProfile />
      <div className="message__renderer">
        <div>
          <span>{userName}</span>
          <span className="username__time__gap">{getCurrentTime()}</span>
        </div>
        <div className="message__body">{message}</div>
      </div>
      <div className="message__options">
        <MessageOption />
      </div>
    </div>
  );
};
