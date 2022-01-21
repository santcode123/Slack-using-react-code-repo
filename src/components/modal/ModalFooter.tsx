import React from 'react';

export const ModalFooter = ({
  handleSubmit,
  title,
}: {
  handleSubmit: (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  title?: string;
}): React.ReactElement => (
  <div className="modal__footer">
    <button type="submit" className="form__submit__button" onClick={handleSubmit}>
      {title}
    </button>
  </div>
);
