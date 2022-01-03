import OverridableComponent from '@mui/styled-engine-sc';
import SvgIconTypeMap from '@mui/styled-engine-sc';

//constants
import { ACTION_TYPE } from './constants';
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

type CreateAction = {
  type: typeof ACTION_TYPE.APP | ACTION_TYPE.USER | ACTION_TYPE.CHANNEL;
  payload: { id: string; name: string };
};
type ClickAndRemoveAction = { type: typeof ACTION_TYPE.CLICK | typeof ACTION_TYPE.REMOVE; payload: { id: string } };
type MessageStreamAction = {
  type: typeof ACTION_TYPE.MESSAGE_STREAM;
  payload: { id: string; name: string; messageStreamData: string[] };
};

export type ActionType = CreateAction | ClickAndRemoveAction | MessageStreamAction;

export type CustomType = typeof ACTION_TYPE.APP | ACTION_TYPE.USER | ACTION_TYPE.CHANNEL;

export type CustomFieldType = {
  type: CustomType;
  customField: ChannelType | UserType | AppType;
};
