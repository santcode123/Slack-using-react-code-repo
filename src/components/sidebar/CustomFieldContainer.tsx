import { useCallback } from 'react';

// material-ui
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddIcon from '@mui/icons-material/Add';
import Tooltip from '@mui/material/Tooltip';

//components
import { SidebarOption } from './SidebarOption';

//types
import { ChannelType, UserType, AppType, ActionType, CustomType } from 'types';

const CUSTOM_FIELD_HEADER_TITLE = {
  channel: 'Channels',
  user: 'Direct Messages',
  app: 'Apps',
};

export const CustomFieldContainer = ({
  show,
  handleToggle,
  customFields,
  onAction,
  onClick,
  type,
  className,
  overrides,
}: {
  show: any;
  handleToggle: (type: CustomType) => void;
  customFields: ChannelType | UserType | AppType;
  onAction: React.Dispatch<ActionType>;
  onClick: (modalType: CustomType) => void;
  type: CustomType;
  className?: string;
  overrides?: { removeOption?: string };
}) => {
  const handleToggleButton = useCallback(() => {
    handleToggle(type);
  }, [type, handleToggle]);

  const handleOnClick = useCallback(() => {
    onClick(type);
  }, [type, onClick]);

  return (
    <div className="container">
      <div className="customField__header">
        <div onClick={handleToggleButton}>{show[type] ? <ExpandMoreIcon /> : <ExpandLessIcon />}</div>
        <h2>{CUSTOM_FIELD_HEADER_TITLE[type]}</h2>
        <div className="customField__header__option">
          <Tooltip title="Section options" arrow>
            <MoreVertIcon className="more__option" />
          </Tooltip>
          <Tooltip title={`Add ${type}`} arrow>
            <AddIcon className="add__icon" />
          </Tooltip>
        </div>
      </div>
      {show[type]
        ? Object.entries(customFields).map(data => (
            <SidebarOption
              onAction={onAction}
              id={data[0]}
              title={data[1]?.name}
              Icon={data[1]?.Icon}
              className={className}
              overrides={overrides}
            />
          ))
        : null}
      <div className="add__button" onClick={handleOnClick}>
        <SidebarOption Icon={AddIcon} id={`add-${type}-button`} title={`Add ${type}s`} />
      </div>
    </div>
  );
};
