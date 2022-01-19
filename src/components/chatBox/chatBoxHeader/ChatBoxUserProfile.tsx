//constants
import { DEFAULT_HEADER_MESSAGE } from '../../../constants';

//types
import { IconType } from 'types';
import React from 'react';

export const ChatBoxUserProfile = ({
  disPlayName,
  Icon,
}: {
  disPlayName: string;
  Icon?: IconType;
}): React.ReactElement => {
  const channelPrefix = disPlayName ? '#' : '';
  return (
    <div className="chat_box__user__profile">
      {Icon ? <Icon /> : channelPrefix}
      {disPlayName ? disPlayName : <h2>{DEFAULT_HEADER_MESSAGE}</h2>}
    </div>
  );
};
