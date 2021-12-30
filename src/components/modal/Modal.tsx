import { useState, useCallback, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';

//types
import { ActionType } from 'types';

//constants
import { USER } from 'Constants';

//style
import './Modal.css';

const MODAL_TYPE_NAME_MAP: { [name: string]: string } = {
  channel: 'Channel',
  app: 'App',
  user: 'User',
};

const MODAL_INPUT_PLACEHOLDER: { [name: string]: string } = {
  channel: 'Enter a channel name',
  app: 'Enter app name',
  user: 'Enter a username',
};

export const Modal = ({
  close,
  onAction,
  modalType,
}: {
  close: () => void;
  onAction: React.Dispatch<ActionType>;
  modalType: string;
}) => {
  const [value, setValue] = useState<string>();
  const overlayRef = useRef(null);

  const handleOnchange = useCallback((e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  }, []);

  const handleClose = useCallback(() => {
    close();
  }, []);

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>): void => {
      e.preventDefault();
      if (value?.trim()) {
        onAction({
          type: modalType,
          payload: { id: new Date().getTime().toString(16), name: value },
        });
        close();
      } else alert('input field can not empty');
    },
    [modalType, value, onAction, close]
  );

  const handleClick = (e: MouseEvent): void => {
    if (e.target === overlayRef.current) close();
  };

  window.addEventListener('click', handleClick);

  useEffect(() => {
    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return ReactDOM.createPortal(
    <div ref={overlayRef} className="overlay">
      <div className="modal">
        <div className="modal__header">
          <label>
            <h3>{modalType === USER ? 'Start a new personal chat' : `Create a New ${modalType}`}</h3>
          </label>
          <button className="modal__close" onClick={handleClose}>
            X
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <label>
            <p>{MODAL_TYPE_NAME_MAP[modalType]} name</p>
          </label>
          <input type="text" value={value} onChange={handleOnchange} placeholder={MODAL_INPUT_PLACEHOLDER[modalType]} />
          <button type="submit" className="form__submit__button">
            {`Create ${modalType === 'user' ? 'personal chat' : modalType}`}
          </button>
        </form>
      </div>
    </div>,
    document.getElementById('modal')!
  );
};
