import { useCallback } from 'react';

//components
import { SidebarOption } from '../SidebarOption';
import { CustomFieldHeader } from './CustomFieldHeader';
import { CustomFieldFooter } from './CustomFieldFooter';

//types
import { ChannelType, UserType, AppType, ActionType, CustomType } from 'types';

export const CustomFieldContainer = ({
  show,
  handleToggle,
  customFields,
  onAction,
  onClick,
  containerType,
  className,
  overrides,
}: {
  show: { channel: boolean; user: boolean; app: boolean };
  handleToggle: (containerType: CustomType) => void;
  customFields: ChannelType | UserType | AppType;
  onAction: React.Dispatch<ActionType>;
  onClick: (modalType: CustomType) => void;
  containerType: CustomType;
  className?: string;
  overrides?: { removeOption?: string };
}) => {
  return (
    <div className="container">
      <CustomFieldHeader containerType={containerType} show={show} handleToggle={handleToggle} />
      {show[containerType]
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
      <CustomFieldFooter containerType={containerType} onClick={onClick} />
    </div>
  );
};
