import React, { useCallback } from 'react';

const MODAL_HEADER_TITLE: { [name: string]: string } = {
  user: 'Start a new personal chat',
  channel: 'Create a new channel',
  app: 'Create a new app',
};

export const ModalHeader = ({ modalType, close }: { modalType?: string; close: () => void }): React.ReactElement => {
  const handleClose = useCallback(() => {
    close();
  }, [close]);

  return (
    <div className="modal__header">
      <label>
        <h3>{MODAL_HEADER_TITLE[modalType ?? '']}</h3>
      </label>
      <button className="modal__close" onClick={handleClose}>
        X
      </button>
    </div>
  );
};
