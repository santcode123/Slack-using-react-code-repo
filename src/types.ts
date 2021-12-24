import OverridableComponent from '@mui/styled-engine-sc';
import SvgIconTypeMap from '@mui/styled-engine-sc';

export interface MessageStreamMapType {
  [id: string]: string[] | undefined;
}

export interface ChannelType {
  [id: string]: string | undefined;
}

export interface UserType {
  [id: string]: string | undefined;
}

export interface AppsType {
  [id: string]: string | undefined;
}

enum ActionKind {
  CHANNEL = 'channel',
  USER = 'user',
  APP = 'app',
}

export type StateType = {
  id?: string;
  users: UserType;
  channels: ChannelType;
  apps: AppsType;
  messageStreamMap: MessageStreamMapType;
};

export type ActionType = {
  type: string;
  payload: {
    id?: string;
    userName?: string;
    channelName?: string;
    appName?: string;
    messageStream?: string[];
  };
};

export type IconType = OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
  muiName: string;
};
