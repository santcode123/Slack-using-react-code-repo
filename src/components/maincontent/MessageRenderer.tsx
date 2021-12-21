import React from 'react';

//component
import { UserProfile } from '../imageContainer/ImageConatiner';

//helper
import { getCurrentTime } from '../helper';

export const MessageRenderer = ({ message, userName }: { message: string; userName: string }): React.ReactElement => {
  return (
    <div className="message-rendered-box">
      <UserProfile />
      <div className="message-rendered">
        <div>
          <span className="username-time-gap">{userName}</span>
          <span>{getCurrentTime()}</span>
        </div>
        <div>{message}</div>
      </div>
    </div>
  );
};
