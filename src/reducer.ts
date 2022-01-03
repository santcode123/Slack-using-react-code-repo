import { Reducer } from 'react';

//types
import { StateType, ActionType } from 'types';

//material-ui
import AppsIcon from '@mui/icons-material/Apps';

//constants
import { ACTION_TYPE } from './constants';
import { USER_PROFILE_COLLECTION } from 'components/imageContainer/ImageContainer';

const reducer: Reducer<StateType, ActionType> = (state, action) => {
  const payloadId = action.payload.id;

  switch (action.type) {
    case ACTION_TYPE.CHANNEL: {
      return {
        ...state,
        id: payloadId,
        messageStreamConfig: {
          ...state.messageStreamConfig,
          [payloadId]: {
            type: action.type,
            name: action.payload.name,
            messageStreamData: [],
          },
        },
      };
    }
    case ACTION_TYPE.USER: {
      return {
        ...state,
        id: payloadId,
        messageStreamConfig: {
          ...state.messageStreamConfig,
          [payloadId]: {
            type: action.type,
            name: action.payload.name,
            messageStreamData: [],
            Icon: USER_PROFILE_COLLECTION[Math.floor(Math.random() * 10) % 3],
          },
        },
      };
    }

    case ACTION_TYPE.APP: {
      return {
        ...state,
        id: payloadId,
        messageStreamConfig: {
          ...state.messageStreamConfig,
          [payloadId]: { type: action.type, name: action.payload.name, messageStreamData: [], Icon: AppsIcon },
        },
      };
    }

    case ACTION_TYPE.CLICK: {
      return {
        ...state,
        id: payloadId,
      };
    }

    case ACTION_TYPE.MESSAGE_STREAM: {
      return {
        ...state,
        id: payloadId,
        messageStreamConfig: {
          ...state.messageStreamConfig,
          [payloadId]: {
            type: state.messageStreamConfig[payloadId].type,
            name: action.payload.name,
            messageStreamData: action.payload.messageStreamData ?? [],
            Icon: state.messageStreamConfig[payloadId].Icon,
          },
        },
      };
    }

    case ACTION_TYPE.REMOVE: {
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
