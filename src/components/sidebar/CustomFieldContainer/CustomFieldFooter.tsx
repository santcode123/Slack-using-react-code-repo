import { useCallback } from 'react';

// material-ui
import AddIcon from '@mui/icons-material/Add';

//components
import { SidebarOption } from 'components/sidebar/SidebarOption';

//types
import { CustomType, BaseActions, ModalAndToggleAction } from 'types';
import { ACTION_TYPES } from 'actionTypes';

export const CustomFieldFooter = ({
  footerType,
  onAction,
}: {
  footerType: CustomType;
  onAction: React.Dispatch<BaseActions | ModalAndToggleAction>;
}): React.ReactElement => {
  const handleClick = useCallback(() => {
    onAction({
      type: ACTION_TYPES.MODAL_ACTION,
      payload: {
        modalType: footerType,
      },
    });
  }, [footerType, onAction]);

  return (
    <div className="add__button" onClick={handleClick}>
      <SidebarOption Icon={AddIcon} id={`add-${footerType}-button`} title={`Add ${footerType}s`} />
    </div>
  );
};
