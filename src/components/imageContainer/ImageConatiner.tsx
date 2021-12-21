import React from 'react';
import './ImageConatiner.css';

const SprinklrLogo = (): React.ReactElement => (
  <img
    className="Sprinklr-logo"
    src={require('../../images/sprinklr.jpg')}
    width={90}
    height={70}
    alt="sprinklr-logo"
  />
);

const CreateNewChannelIcon = (): React.ReactElement => (
  <img src={require('../../images/channel.jpg')} width={30} height={30} alt="channel-logo" />
);

const ArrowUp = (): React.ReactElement => (
  <img className="Arrow-up" src={require('../../images/ArrowUp.jpg')} width={10} height={10} alt="Arrow-Up" />
);

const ArrowDown = (): React.ReactElement => (
  <img className="Arrow-Down" src={require('../../images/ArrowDown.jpg')} width={10} height={10} alt="Arrow-Down" />
);

const PlusSign = (): React.ReactElement => (
  <img className="Plus-Sign" src={require('../../images/plusSign.png')} width={10} height={10} alt="plus-sign" />
);

const UserProfile = (): React.ReactElement => (
  <img
    className="user-profile ml-1 mr-1"
    src={require('../../images/UserProfile.png')}
    width={30}
    height={30}
    alt="user-profile"
  />
);
const UserProfile1 = (): React.ReactElement => (
  <img
    className="user-profile-1 "
    src={require('../../images/UserProfile1.png')}
    width={20}
    height={20}
    alt="user-profile-1"
  />
);

const UserProfile2 = (): React.ReactElement => (
  <img
    className="user-profile-2"
    src={require('../../images/UserProfile2.png')}
    width={20}
    height={20}
    alt="user-profile-2"
  />
);

const UserProfile3 = (): React.ReactElement => (
  <img
    className="user-profile-3"
    src={require('../../images/UserProfile3.png')}
    width={20}
    height={20}
    alt="user-profile-3"
  />
);

const MessageSenderIcon = (): React.ReactElement => (
  <img
    className="message-sender-icon"
    src={require('../../images/SendButton.png')}
    width={30}
    height={35}
    alt="message-sender-icon"
  />
);
export const userProfileCollection = [UserProfile1, UserProfile2, UserProfile3];

export {
  SprinklrLogo,
  ArrowUp,
  ArrowDown,
  PlusSign,
  UserProfile,
  UserProfile1,
  UserProfile2,
  UserProfile3,
  MessageSenderIcon,
  CreateNewChannelIcon,
};
