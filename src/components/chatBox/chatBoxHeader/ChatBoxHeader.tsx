// components
import { ChatBoxUserProfile } from './ChatBoxUserProfile';
import { ChatBoxHeaderRight } from 'components/chatBox/chatBoxHeader/ChatBoxHeaderRight';

//types
import { IconType } from 'types';

export const ChatBoxHeader = ({
  displayName = '',
  Icon,
}: {
  displayName?: string;
  Icon: (() => React.ReactElement) | IconType;
}) => {
  const headerTitle = <ChatBoxUserProfile displayName={displayName} Icon={Icon} />;

  return (
    <div className="chat_header">
      <div className="chat_header_title">{headerTitle}</div>
      {Icon || !displayName ? null : <ChatBoxHeaderRight />}
    </div>
  );
};
