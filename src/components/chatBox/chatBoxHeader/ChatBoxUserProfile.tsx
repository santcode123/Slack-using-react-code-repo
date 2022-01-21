//constants
import { DEFAULT_HEADER_MESSAGE } from '../../../constants';

//types
import { IconType } from 'types';
import React from 'react';

export const ChatBoxUserProfile = ({
  displayName,
  Icon,
}: {
  displayName: string;
  Icon?: (() => React.ReactElement) | IconType;
}): React.ReactElement => {
  const channelPrefix = displayName ? '#' : '';
  return (
    <div className="chat_box__user__profile">
      {Icon ? <Icon /> : channelPrefix}
      {displayName ? displayName : <h2>{DEFAULT_HEADER_MESSAGE}</h2>}
    </div>
  );
};
