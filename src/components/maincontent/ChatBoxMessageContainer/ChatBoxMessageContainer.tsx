import React from 'react';

//components
import { MessageRenderer } from '../MessageRenderer';

export const ChatBoxMessageContainer = ({
  messageStream,
  userName,
}: {
  messageStream: Array<{ id: string; message: string }>;
  userName: string;
}) => {
  const currentDateInfo = new Date().toDateString();

  return (
    <div className="chat__box__message__container">
      <div className="chat__box__Message__stream">
        {messageStream?.map(data => (
          <MessageRenderer key={data.id} message={data.message} userName={userName} />
        ))}
      </div>
      <div className="chat__box__time__info">{messageStream.length ? <div> {currentDateInfo} </div> : null}</div>
    </div>
  );
};
