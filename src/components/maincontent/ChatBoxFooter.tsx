import React, { useState } from 'react';

//components
import { MessageSenderIcon } from '../imageContainer/ImageConatiner';

export const ChatBoxFooter = ({ setMessageStream }: { setMessageStream: Function }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setMessageStream((prev: Array<string>) => [...(prev ?? []), value]);
    setValue('');
  };
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };
  return (
    <form className="chat-box-form" onSubmit={handleSubmit}>
      <input className="chart-box-form-input" onChange={handleOnChange} type="text" value={value} />
      <button type="submit" className="message-submit-button">
        <MessageSenderIcon />
      </button>
    </form>
  );
};
