import React from 'react';

export function getCurrentTime(): string {
  const currentTime = new Date();

  const hour = currentTime.getHours();
  const minute = currentTime.getMinutes();
  const updatedHour = hour < 10 ? `0${hour}` : `${hour}`;
  const updatedMinute = minute < 10 ? `0${minute}` : `${minute}`;
  return `${updatedHour}:${updatedMinute}`;
}
