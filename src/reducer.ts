import { Reducer } from 'react';

//types
import { ReducerStateType, BaseActions } from 'types';

//material-ui
import AppsIcon from '@mui/icons-material/Apps';

//constants
import { ALL_ACTIONS } from 'types';
import { USER_PROFILE_COLLECTION } from 'components/imageContainer/ImageContainer';

const ConfigTypeMap = {
  CHANNEL: 'channel',
  APP: 'app',
  USER: 'user',
};

const reducer: Reducer<ReducerStateType, BaseActions> = (state, action) => {
  const payloadId = action.payload.id;

  switch (action.type) {
    case ALL_ACTIONS.CREATE_CHANNEL: {
      return {
        ...state,
        id: payloadId,
        messageStreamConfig: {
          ...state.messageStreamConfig,
          [payloadId]: {
            ConfigType: ConfigTypeMap.CHANNEL,
            name: action.payload.name,
            messageStreamData: [],
          },
        },
      };
    }
    case ALL_ACTIONS.CREATE_USER: {
      return {
        ...state,
        id: payloadId,
        messageStreamConfig: {
          ...state.messageStreamConfig,
          [payloadId]: {
            ConfigType: ConfigTypeMap.USER,
            name: action.payload.name,
            messageStreamData: [],
            Icon: USER_PROFILE_COLLECTION[Math.floor(Math.random() * 10) % 3],
          },
        },
      };
    }

    case ALL_ACTIONS.CREATE_APP: {
      return {
        ...state,
        id: payloadId,
        messageStreamConfig: {
          ...state.messageStreamConfig,
          [payloadId]: {
            ConfigType: ConfigTypeMap.APP,
            name: action.payload.name,
            messageStreamData: [],
            Icon: AppsIcon,
          },
        },
      };
    }

    case ALL_ACTIONS.SELECT_OPTION: {
      return {
        ...state,
        id: payloadId,
      };
    }

    case ALL_ACTIONS.SEND_MESSAGE: {
      return {
        ...state,
        id: payloadId,
        messageStreamConfig: {
          ...state.messageStreamConfig,
          [payloadId]: {
            ...state.messageStreamConfig[payloadId],
            messageStreamData: action.payload.messageStreamData ?? [],
          },
        },
      };
    }

    case ALL_ACTIONS.REMOVE: {
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
