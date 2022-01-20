import React, { useCallback } from 'react';

// constants
import { MODAL_TYPES } from '../../constants';

const MODAL_HEADER_TITLE: { [name in typeof MODAL_TYPES[keyof typeof MODAL_TYPES]]: string } = {
  [MODAL_TYPES.USER]: 'Start a new personal chat',
  [MODAL_TYPES.CHANNEL]: 'Create a new channel',
  [MODAL_TYPES.APP]: 'Create a new app',
};

export const ModalHeader = ({
  modalType,
  close,
}: {
  modalType: typeof MODAL_TYPES[keyof typeof MODAL_TYPES];
  close: () => void;
}): React.ReactElement => {
  const handleClose = useCallback(() => {
    close();
  }, [close]);

  return (
    <div className="modal__header">
      <label>
        <h3>{MODAL_HEADER_TITLE[modalType]}</h3>
      </label>
      <button className="modal__close" onClick={handleClose}>
        X
      </button>
    </div>
  );
};
