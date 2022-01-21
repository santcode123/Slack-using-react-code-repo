export const ModalHeader = ({ title, close }: { title?: string; close: () => void }): React.ReactElement => {
  return (
    <div className="modal__header">
      <label>
        <h3>{title}</h3>
      </label>
      <button className="modal__close" onClick={close}>
        X
      </button>
    </div>
  );
};
