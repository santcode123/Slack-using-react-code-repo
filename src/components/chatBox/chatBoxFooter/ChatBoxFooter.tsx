import React, { useState, useCallback } from 'react';
import SendIcon from '@mui/icons-material/Send';

export const ChatBoxFooter = ({
  sendMessageStream,
  disPlayName,
}: {
  sendMessageStream: (value: string) => void;
  disPlayName: string;
}) => {
  const [value, setValue] = useState('');

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>): void => {
      e.preventDefault();
      if (value.trim()) sendMessageStream(value);
      setValue('');
    },
    [value, sendMessageStream, setValue]
  );
  const handleChanges = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      setValue(e.target.value);
    },
    [setValue]
  );

  return (
    <form className="chat__footer__form" onSubmit={handleSubmit}>
      <input onChange={handleChanges} type="text" value={value} placeholder={`Message ${disPlayName}`} />
      <button type="submit" className="message__submit__button">
        <SendIcon />
      </button>
    </form>
  );
};
