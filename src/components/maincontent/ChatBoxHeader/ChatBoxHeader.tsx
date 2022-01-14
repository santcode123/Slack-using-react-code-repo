import React from 'react';

// components
import { ChatBoxUserProfile } from 'components/maincontent/ChatBoxUserProfile';
import { ChatBoxHeaderRight } from 'components/maincontent/chatBoxHeader/ChatBoxHeaderRight';

//types
import { IconType } from 'types';

export const ChatBoxHeader = ({
  disPlayName,
  Icon,
}: {
  disPlayName?: string;
  Icon?: React.ReactElement | IconType;
}) => {
  const headerTitle = <ChatBoxUserProfile disPlayName={disPlayName} Icon={Icon} />;

  return (
    <div className="chat_header">
      <div className="chat_header_title">{headerTitle}</div>
      {Icon || !disPlayName ? null : <ChatBoxHeaderRight />}
    </div>
  );
};
