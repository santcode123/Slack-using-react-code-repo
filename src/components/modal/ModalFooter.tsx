export const ModalFooter = ({
  title,
  handleSubmit,
}: {
  title?: string;
  handleSubmit: (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}): React.ReactElement => {
  return (
    <div className="modal__footer">
      <button type="submit" className="form__submit__button" onClick={handleSubmit}>
        {title}
      </button>
    </div>
  );
};
