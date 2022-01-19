import React from 'react';

const MODAL_SUBMIT_BUTTON_TEXT: { [name: string]: string } = {
  user: 'Create personal chat',
  channel: 'Create a channel',
  app: 'Create a app',
};
export const ModalFooter = ({
  modalType,
  handleSubmit,
}: {
  modalType?: string;
  handleSubmit: (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}): React.ReactElement => {
  return (
    <div className="modal__footer">
      <button type="submit" className="form__submit__button" onClick={handleSubmit}>
        {MODAL_SUBMIT_BUTTON_TEXT[modalType ?? '']}
      </button>
    </div>
  );
};
