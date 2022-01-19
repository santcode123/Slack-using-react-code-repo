//types
import { MessageStreamType, MessageStreamConfigType, ALL_ACTIONS } from 'types';

//constants
import { APP, CHANNEL } from './constants';

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
  modalType: string | undefined
): ALL_ACTIONS.CREATE_APP | ALL_ACTIONS.CREATE_CHANNEL | ALL_ACTIONS.CREATE_USER => {
  switch (modalType) {
    case CHANNEL: {
      return ALL_ACTIONS.CREATE_CHANNEL;
    }
    case APP: {
      return ALL_ACTIONS.CREATE_APP;
    }
    default: {
      return ALL_ACTIONS.CREATE_USER;
    }
  }
};
