import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

//types
import { handlemainContentType } from '../../types';

//constants
import { USER, CHANNEL } from '../../constants';

export const Modal = ({
  Close,
  handleMainContent,
  modalType,
}: {
  Close: () => void;
  handleMainContent: handlemainContentType;
  modalType: string;
}) => {
  const [value, setValue] = useState<string>('');

  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (value) {
      if (modalType === CHANNEL) handleMainContent({ channelName: value, userName: '' });
      else handleMainContent({ channelName: '', userName: value });
      Close();
    } else alert('input field can not empty');
  };

  return ReactDOM.createPortal(
    <div className="modal">
      <button className="modal-close" onClick={() => Close()}>
        X
      </button>
      <form onSubmit={handleSubmit}>
        <label>
          <p>{modalType === USER ? 'Start a new personal chat' : 'Create a new channel'}</p>
          <p>{modalType === USER ? 'User Name' : 'Channel Name'}</p>
          <input type="text" value={value} onChange={handleOnchange} placeholder="enter here..." />
        </label>
        <button type="submit" className="form-submit-button">
          Submit
        </button>
      </form>
    </div>,
    document.getElementById('modal')!
  );
};
