import React from 'react';

//types
import { ActionType, IconType } from '../../types';

export const SidebarOption = ({
  onAction,
  Icon,
  title,
  id,
  className,
  overrides,
}: {
  onAction?: React.Dispatch<ActionType>;
  Icon?: IconType;
  title?: string;
  id: string;
  className?: string;
  overrides?: { removeOption?: string };
}): React.ReactElement => {
  const handleOnclick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    onAction?.({
      type: 'click',
      payload: { id: id },
    });
  };

  const handleRemove = () => {
    onAction?.({
      type: 'remove',
      payload: { id: id },
    });
  };
  return (
    <div className={`sidebarOption ${className}`} onClick={handleOnclick} key={id}>
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
