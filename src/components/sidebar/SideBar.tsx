import React, { useState, useCallback } from 'react';

//components
import { Modal } from '../modal/Modal';
import { SidebarOption } from './SidebarOption';
import { CustomFieldContainer } from './CustomFieldContainer';

// material-ui
import CreateIcon from '@mui/icons-material/Create';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import DraftsIcon from '@mui/icons-material/Drafts';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

//types
import { ChannelType, UserType, AppType, ActionType, CustomFieldType, CustomType } from 'types';

//constants
import { THREADS, MENTIONS_AND_REACTIONS, DRAFTS, SAVED_ITEMS, MORE, CHANNEL, USER, APP } from 'Constants';

//style
import './SideBar.css';

export const SideBar = ({
  onAction,
  channels,
  users,
  apps,
}: {
  onAction: React.Dispatch<ActionType>;
  channels: ChannelType;
  users: UserType;
  apps: AppType;
}): React.ReactElement => {
  const [modalType, setModalType] = useState<string | undefined>();
  const [showItems, toggleShowItems] = useState({ channel: true, user: true, app: true });

  const handleAddOnclick = useCallback((modalType: string) => {
    setModalType(modalType);
  }, []);

  const handleClose = useCallback(() => {
    setModalType(undefined);
  }, []);

  const handleToggle = useCallback((type: CustomType) => {
    toggleShowItems(prev => ({ ...prev, [type]: !prev[type] }));
  }, []);

  const customFields: Array<CustomFieldType> = [
    { type: CHANNEL, customField: channels },
    { type: USER, customField: users },
    { type: APP, customField: apps },
  ];

  return (
    <div className="sidebar">
      <hr />
      <div className="sidebar__header">
        <div className="sprinklr__logo">
          <h2>Sprinklr</h2>
          <ExpandMoreIcon />
        </div>
        <CreateIcon />
      </div>
      <hr />

      <div className="container">
        <SidebarOption Icon={InsertCommentIcon} title="Threads" id={THREADS} />
        <SidebarOption Icon={AlternateEmailIcon} title="Mentions and reactions" id={MENTIONS_AND_REACTIONS} />
        <SidebarOption Icon={DraftsIcon} title="Drafts" id={DRAFTS} />
        <SidebarOption Icon={BookmarkIcon} title="Saved Items" id={SAVED_ITEMS} />
        <SidebarOption Icon={MoreVertIcon} title="More" id={MORE} />
      </div>

      {modalType ? <Modal close={handleClose} onAction={onAction} modalType={modalType} /> : null}

      {customFields.map(customInfo => (
        <CustomFieldContainer
          show={showItems}
          handleToggle={handleToggle}
          type={customInfo.type}
          customFields={customInfo.customField}
          onAction={onAction}
          onClick={handleAddOnclick}
          className="ml-1"
          overrides={{ removeOption: 'remove__option' }}
        />
      ))}
    </div>
  );
};
