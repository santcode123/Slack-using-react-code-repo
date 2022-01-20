import { useCallback } from 'react';

//material-ui
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Tooltip from '@mui/material/Tooltip';
import AddIcon from '@mui/icons-material/Add';

//types
import { CustomType, BaseActions, ModalAndToggleAction } from 'types';
import { ACTION_TYPES } from 'actionTypes';

const CUSTOM_FIELD_HEADER_TITLE = {
  channel: 'Channels',
  user: 'Direct Messages',
  app: 'Apps',
};

export const CustomFieldHeader = ({
  headerType,
  areItemsVisible,
  onAction,
}: {
  headerType: CustomType;
  areItemsVisible: boolean;
  onAction: React.Dispatch<BaseActions | ModalAndToggleAction>;
}): React.ReactElement => {
  const handleToggle = useCallback(() => {
    onAction({
      type: ACTION_TYPES.TOGGLE_ACTION,
      payload: {
        toggleType: headerType,
      },
    });
  }, [headerType, onAction]);

  return (
    <div className="customField__header">
      <div onClick={handleToggle}>{areItemsVisible ? <ExpandMoreIcon /> : <ExpandLessIcon />}</div>
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
