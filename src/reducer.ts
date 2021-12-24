import { Reducer } from 'react';
import { StateType, ActionType } from 'types';

const reducer: Reducer<StateType, ActionType> = (state, action) => {
  const numChannels = Object.keys(state.channels).length;
  const numUsers = Object.keys(state.users).length;
  const numApps = Object.keys(state.apps).length;

  switch (action.type) {
    case 'channel': {
      return {
        ...state,
        id: 'c' + (numChannels + 1),
        channels: { ...state.channels, ['c' + (numChannels + 1)]: action.payload.channelName },
        messageStreamMap: { ...state.messageStreamMap, ['c' + (numChannels + 1)]: [] },
      };
    }
    case 'user': {
      return {
        ...state,
        id: 'u' + (numUsers + 1),
        users: { ...state.users, ['u' + (numUsers + 1)]: action.payload.userName },
        messageStreamMap: { ...state.messageStreamMap, ['u' + (numUsers + 1)]: [] },
      };
    }

    case 'app': {
      return {
        ...state,
        id: 'a' + (numApps + 1),
        apps: { ...state.apps, ['a' + (numApps + 1)]: action.payload.appName },
        messageStreamMap: { ...state.messageStreamMap, ['a' + (numApps + 1)]: [] },
      };
    }

    case 'click': {
      return {
        ...state,
        id: action.payload.id,
      };
    }

    case 'messageStream': {
      return {
        ...state,
        messageStreamMap: { ...state.messageStreamMap, [action.payload.id ?? '']: action.payload.messageStream },
      };
    }

    default: {
      return {
        ...state,
        id: '',
        channels: state.channels,
        apps: state.apps,
        users: state.users,
        messageStreamMap: state.messageStreamMap,
      };
    }
  }
};

export default reducer;
