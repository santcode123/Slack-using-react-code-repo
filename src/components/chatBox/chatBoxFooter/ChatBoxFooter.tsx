import React, { useState, useCallback } from 'react';
import SendIcon from '@mui/icons-material/Send';

export const ChatBoxFooter = ({
  handleSendMessage,
  displayName,
}: {
  handleSendMessage: (value: string) => void;
  displayName: string;
}) => {
  const [value, setValue] = useState('');

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>): void => {
      e.preventDefault();
      if (value.trim()) handleSendMessage(value);
      setValue('');
    },
    [value, handleSendMessage, setValue]
  );
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      setValue(e.target.value);
    },
    [setValue]
  );

  return (
    <form className="chat__footer__form" onSubmit={handleSubmit}>
      <input onChange={handleChange} type="text" value={value} placeholder={`Message ${displayName}`} />
      <button type="submit" className="message__submit__button">
        <SendIcon />
      </button>
    </form>
  );
};
