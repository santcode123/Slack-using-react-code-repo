import React from 'react';
import { MessageRenderer } from './MessageRenderer';

export const ChatBoxMessageContainer = ({ MessageStream, userName }: { MessageStream: string[]; userName: string }) => {
  const currentDateInfo = new Date().toDateString();

  return (
    <div className="chat-box-message-container">
      <div className="chat-box-Message-stream">
        {MessageStream?.map(message => (
          <MessageRenderer message={message} userName={userName} />
        ))}
      </div>
      <div className="chat-box-time-info">{MessageStream.length ? currentDateInfo : null}</div>
    </div>
  );
};
