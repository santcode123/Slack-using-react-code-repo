import React, { useState, useEffect, useCallback } from 'react';
import './ChatBox.css';

// components
import { ChatBoxHeader } from './ChatBoxHeader';
import { ChatBoxFooter } from './ChatBoxFooter';
import { ChatBoxMessageContainer } from './ChatBoxMessageContainer';

//types
import { ActionType, MessageStreamMapType } from '../../types';

//constants
import { DEFAULT_USER } from '../../Constants';

export const ChatBox = ({
  id,
  channelName,
  messageStreamMap,
  userName,
  appName,
  onAction,
}: {
  id: string;
  channelName?: string;
  messageStreamMap: MessageStreamMapType;
  userName?: string;
  appName?: string;
  onAction: React.Dispatch<ActionType>;
}) => {
  const [messageStream, setMessageStream] = useState(messageStreamMap[id] ?? []);

  let disPlayName = channelName ? channelName : userName;
  disPlayName = appName ? appName : disPlayName;

  useEffect(() => {
    setMessageStream(messageStreamMap[id] ?? []);
  }, [id]);

  useEffect(() => {
    onAction({ type: 'messageStream', payload: { id: id, messageStream: messageStream } });
  }, [messageStream]);

  const handleMessageStream = useCallback((value: string) => {
    setMessageStream((prev: string[]) => [...prev, value]);
  }, []);

  return (
    <div className="chat-box">
      <ChatBoxHeader id={id} disPlayName={disPlayName} showProfile={channelName ? false : true} />
      <ChatBoxMessageContainer MessageStream={messageStream} userName={DEFAULT_USER} />
      {disPlayName ? <ChatBoxFooter handleMessageStream={handleMessageStream} disPlayName={disPlayName} /> : null}
    </div>
  );
};
