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

export const Modal = ({
  onAction,
  modalType,
  headerTitle,
  footerTitle,
  modalBodyName,
  inputPlaceHolder,
}: {
  onAction: React.Dispatch<BaseActions | ModalAndToggleAction>;
  modalType: typeof MODAL_TYPES[keyof typeof MODAL_TYPES];
  headerTitle?: string;
  footerTitle?: string;
  modalBodyName?: string;
  inputPlaceHolder?: string;
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
        <ModalHeader close={handleClose} title={headerTitle} />
        <div className="modal__body">
          <form onSubmit={handleSubmit}>
            <label>
              <p>{modalBodyName}</p>
            </label>
            <input type="text" value={value} onChange={handleChange} placeholder={inputPlaceHolder} />
          </form>
        </div>
        <ModalFooter handleSubmit={handleSubmit} title={footerTitle} />
      </div>
    </div>,
    document.getElementById('modal')!
  );
};
