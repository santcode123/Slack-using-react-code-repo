import React from 'react';

//constants
import { DEFAULT_HEADER_MESSAGE } from 'Constants';

//types
import { IconType } from 'types';

export const ChatBoxUserProfile = ({
  id,
  Icon,
  disPlayName,
}: {
  id: string;
  disPlayName?: string;
  Icon?: IconType;
}) => {
  const channelPrefix = disPlayName ? '#' : '';
  return (
    <div className="chat_box__user__profile">
      {Icon ? <Icon /> : channelPrefix}
      {disPlayName ? disPlayName : <h2>{DEFAULT_HEADER_MESSAGE}</h2>}
    </div>
  );
};
