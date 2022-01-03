import React, { useState, useCallback } from 'react';

//components
import { Modal } from '../modal/Modal';
import { SidebarOption } from './SidebarOption';
import { CustomFieldContainer } from './CustomFieldContainer/CustomFieldContainer';
import { SideBarHeader } from './SideBarHeader';

//types
import { ChannelType, UserType, AppType, ActionType, CustomFieldType, CustomType } from 'types';

//constants
import { SIDEBAR_FIXED_ICONS, ACTION_TYPE } from '../../constants';

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
  const [modalType, setModalType] = useState<CustomType | undefined>();
  const [showItems, toggleShowItems] = useState({ channel: true, user: true, app: true });

  const handleAddOnclick = useCallback((modalType: CustomType) => {
    setModalType(modalType);
  }, []);

  const handleClose = useCallback(() => {
    setModalType(undefined);
  }, []);

  const handleToggle = useCallback((type: CustomType) => {
    toggleShowItems(prev => ({ ...prev, [type]: !prev[type] }));
  }, []);

  const customFields: Array<CustomFieldType> = [
    { type: ACTION_TYPE.CHANNEL, customField: channels },
    { type: ACTION_TYPE.USER, customField: users },
    { type: ACTION_TYPE.APP, customField: apps },
  ];

  return (
    <div className="sidebar">
      <hr />
      <SideBarHeader />
      <hr />
      <div className="container">
        {SIDEBAR_FIXED_ICONS.map(customField => (
          <SidebarOption key={customField.id} Icon={customField.Icon} title={customField.title} id={customField.id} />
        ))}
      </div>
      {modalType ? <Modal close={handleClose} onAction={onAction} modalType={modalType} /> : null}
      {customFields.map((customInfo, index) => (
        <CustomFieldContainer
          key={index}
          show={showItems}
          handleToggle={handleToggle}
          containerType={customInfo.type}
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
