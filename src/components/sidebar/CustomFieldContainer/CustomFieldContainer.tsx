//components
import { SidebarOption } from '../SidebarOption';
import { CustomFieldHeader } from './CustomFieldHeader';
import { CustomFieldFooter } from './CustomFieldFooter';

//types
import { ChannelType, UserType, AppType, BaseActions, CustomType, ModalAndToggleAction } from 'types';

export const CustomFieldContainer = ({
  areItemsVisible,
  customField,
  onAction,
  containerType,
  className,
  overrides,
}: {
  areItemsVisible: boolean;
  customField: ChannelType | UserType | AppType;
  onAction: React.Dispatch<BaseActions | ModalAndToggleAction>;
  containerType: CustomType;
  className?: string;
  overrides?: { removeOption?: string };
}) => {
  return (
    <div className="container">
      <CustomFieldHeader headerType={containerType} areItemsVisible={areItemsVisible} onAction={onAction} />
      {areItemsVisible
        ? Object.entries(customField).map(data => (
            <SidebarOption
              key={data[0]}
              onAction={onAction}
              id={data[0]}
              title={data[1].name}
              Icon={data[1].Icon}
              className={className}
              overrides={overrides}
            />
          ))
        : null}
      <CustomFieldFooter footerType={containerType} onAction={onAction} />
    </div>
  );
};
