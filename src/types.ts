import OverridableComponent from '@mui/styled-engine-sc';
import SvgIconTypeMap from '@mui/styled-engine-sc';

//constants
import { ACTION_TYPE } from 'Constants';
import React from 'react';

export type IconType = OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
  muiName: string;
};

export type MessageStreamType = {
  type: ACTION_TYPE;
  name?: string;
  messageStreamData: string[];
  Icon?: (() => React.ReactElement) | IconType;
};

export interface MessageStreamConfigType {
  [id: string]: MessageStreamType;
}

export interface ChannelType {
  [id: string]: MessageStreamType;
}

export interface UserType {
  [id: string]: MessageStreamType;
}

export interface AppType {
  [id: string]: MessageStreamType;
}

export type StateType = {
  id?: string;
  messageStreamConfig: MessageStreamConfigType;
};

export type ActionType = {
  type: string;
  payload: {
    id: string;
    name?: string;
    messageStreamData?: string[];
  };
};

export type CustomType = 'app' | 'channel' | 'user';

export type CustomFieldType = {
  type: CustomType;
  customField: ChannelType | UserType | AppType;
};
