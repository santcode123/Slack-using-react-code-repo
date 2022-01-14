import React, { useCallback } from 'react';

// material-ui
import AddIcon from '@mui/icons-material/Add';

//components
import { SidebarOption } from 'components/sidebar/SidebarOption';

//types
import { CustomType, ActionType, ModalAndToggleAction, ACTION_TYPE } from 'types';

export const CustomFieldFooter = ({
  footerType,
  onAction,
}: {
  footerType: CustomType;
  onAction: React.Dispatch<ActionType | ModalAndToggleAction>;
}): React.ReactElement => {
  const handleClick = useCallback(() => {
    onAction({
      type: ACTION_TYPE.MODAL_ACTION,
      payload: {
        type: footerType,
      },
    });
  }, [footerType, onAction]);

  return (
    <div className="add__button" onClick={handleClick}>
      <SidebarOption Icon={AddIcon} id={`add-${footerType}-button`} title={`Add ${footerType}s`} />
    </div>
  );
};
