import React from 'react';
import { MessageRenderer } from './MessageRenderer';

export const ChatBoxMessageContainer = ({ MessageStream, userName }: { MessageStream: string[]; userName: string }) => {
  const currentDateInfo = new Date().toDateString();

  return (
    <div className="chat__box__message__container">
      <div className="chat__box__Message__stream">
        {MessageStream?.map(message => (
          <MessageRenderer message={message} userName={userName} />
        ))}
      </div>
      <div className="chat__box__time__info">{MessageStream.length ? <div> {currentDateInfo} </div> : null}</div>
    </div>
  );
};
