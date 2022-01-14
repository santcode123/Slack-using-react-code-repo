import React from 'react';

//constants
import { DEFAULT_HEADER_MESSAGE } from '../../constants';

//types
import { IconType } from 'types';

export const ChatBoxUserProfile = ({ Icon, disPlayName }: { disPlayName?: string; Icon?: IconType }) => {
  const channelPrefix = disPlayName ? '#' : '';
  return (
    <div className="chat_box__user__profile">
      {Icon ? <Icon /> : channelPrefix}
      {disPlayName ? disPlayName : <h2>{DEFAULT_HEADER_MESSAGE}</h2>}
    </div>
  );
};