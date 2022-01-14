import { useState, useCallback } from 'react';

//components
import { Modal } from '../modal/Modal';
import { SidebarOption } from './SidebarOption';
import { CustomFieldContainer } from './customFieldContainer/CustomFieldContainer';
import { SideBarHeader } from './SideBarHeader';

//types
import {
  ChannelType,
  UserType,
  AppType,
  ActionType,
  CustomFieldType,
  CustomType,
  ACTION_TYPE,
  ModalAndToggleAction,
} from 'types';

//constants
import { SIDEBAR_FIXED_ICONS } from '../../constants';

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
  const [visibleItems, toggleVisibleItems] = useState({ channel: true, user: true, app: true });

  const _onAction = useCallback(
    (action: ActionType | ModalAndToggleAction) => {
      switch (action.type) {
        case ACTION_TYPE.MODAL_ACTION: {
          setModalType(action.payload.type); // modal type is sent through payload.type
          break;
        }
        case ACTION_TYPE.TOGGLE_ACTION: {
          toggleVisibleItems(prev => ({ ...prev, [action.payload.type!]: !prev[action.payload.type!] }));
          // payload.type shows which item to toggle like channel, app or user
          break;
        }
        default: {
          onAction(action as ActionType);
        }
      }
    },
    [setModalType, onAction, toggleVisibleItems]
  );

  const customFields: Array<CustomFieldType> = [
    { id: 1, type: ACTION_TYPE.CHANNEL, customField: channels },
    { id: 2, type: ACTION_TYPE.USER, customField: users },
    { id: 3, type: ACTION_TYPE.APP, customField: apps },
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
      {modalType ? <Modal onAction={_onAction} modalType={modalType} /> : null}
      {customFields.map(customInfo => (
        <CustomFieldContainer
          key={customInfo.id}
          visibleItems={visibleItems}
          containerType={customInfo.type}
          customFields={customInfo.customField}
          onAction={_onAction}
          className="ml-1"
          overrides={{ removeOption: 'remove__option' }}
        />
      ))}
    </div>
  );
};
