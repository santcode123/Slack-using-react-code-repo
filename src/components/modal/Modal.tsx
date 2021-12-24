import { useState, useCallback } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

//types
import { ActionType } from 'types';

//constants
import { USER, CHANNEL, APP } from '../../Constants';

export const Modal = ({
  close,
  onAction,
  modalType,
}: {
  close: () => void;
  onAction: React.Dispatch<ActionType>;
  modalType: string;
}) => {
  const [value, setValue] = useState<string>('');

  const handleOnchange = useCallback((e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  }, []);

  const handleClose = useCallback(() => {
    close();
  }, []);
  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>): void => {
      e.preventDefault();
      if (value) {
        if (modalType === CHANNEL) {
          onAction({ type: 'channel', payload: { channelName: value } });
        }
        if (modalType === USER) {
          onAction({ type: 'user', payload: { userName: value } });
        }

        if (modalType === APP) {
          onAction({ type: 'app', payload: { appName: value } });
        }

        close();
      } else alert('input field can not empty');
    },
    [modalType, value, onAction, close]
  );

  return ReactDOM.createPortal(
    <div className="modal">
      <button className="modal__close" onClick={handleClose}>
        X
      </button>
      <form onSubmit={handleSubmit}>
        <label>
          <h2>{modalType === USER ? 'Start a new personal chat' : `Create a ${modalType}`}</h2>
          <p>{modalType} name</p>
        </label>
        <input type="text" value={value} onChange={handleOnchange} placeholder={`Enter name of ${modalType}`} />
        <button type="submit" className="form__submit__button">
          {`Create ${modalType === 'user' ? 'personal chat' : modalType}`}
        </button>
      </form>
    </div>,
    document.getElementById('modal')!
  );
};
