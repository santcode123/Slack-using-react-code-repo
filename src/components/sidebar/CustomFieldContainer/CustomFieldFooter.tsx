import { useCallback } from 'react';

// material-ui
import AddIcon from '@mui/icons-material/Add';

//components
import { SidebarOption } from 'components/sidebar/SidebarOption';

//types
import { CustomType, BaseActions, ModalAndToggleAction, ALL_ACTIONS } from 'types';

export const CustomFieldFooter = ({
  footerType,
  onAction,
}: {
  footerType: CustomType;
  onAction: React.Dispatch<BaseActions | ModalAndToggleAction>;
}): React.ReactElement => {
  const handleClick = useCallback(() => {
    onAction({
      type: ALL_ACTIONS.MODAL_ACTION,
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
