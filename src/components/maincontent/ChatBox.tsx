import React, { useState, useEffect } from 'react';
import './ChatBox.css';

// components
import { ChatBoxHeader } from './ChatBoxHeader';
import { ChatBoxFooter } from './ChatBoxFooter';
import { ChatBoxMessageContainer } from './ChatBoxMessageContainer';

//types
import { MessageStreamMapType } from '../../types';

//constants
import { DEFAULT_USER } from '../../constants';

export const ChatBox = ({
  id,
  channelName,
  MessageStreamMap,
  setMessageStreamMap,
  userName,
}: {
  id: number;
  channelName: string;
  MessageStreamMap: MessageStreamMapType;
  setMessageStreamMap: React.Dispatch<React.SetStateAction<MessageStreamMapType>>;
  userName: string;
}) => {
  const [MessageStream, setMessageStream] = useState(MessageStreamMap[id] ?? []);

  useEffect(() => {
    setMessageStream(MessageStreamMap[id] ?? []);
  }, [id]);

  useEffect(() => {
    setMessageStreamMap((prev: MessageStreamMapType) => ({ ...prev, [id]: MessageStream }));
  }, [MessageStream]);

  return (
    <div className="chat-box">
      <ChatBoxHeader channelName={channelName} userName={userName} id={id} />
      <ChatBoxMessageContainer MessageStream={MessageStream} userName={DEFAULT_USER} />
      {(userName || channelName) && <ChatBoxFooter setMessageStream={setMessageStream} />}
    </div>
  );
};
