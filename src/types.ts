//material-ui
import OverridableComponent from '@mui/styled-engine-sc';
import SvgIconTypeMap from '@mui/styled-engine-sc';

//constants
import { APP, CHANNEL, USER } from './constants';
import { ACTION_TYPES } from 'actionTypes';

export type IconType = OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
  muiName: string;
};

export type MessageStreamType = {
  ConfigType: string;
  name?: string;
  messageStreamData: string[];
  Icon?: (() => React.ReactElement) | IconType;
};

export interface MessageStreamConfigType {
  [id: string]: MessageStreamType;
}
export type ReducerStateType = {
  id?: string;
  messageStreamConfig: MessageStreamConfigType;
};

export interface ChannelType {
  [id: string]: MessageStreamType;
}

export interface UserType {
  [id: string]: MessageStreamType;
}

export interface AppType {
  [id: string]: MessageStreamType;
}

type CreateAction = {
  type: typeof ACTION_TYPES.CREATE_APP | typeof ACTION_TYPES.CREATE_CHANNEL | typeof ACTION_TYPES.CREATE_USER;
  payload: { id: string; name: string };
};
type SelectAndRemoveAction = {
  type: typeof ACTION_TYPES.SELECT_OPTION | ACTION_TYPES.REMOVE_SIDEBAR_OPTION;
  payload: { id: string };
};
type MessageStreamAction = {
  type: typeof ACTION_TYPES.SEND_MESSAGE;
  payload: { id: string; message: string };
};

export type BaseActions = CreateAction | SelectAndRemoveAction | MessageStreamAction;

export type CustomType = typeof CHANNEL | typeof APP | typeof USER;

export type CustomFieldType = {
  id: number;
  type: CustomType;
  customField: ChannelType | UserType | AppType;
};

export type ModalAndToggleAction = {
  type: string;
  payload: { modalType?: CustomType; toggleType?: CustomType };
};
