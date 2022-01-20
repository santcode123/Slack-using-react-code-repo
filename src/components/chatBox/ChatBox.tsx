import { useCallback, useMemo } from 'react';

// components
import { ChatBoxHeader } from 'components/chatBox/chatBoxHeader/ChatBoxHeader';
import { ChatBoxFooter } from './chatBoxFooter/ChatBoxFooter';
import { ChatBoxMessageContainer } from 'components/chatBox/chatBoxMessageContainer/ChatBoxMessageContainer';

//types
import { BaseActions, MessageStreamType } from 'types';
import { ACTION_TYPES } from 'actionTypes';

//constants
import { DEFAULT_USER } from '../../constants';

//helper
import { getMessageData } from 'helper';

//styles
import './ChatBox.css';

export const ChatBox = ({
  id,
  messageStreamConfig,
  onAction,
}: {
  id: string;
  messageStreamConfig?: MessageStreamType;
  onAction: React.Dispatch<BaseActions>;
}) => {
  const handleSendMessage = useCallback(
    (value: string) => {
      onAction({
        type: ACTION_TYPES.SEND_MESSAGE,
        payload: { id: id, message: value },
      });
    },
    [id, onAction]
  );

  const messageStream = useMemo(
    () => getMessageData(messageStreamConfig?.messageStreamData ?? []),
    [messageStreamConfig]
  );

  const displayName = messageStreamConfig?.name;

  return (
    <div className="chat-box">
      <ChatBoxHeader displayName={displayName} Icon={messageStreamConfig?.Icon} />
      <ChatBoxMessageContainer messageStream={messageStream} userName={DEFAULT_USER} />
      {displayName ? <ChatBoxFooter handleSendMessage={handleSendMessage} displayName={displayName} /> : null}
    </div>
  );
};
