import { useState, useCallback } from 'react';

//components
import { Modal } from '../modal/Modal';
import { SidebarOption } from './SidebarOption';
import { CustomFieldContainer } from './customFieldContainer/CustomFieldContainer';
import { SideBarHeader } from './SideBarHeader';

//types
import { ChannelType, UserType, AppType, BaseActions, CustomFieldType, ModalAndToggleAction } from 'types';
import { ACTION_TYPES } from 'actionTypes';

//constants
import {
  SIDEBAR_FIXED_ICONS,
  CHANNEL,
  USER,
  APP,
  MODAL_TYPES,
  MODAL_HEADER_TITLE,
  MODAL_INPUT_PLACEHOLDER,
  MODAL_SUBMIT_BUTTON_TEXT,
  MODAL_TYPE_NAME_MAP,
} from '../../constants';

//style
import './SideBar.css';

export const SideBar = ({
  onAction,
  channels,
  users,
  apps,
}: {
  onAction: React.Dispatch<BaseActions>;
  channels: ChannelType;
  users: UserType;
  apps: AppType;
}): React.ReactElement => {
  const [modalType, setModalType] = useState<typeof MODAL_TYPES[keyof typeof MODAL_TYPES]>();
  const [visibleItems, toggleVisibleItems] = useState({ channel: true, user: true, app: true });

  const _onAction = useCallback(
    (action: BaseActions | ModalAndToggleAction) => {
      switch (action.type) {
        case ACTION_TYPES.MODAL_ACTION: {
          setModalType(action.payload.modalType);
          break;
        }
        case ACTION_TYPES.TOGGLE_ACTION: {
          toggleVisibleItems(prev => ({ ...prev, [action.payload.toggleType!]: !prev[action.payload.toggleType!] }));
          break;
        }
        default: {
          onAction(action as BaseActions);
        }
      }
    },
    [setModalType, onAction, toggleVisibleItems]
  );

  const customFields: Array<CustomFieldType> = [
    { id: 1, type: CHANNEL, customField: channels },
    { id: 2, type: USER, customField: users },
    { id: 3, type: APP, customField: apps },
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
      {modalType ? (
        <Modal
          onAction={_onAction}
          modalType={modalType}
          headerTitle={MODAL_HEADER_TITLE[modalType]}
          footerTitle={MODAL_SUBMIT_BUTTON_TEXT[modalType]}
          inputPlaceHolder={MODAL_INPUT_PLACEHOLDER[modalType]}
          modalBodyName={MODAL_TYPE_NAME_MAP[modalType]}
        />
      ) : null}
      {customFields.map(customInfo => (
        <CustomFieldContainer
          key={customInfo.id}
          areItemsVisible={visibleItems[customInfo.type]}
          containerType={customInfo.type}
          customField={customInfo.customField}
          onAction={_onAction}
          className="ml-1"
          overrides={{ removeOption: 'remove__option' }}
        />
      ))}
    </div>
  );
};
