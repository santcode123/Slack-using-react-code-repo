import React from 'react';

//styles
import './ChatBox.css';

// components
import { ChatBoxHeader } from './ChatBoxHeader';
import { ChatBoxFooter } from './ChatBoxFooter';
import { ChatBoxMessageContainer } from './ChatBoxMessageContainer';

//types
import { ActionType, MessageStreamType } from '../../types';

//constants
import { DEFAULT_USER } from '../../Constants';

export const ChatBox = ({
  id,
  displayName,
  type,
  messageStreamConfig,
  onAction,
}: {
  id: string;
  displayName: string;
  messageStreamConfig: MessageStreamType;
  type: string;
  onAction: React.Dispatch<ActionType>;
}) => {
  const handleMessageStream = (value: string) => {
    onAction({
      type: 'messageStream',
      payload: { id: id, name: displayName, messageStreamData: [...messageStreamConfig.messageStreamData, value] },
    });
  };
  return (
    <div className="chat-box">
      <ChatBoxHeader disPlayName={displayName} Icon={messageStreamConfig.Icon} />
      <ChatBoxMessageContainer messageStream={messageStreamConfig.messageStreamData ?? []} userName={DEFAULT_USER} />
      {displayName ? <ChatBoxFooter handleMessageStream={handleMessageStream} disPlayName={displayName} /> : null}
    </div>
  );
};
