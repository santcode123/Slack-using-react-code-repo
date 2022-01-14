import React, { useCallback } from 'react';

//material-ui
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Tooltip from '@mui/material/Tooltip';
import AddIcon from '@mui/icons-material/Add';

//types
import { CustomType, ActionType, ModalAndToggleAction, ACTION_TYPE } from 'types';

const CUSTOM_FIELD_HEADER_TITLE = {
  channel: 'Channels',
  user: 'Direct Messages',
  app: 'Apps',
};

export const CustomFieldHeader = ({
  headerType,
  visibleItems,
  onAction,
}: {
  headerType: CustomType;
  visibleItems: { channel: boolean; user: boolean; app: boolean };
  onAction: React.Dispatch<ActionType | ModalAndToggleAction>;
}): React.ReactElement => {
  const handleToggle = useCallback(() => {
    onAction({
      type: ACTION_TYPE.TOGGLE_ACTION,
      payload: {
        type: headerType,
      },
    });
  }, [headerType, onAction]);

  return (
    <div className="customField__header">
      <div onClick={handleToggle}>{visibleItems[headerType] ? <ExpandMoreIcon /> : <ExpandLessIcon />}</div>
      <h2>{CUSTOM_FIELD_HEADER_TITLE[headerType]}</h2>
      <div className="customField__header__option">
        <Tooltip title="Section options" arrow>
          <MoreVertIcon className="more__option" />
        </Tooltip>
        <Tooltip title={`Add ${headerType}`} arrow>
          <AddIcon className="add__icon" />
        </Tooltip>
      </div>
    </div>
  );
};
