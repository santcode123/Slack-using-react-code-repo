import React from 'react';

//styles
import './ChatBox.css';

// components
import { ChatBoxHeader } from 'components/maincontent/ChatBoxHeader';
import { ChatBoxFooter } from './ChatBoxFooter/ChatBoxFooter';
import { ChatBoxMessageContainer } from 'components/maincontent/ChatBoxMessageContainer';

//types
import { ActionType, MessageStreamType } from '../../types';

//constants
import { DEFAULT_USER, ACTION_TYPE } from '../../Constants';

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
      type: ACTION_TYPE.MESSAGE_STREAM,
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
