import { useCallback, useMemo } from 'react';

// components
import { ChatBoxHeader } from 'components/chatBox/chatBoxHeader/ChatBoxHeader';
import { ChatBoxFooter } from './chatBoxFooter/ChatBoxFooter';
import { ChatBoxMessageContainer } from 'components/chatBox/chatBoxMessageContainer/ChatBoxMessageContainer';

//types
import { BaseActions, MessageStreamType, ALL_ACTIONS } from 'types';

//constants
import { DEFAULT_USER } from '../../constants';

//helper
import { getMessageData } from 'helper';

//styles
import './ChatBox.css';

export const ChatBox = ({
  id,
  displayName,
  messageStreamConfig,
  onAction,
}: {
  id: string;
  displayName: string;
  messageStreamConfig: MessageStreamType;
  onAction: React.Dispatch<BaseActions>;
}) => {
  const sendMessageStream = useCallback(
    (value: string) => {
      onAction({
        type: ALL_ACTIONS.SEND_MESSAGE,
        payload: { id: id, messageStreamData: [...messageStreamConfig.messageStreamData, value] },
      });
    },
    [messageStreamConfig, id, onAction]
  );

  const messageStream = useMemo(
    () => getMessageData(messageStreamConfig.messageStreamData ?? []),
    [messageStreamConfig.messageStreamData]
  );
  return (
    <div className="chat-box">
      <ChatBoxHeader disPlayName={displayName} Icon={messageStreamConfig.Icon} />
      <ChatBoxMessageContainer messageStream={messageStream} userName={DEFAULT_USER} />
      {displayName ? <ChatBoxFooter sendMessageStream={sendMessageStream} disPlayName={displayName} /> : null}
    </div>
  );
};
