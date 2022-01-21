export const ModalHeader = ({ close, title }: { close: () => void; title?: string }): React.ReactElement => (
  <div className="modal__header">
    <label>
      <h3>{title}</h3>
    </label>
    <button className="modal__close" onClick={close}>
      X
    </button>
  </div>
);
