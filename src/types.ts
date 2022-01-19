//material-ui
import OverridableComponent from '@mui/styled-engine-sc';
import SvgIconTypeMap from '@mui/styled-engine-sc';

//constants
import { APP, CHANNEL, USER } from './constants';

export type IconType = OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
  muiName: string;
};

export enum ALL_ACTIONS {
  CREATE_CHANNEL = 'createChannel',
  CREATE_USER = 'createUser',
  CREATE_APP = 'createApp',
  SELECT_OPTION = 'selectOption',
  SEND_MESSAGE = 'sendMessage',
  REMOVE = 'remove',
  MODAL_ACTION = 'modalAction',
  TOGGLE_ACTION = 'toggleAction',
}

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
  type: typeof ALL_ACTIONS.CREATE_APP | ALL_ACTIONS.CREATE_CHANNEL | ALL_ACTIONS.CREATE_USER;
  payload: { id: string; name: string };
};
type SelectAndRemoveAction = {
  type: typeof ALL_ACTIONS.SELECT_OPTION | ALL_ACTIONS.REMOVE;
  payload: { id: string };
};
type MessageStreamAction = {
  type: typeof ALL_ACTIONS.SEND_MESSAGE;
  payload: { id: string; messageStreamData: string[] };
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
