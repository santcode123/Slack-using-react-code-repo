import React, { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';

//types
import { ActionType } from 'types';

export const ChatBoxFooter = ({
  sendMessageStream,
  disPlayName,
}: {
  sendMessageStream: (value: string) => void;
  disPlayName: string;
}) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (value.trim()) sendMessageStream(value);
    setValue('');
  };
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };
  return (
    <form className="chat__footer__form" onSubmit={handleSubmit}>
      <input onChange={handleOnChange} type="text" value={value} placeholder={`Message ${disPlayName}`} />
      <button type="submit" className="message__submit__button">
        <SendIcon />
      </button>
    </form>
  );
};
