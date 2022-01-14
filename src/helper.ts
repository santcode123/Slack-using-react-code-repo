//types
import { MessageStreamType, MessageStreamConfigType } from 'types';

export function getCurrentTime(): string {
  const currentTime = new Date();

  const hour = currentTime.getHours();
  const minute = currentTime.getMinutes();
  const updatedHour = hour < 10 ? `0${hour}` : `${hour}`;
  const updatedMinute = minute < 10 ? `0${minute}` : `${minute}`;
  return `${updatedHour}:${updatedMinute}`;
}

const predicate = (obj: MessageStreamType, filterType: string) => obj.type === filterType;

export const objectFilter = (obj: MessageStreamConfigType, filterType: string) =>
  Object.keys(obj)
    .filter(key => predicate(obj[key], filterType))
    .reduce((acc, key) => {
      return {
        ...acc,
        [key]: obj[key],
      };
    }, {});

// getMessageData function add the id to each message
export const getMessageData = (messageStreamData: string[]): Array<{ id: string; message: string }> =>
  messageStreamData.map((message, index) => ({ id: index.toString(), message: message }));