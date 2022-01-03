import { useState, useCallback, useRef } from 'react';
import ReactDOM from 'react-dom';

//components
import { ModalHeader } from './ModalHeader';
import { ModalFooter } from './ModalFooter';

//types
import { ActionType, CustomType } from 'types';

//constants
import { ACTION_TYPE } from 'Constants';

//style
import './Modal.css';

const MODAL_TYPE_NAME_MAP: { [name: string]: string } = {
  channel: 'Channel name',
  app: 'App name',
  user: 'User name',
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
  modalType: CustomType;
}) => {
  const [value, setValue] = useState<string>();
  const overlayRef = useRef(null);

  const handleOnchange = useCallback((e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  }, []);

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
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

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    if (e.target === overlayRef.current) close();
  };

  return ReactDOM.createPortal(
    <div ref={overlayRef} className="overlay" onClick={handleClick}>
      <div className="modal">
        <ModalHeader close={close} modalType={modalType} />
        <div className="modal__body">
          <form onSubmit={handleSubmit}>
            <label>
              <p>{MODAL_TYPE_NAME_MAP[modalType]}</p>
            </label>
            <input
              type="text"
              value={value}
              onChange={handleOnchange}
              placeholder={MODAL_INPUT_PLACEHOLDER[modalType]}
            />
          </form>
        </div>
        <ModalFooter modalType={modalType} handleSubmit={handleSubmit} />
      </div>
    </div>,
    document.getElementById('modal')!
  );
};
