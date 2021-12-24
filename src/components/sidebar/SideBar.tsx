import React, { useState, useCallback } from 'react';

//components
import { Modal } from '../modal/Modal';
import { SidebarOption } from './SidebarOption';
import { userProfileCollection } from 'components/imageContainer/ImageContainer';

// material-ui
import CreateIcon from '@mui/icons-material/Create';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import DraftsIcon from '@mui/icons-material/Drafts';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import AppsIcon from '@mui/icons-material/Apps';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddIcon from '@mui/icons-material/Add';

//types
import { ChannelType, UserType, AppsType, ActionType } from 'types';

//constants
import { THREADS, MENTIONS_AND_REACTIONS, DRAFTS, SAVED_ITEMS, MORE } from 'Constants';

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
  apps: AppsType;
}): React.ReactElement => {
  const [modalType, setModalType] = useState('');
  const [show, setShow] = useState({ channels: true, directMessage: true, app: true });

  const handleNewChannelOnclick = useCallback(() => {
    setModalType('channel');
  }, []);

  const handleNewUserOnclick = useCallback(() => {
    setModalType('user');
  }, []);

  const handleNewAppOnclick = useCallback(() => {
    setModalType('app');
  }, []);

  const handleClose = useCallback(() => {
    setModalType('');
  }, []);

  const handleChannelToggle = useCallback(() => {
    setShow(prev => ({ ...prev, channels: !prev.channels }));
  }, []);

  const handleDirectMessageToggle = useCallback(() => {
    setShow(prev => ({ ...prev, directMessage: !prev.directMessage }));
  }, []);

  const handleAppToggle = useCallback(() => {
    setShow(prev => ({ ...prev, app: !prev.app }));
  }, []);

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

      <div className="container">
        <div className="channel__header">
          <div onClick={handleChannelToggle}>{show.channels ? <ExpandMoreIcon /> : <ExpandLessIcon />}</div>
          <h2>Channels</h2>
          <MoreVertIcon className="more__option" />
          <AddIcon className="add__icon" />
        </div>
        {show.channels
          ? Object.entries(channels).map(data => <SidebarOption onAction={onAction} id={data[0]} title={data[1]} />)
          : null}
        <div className="add__channel" onClick={handleNewChannelOnclick}>
          <SidebarOption Icon={AddIcon} id="add-channels" title="Add channels" />
        </div>
      </div>

      <div className="container">
        <div className="message__header ">
          <div onClick={handleDirectMessageToggle}>{show.directMessage ? <ExpandMoreIcon /> : <ExpandLessIcon />}</div>
          <h2>Direct Message</h2>
        </div>
        {show.directMessage
          ? Object.entries(users).map(data => (
              <SidebarOption
                onAction={onAction}
                Icon={userProfileCollection[parseInt(data[0].slice(1)) % 3]}
                id={data[0]}
                title={data[1]}
              />
            ))
          : null}
        <div className="add__teammate" onClick={handleNewUserOnclick}>
          <SidebarOption Icon={AddIcon} id="add-teammate" title="Add teammates" />
        </div>
      </div>

      <div className="container">
        <div className="app__header">
          <div onClick={handleAppToggle}>{show.app ? <ExpandMoreIcon /> : <ExpandLessIcon />}</div>
          <h2>Apps</h2>
        </div>
        {show.app
          ? Object.entries(apps).map(data => (
              <SidebarOption onAction={onAction} Icon={AppsIcon} id={data[0]} title={data[1]} />
            ))
          : null}
        <div className="add__app" onClick={handleNewAppOnclick}>
          <SidebarOption Icon={AddIcon} id="add-app" title="Add apps" />
        </div>
      </div>
    </div>
  );
};
