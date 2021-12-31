import React, { useCallback } from 'react';

//material-ui
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Tooltip from '@mui/material/Tooltip';
import AddIcon from '@mui/icons-material/Add';

//types
import { CustomType } from 'types';
import { CustomFieldFooter } from './CustomFieldFooter';

const CUSTOM_FIELD_HEADER_TITLE = {
  channel: 'Channels',
  user: 'Direct Messages',
  app: 'Apps',
};

export const CustomFieldHeader = ({
  containerType,
  show,
  handleToggle,
}: {
  containerType: CustomType;
  show: { channel: boolean; user: boolean; app: boolean };
  handleToggle: (containerType: CustomType) => void;
}): React.ReactElement => {
  const handleToggleButton = useCallback(() => {
    handleToggle(containerType);
  }, [containerType, handleToggle]);

  return (
    <div className="customField__header">
      <div onClick={handleToggleButton}>{show[containerType] ? <ExpandMoreIcon /> : <ExpandLessIcon />}</div>
      <h2>{CUSTOM_FIELD_HEADER_TITLE[containerType]}</h2>
      <div className="customField__header__option">
        <Tooltip title="Section options" arrow>
          <MoreVertIcon className="more__option" />
        </Tooltip>
        <Tooltip title={`Add ${containerType}`} arrow>
          <AddIcon className="add__icon" />
        </Tooltip>
      </div>
    </div>
  );
};
