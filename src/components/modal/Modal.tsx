import { useState, useCallback, useRef } from 'react';
import ReactDOM from 'react-dom';

//components
import { ModalHeader } from './ModalHeader';
import { ModalFooter } from './ModalFooter';

//types
import { BaseActions, ModalAndToggleAction } from 'types';
import { ACTION_TYPES } from 'actionTypes';

//helper
import { getActionType } from 'helper';

//constants
import { MODAL_TYPES } from '../../constants';

//style
import './Modal.css';

const MODAL_TYPE_NAME_MAP: { [name in typeof MODAL_TYPES[keyof typeof MODAL_TYPES]]: string } = {
  [MODAL_TYPES.CHANNEL]: 'Channel name',
  [MODAL_TYPES.APP]: 'App name',
  [MODAL_TYPES.USER]: 'User name',
};

const MODAL_INPUT_PLACEHOLDER: { [name: string]: string } = {
  [MODAL_TYPES.CHANNEL]: 'Enter a channel name',
  [MODAL_TYPES.APP]: 'Enter app name',
  [MODAL_TYPES.USER]: 'Enter a username',
};

export const Modal = ({
  onAction,
  modalType,
}: {
  onAction: React.Dispatch<BaseActions | ModalAndToggleAction>;
  modalType: typeof MODAL_TYPES[keyof typeof MODAL_TYPES];
}) => {
  const [value, setValue] = useState<string>();
  const overlayRef = useRef(null);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  }, []);

  const handleClose = useCallback(() => {
    onAction({
      type: ACTION_TYPES.MODAL_ACTION,
      payload: { modalType: undefined },
    });
  }, [onAction]);

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
      e.preventDefault();
      if (value?.trim()) {
        onAction({
          type: getActionType(modalType),
          payload: { id: new Date().getTime().toString(16), name: value },
        });
        handleClose();
      } else alert('input field can not empty');
    },
    [modalType, value, onAction, handleClose]
  );

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    if (e.target === overlayRef.current) {
      handleClose();
    }
  };

  return ReactDOM.createPortal(
    <div ref={overlayRef} className="overlay" onClick={handleClick}>
      <div className="modal">
        <ModalHeader close={handleClose} modalType={modalType} />
        <div className="modal__body">
          <form onSubmit={handleSubmit}>
            <label>
              <p>{MODAL_TYPE_NAME_MAP[modalType]}</p>
            </label>
            <input type="text" value={value} onChange={handleChange} placeholder={MODAL_INPUT_PLACEHOLDER[modalType]} />
          </form>
        </div>
        <ModalFooter modalType={modalType} handleSubmit={handleSubmit} />
      </div>
    </div>,
    document.getElementById('modal')!
  );
};
