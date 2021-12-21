import React from 'react';

//helper
import { getCurrentTime } from '../helper';

export const MessageRenderer = ({ message, userName }: { message: string; userName: string }): React.ReactElement => {
  return (
    <div className="message-rendered-box">
      <img
        className="ml-1 mr-1"
        src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png"
        alt="User profile"
        width={30}
        height={30}
      />
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
