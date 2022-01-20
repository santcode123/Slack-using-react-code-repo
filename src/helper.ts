//types
import { MessageStreamType, MessageStreamConfigType } from 'types';
import { ACTION_TYPES } from 'actionTypes';

//constants
import { APP, CHANNEL, MODAL_TYPES } from './constants';

export function getCurrentTime(): string {
  const currentTime = new Date();
  const hour = currentTime.getHours();
  const minute = currentTime.getMinutes();
  const updatedHour = hour < 10 ? `0${hour}` : `${hour}`;
  const updatedMinute = minute < 10 ? `0${minute}` : `${minute}`;
  return `${updatedHour}:${updatedMinute}`;
}

const predicate = (obj: MessageStreamType, filterType: string) => obj.ConfigType === filterType;

export const objectFilter = (obj: MessageStreamConfigType, filterType: string) =>
  Object.keys(obj)
    .filter(key => predicate(obj[key], filterType))
    .reduce((acc, key) => {
      return {
        ...acc,
        [key]: obj[key],
      };
    }, {});

export const getMessageData = (messageStreamData: string[]): Array<{ id: string; message: string }> =>
  messageStreamData.map((message, index) => ({ id: index.toString(), message: message }));

export const getActionType = (
  modalType: typeof MODAL_TYPES[keyof typeof MODAL_TYPES]
): ACTION_TYPES.CREATE_APP | ACTION_TYPES.CREATE_CHANNEL | ACTION_TYPES.CREATE_USER => {
  switch (modalType) {
    case CHANNEL: {
      return ACTION_TYPES.CREATE_CHANNEL;
    }
    case APP: {
      return ACTION_TYPES.CREATE_APP;
    }
    default: {
      return ACTION_TYPES.CREATE_USER;
    }
  }
};
