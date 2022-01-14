//styles
import './ChatBox.css';

// components
import { ChatBoxHeader } from 'components/maincontent/chatBoxHeader/ChatBoxHeader';
import { ChatBoxFooter } from './chatBoxFooter/ChatBoxFooter';
import { ChatBoxMessageContainer } from 'components/maincontent/chatBoxMessageContainer/ChatBoxMessageContainer';

//types
import { ActionType, MessageStreamType, ACTION_TYPE } from 'types';

//constants
import { DEFAULT_USER } from '../../constants';

//helper
import { getMessageData } from 'helper';

export const ChatBox = ({
  id,
  displayName,
  messageStreamConfig,
  onAction,
}: {
  id: string;
  displayName: string;
  messageStreamConfig: MessageStreamType;
  onAction: React.Dispatch<ActionType>;
}) => {
  const sendMessageStream = (value: string) => {
    onAction({
      type: ACTION_TYPE.SEND_MESSAGE,
      payload: { id: id, name: displayName, messageStreamData: [...messageStreamConfig.messageStreamData, value] },
    });
  };
  return (
    <div className="chat-box">
      <ChatBoxHeader disPlayName={displayName} Icon={messageStreamConfig.Icon} />
      <ChatBoxMessageContainer
        messageStream={getMessageData(messageStreamConfig.messageStreamData ?? [])}
        userName={DEFAULT_USER}
      />
      {displayName ? <ChatBoxFooter sendMessageStream={sendMessageStream} disPlayName={displayName} /> : null}
    </div>
  );
};
