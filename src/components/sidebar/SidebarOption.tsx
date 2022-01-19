//types
import { BaseActions, ModalAndToggleAction, IconType, ALL_ACTIONS } from 'types';

export const SidebarOption = ({
  onAction,
  Icon,
  title,
  id,
  className,
  overrides,
}: {
  onAction?: React.Dispatch<BaseActions | ModalAndToggleAction>;
  Icon?: IconType;
  title?: string;
  id: string;
  className?: string;
  overrides?: { removeOption?: string };
}): React.ReactElement => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    onAction?.({
      type: ALL_ACTIONS.SELECT_OPTION,
      payload: { id: id },
    });
  };

  const handleRemove = (e: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {
    e.stopPropagation();
    onAction?.({
      type: ALL_ACTIONS.REMOVE,
      payload: { id: id },
    });
  };
  return (
    <div className={`sidebarOption ${className}`} onClick={handleClick}>
      {Icon ? (
        <>
          <Icon className="sidebarOption__icon" />
          <h3>{title}</h3>
        </>
      ) : (
        <h3 className="sidebarOption__channel">
          <span>#</span>
          {title}
        </h3>
      )}
      <p className={overrides?.removeOption} onClick={handleRemove}>
        X
      </p>
    </div>
  );
};
