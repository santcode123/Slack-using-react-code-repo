import React, { useState } from 'react';

//components
import { Modal } from '../modal/Modal';
import { Renderer } from './Renderer';
import { SprinklrLogo, ArrowUp, ArrowDown, PlusSign, CreateNewChannelIcon } from '../imageContainer/ImageConatiner';

//types
import { handlemainContentType, channelType, userType } from '../../types';

//style
import './SideBar.css';

export const SideBar = ({
  handleMainContent,
  channels,
  users,
}: {
  handleMainContent: handlemainContentType;
  channels: channelType;
  users: userType;
}): React.ReactElement => {
  const [isModalOpen, setModalVisibility] = useState({ open: false, type: 'channel' });
  const [arrowDirection, setarrowDirection] = useState({ channelsDown: true, DirectMessageDown: true });

  const handleNewChannelOnclick = () => {
    setModalVisibility({ open: true, type: 'channel' });
  };

  const handleNewUserOnclick = () => {
    setModalVisibility({ open: true, type: 'user' });
  };

  const handleClose = () => {
    setModalVisibility({ open: false, type: 'channel' });
  };

  const handleChannelToggle = () => {
    setarrowDirection(prev => ({ ...prev, channelsDown: !arrowDirection.channelsDown }));
  };

  const handleDirectMessageToggle = () => {
    setarrowDirection(prev => ({ ...prev, DirectMessageDown: !arrowDirection.DirectMessageDown }));
  };

  return (
    <div className="sidebar p-1">
      <div className="mb-10">
        <SprinklrLogo />
        <div className="create-channel-icon">
          <button className="channel-logo" onClick={handleNewChannelOnclick}>
            <CreateNewChannelIcon />
          </button>
          <div className="channel-tooltip">create a new channel</div>
        </div>
        {isModalOpen.open ? (
          <Modal Close={handleClose} handleMainContent={handleMainContent} modalType={isModalOpen.type} />
        ) : null}
      </div>

      <div className="channels-container">
        <div className="channel-arrow">
          <button className="channel-arrow-button" onClick={handleChannelToggle}>
            {arrowDirection.channelsDown ? <ArrowDown /> : <ArrowUp />}
          </button>
          <label style={{ color: '#a3a3a6' }}>Channels</label>
        </div>
        {arrowDirection.channelsDown &&
          Object.entries(channels).map(data => <Renderer id={data[0]} name={data[1]} isChannel={true} prefix="#" />)}
      </div>

      <div className="personal-chat-container">
        <div className="direct-message-arrow">
          <button className="direct-message-arrow-button" onClick={handleDirectMessageToggle}>
            {arrowDirection.DirectMessageDown ? <ArrowDown /> : <ArrowUp />}
          </button>
          <span>Direct Message</span>
        </div>

        {arrowDirection.DirectMessageDown &&
          Object.entries(users).map(data => <Renderer id={data[0]} name={data[1]} />)}
        <button className="add-teammates" onClick={handleNewUserOnclick}>
          <PlusSign />
          <span>Add Teammates</span>
        </button>
      </div>
    </div>
  );
};
