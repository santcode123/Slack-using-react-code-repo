import React, { useCallback } from 'react';

// material-ui
import AddIcon from '@mui/icons-material/Add';

//components
import { SidebarOption } from 'components/sidebar/SidebarOption';

//types
import { CustomType } from 'types';

export const CustomFieldFooter = ({
  containerType,
  onClick,
}: {
  containerType: CustomType;
  onClick: (modalType: CustomType) => void;
}): React.ReactElement => {
  const handleOnClick = useCallback(() => {
    onClick(containerType);
  }, [containerType, onClick]);

  return (
    <div className="add__button" onClick={handleOnClick}>
      <SidebarOption Icon={AddIcon} id={`add-${containerType}-button`} title={`Add ${containerType}s`} />
    </div>
  );
};
