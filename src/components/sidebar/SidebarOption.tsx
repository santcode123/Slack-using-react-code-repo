import React from 'react';

//types
import { ActionType, IconType } from '../../types';

export const SidebarOption = ({
  onAction,
  Icon,
  title,
  id,
}: {
  onAction?: React.Dispatch<ActionType>;
  Icon?: IconType;
  title?: string;
  id: string;
}): React.ReactElement => {
  const handleOnclick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    onAction?.({ type: 'click', payload: { id: id } });
  };
  return (
    <div className="sidebarOption" onClick={handleOnclick} key={id}>
      {Icon && <Icon className="sidebarOption__icon" />}

      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className="sidebarOption__channel">
          <span>#</span>
          {title}
        </h3>
      )}
    </div>
  );
};
