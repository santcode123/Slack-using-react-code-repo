//material-ui
import OverridableComponent from '@mui/styled-engine-sc';
import SvgIconTypeMap from '@mui/styled-engine-sc';

export type IconType = OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
  muiName: string;
};

export enum ACTION_TYPE {
  CHANNEL = 'channel',
  USER = 'user',
  APP = 'app',
  CLICK = 'click',
  SEND_MESSAGE = 'sendMessage',
  REMOVE = 'remove',
  MODAL_ACTION = 'modalAction',
  TOGGLE_ACTION = 'toggleAction',
}

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
  type: typeof ACTION_TYPE.SEND_MESSAGE;
  payload: { id: string; name: string; messageStreamData: string[] };
};

export type ActionType = CreateAction | ClickAndRemoveAction | MessageStreamAction;

export type CustomType = typeof ACTION_TYPE.APP | ACTION_TYPE.USER | ACTION_TYPE.CHANNEL;

export type CustomFieldType = {
  id: number;
  type: CustomType;
  customField: ChannelType | UserType | AppType;
};

export type ModalAndToggleAction = {
  type: string;
  payload: { type: CustomType | undefined };
};
