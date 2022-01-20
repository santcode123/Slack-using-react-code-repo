import React from 'react';

//constants
import { MODAL_TYPES } from '../../constants';

const MODAL_SUBMIT_BUTTON_TEXT: { [name in typeof MODAL_TYPES[keyof typeof MODAL_TYPES]]: string } = {
  [MODAL_TYPES.USER]: 'Create personal chat',
  [MODAL_TYPES.CHANNEL]: 'Create a channel',
  [MODAL_TYPES.APP]: 'Create a app',
};
export const ModalFooter = ({
  modalType,
  handleSubmit,
}: {
  modalType: typeof MODAL_TYPES[keyof typeof MODAL_TYPES];
  handleSubmit: (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}): React.ReactElement => {
  return (
    <div className="modal__footer">
      <button type="submit" className="form__submit__button" onClick={handleSubmit}>
        {MODAL_SUBMIT_BUTTON_TEXT[modalType]}
      </button>
    </div>
  );
};
