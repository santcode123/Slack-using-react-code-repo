//components
import { SidebarOption } from '../SidebarOption';
import { CustomFieldHeader } from './CustomFieldHeader';
import { CustomFieldFooter } from './CustomFieldFooter';

//types
import { ChannelType, UserType, AppType, ActionType, CustomType, ModalAndToggleAction } from 'types';

export const CustomFieldContainer = ({
  visibleItems,
  customFields,
  onAction,
  containerType,
  className,
  overrides,
}: {
  visibleItems: { channel: boolean; user: boolean; app: boolean };
  customFields: ChannelType | UserType | AppType;
  onAction: React.Dispatch<ActionType | ModalAndToggleAction>;
  containerType: CustomType;
  className?: string;
  overrides?: { removeOption?: string };
}) => {
  return (
    <div className="container">
      <CustomFieldHeader headerType={containerType} visibleItems={visibleItems} onAction={onAction} />
      {visibleItems[containerType]
        ? Object.entries(customFields).map(data => (
            <SidebarOption
              key={data[0]}
              onAction={onAction}
              id={data[0]}
              title={data[1]?.name}
              Icon={data[1]?.Icon}
              className={className}
              overrides={overrides}
            />
          ))
        : null}
      <CustomFieldFooter footerType={containerType} onAction={onAction} />
    </div>
  );
};
