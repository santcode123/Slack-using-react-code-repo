import React from 'react';

// components
import { ChatBoxUserProfile } from './ChatBoxUserProfile';

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
      {Icon || !disPlayName ? null : (
        <img
          className="chat__header__icon"
          src="https://image.shutterstock.com/image-vector/add-user-male-line-icon-260nw-751010065.jpg"
          alt="add user"
          width={30}
          height={30}
        />
      )}
    </div>
  );
};
