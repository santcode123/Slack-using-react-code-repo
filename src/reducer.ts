import { Reducer } from 'react';

//types
import { ReducerStateType, BaseActions } from 'types';
import { ACTION_TYPES } from 'actionTypes';

//material-ui
import AppsIcon from '@mui/icons-material/Apps';

//constants
import { USER_PROFILE_COLLECTION } from 'components/imageContainer/ImageContainer';

const CONFIG_TYPE_MAP = {
  CHANNEL: 'channel',
  APP: 'app',
  USER: 'user',
} as const;

const reducer: Reducer<ReducerStateType, BaseActions> = (state, action) => {
  const payloadId = action.payload.id;

  switch (action.type) {
    case ACTION_TYPES.CREATE_CHANNEL: {
      return {
        ...state,
        id: payloadId,
        messageStreamConfig: {
          ...state.messageStreamConfig,
          [payloadId]: {
            ConfigType: CONFIG_TYPE_MAP.CHANNEL,
            name: action.payload.name,
            messageStreamData: [],
          },
        },
      };
    }
    case ACTION_TYPES.CREATE_USER: {
      return {
        ...state,
        id: payloadId,
        messageStreamConfig: {
          ...state.messageStreamConfig,
          [payloadId]: {
            ConfigType: CONFIG_TYPE_MAP.USER,
            name: action.payload.name,
            messageStreamData: [],
            Icon: USER_PROFILE_COLLECTION[Math.floor(Math.random() * 10) % 3],
          },
        },
      };
    }

    case ACTION_TYPES.CREATE_APP: {
      return {
        ...state,
        id: payloadId,
        messageStreamConfig: {
          ...state.messageStreamConfig,
          [payloadId]: {
            ConfigType: CONFIG_TYPE_MAP.APP,
            name: action.payload.name,
            messageStreamData: [],
            Icon: AppsIcon,
          },
        },
      };
    }

    case ACTION_TYPES.SELECT_OPTION: {
      return {
        ...state,
        id: payloadId,
      };
    }

    case ACTION_TYPES.SEND_MESSAGE: {
      return {
        ...state,
        id: payloadId,
        messageStreamConfig: {
          ...state.messageStreamConfig,
          [payloadId]: {
            ...state.messageStreamConfig[payloadId],
            messageStreamData: [...state.messageStreamConfig[payloadId].messageStreamData, action.payload.message],
          },
        },
      };
    }

    case ACTION_TYPES.REMOVE_SIDEBAR_OPTION: {
      const filteredMessageStreamConfig = Object.keys(state.messageStreamConfig)
        .filter(key => key !== payloadId)
        .reduce((acc, key) => {
          return {
            ...acc,
            [key]: state.messageStreamConfig[key],
          };
        }, {});

      return {
        id: '',
        messageStreamConfig: filteredMessageStreamConfig,
      };
    }

    default: {
      return state;
    }
  }
};

export default reducer;
