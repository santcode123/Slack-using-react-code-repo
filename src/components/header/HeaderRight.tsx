import { useMemo } from 'react';

//material-ui
import FiberManualRecordSharpIcon from '@mui/icons-material/FiberManualRecordSharp';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Tooltip from '@mui/material/Tooltip';

export const HeaderRight = (): React.ReactElement => {
  const avatarSize = useMemo(() => ({ width: 30, height: 30 }), []);
  return (
    <div className="header__right">
      <HelpOutlineIcon />
      <Tooltip title="Santosh" arrow>
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          badgeContent={<FiberManualRecordSharpIcon className="green__circle" />}
        >
          <Avatar
            alt="user-profile"
            src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png"
            sx={avatarSize}
          />
        </Badge>
      </Tooltip>
    </div>
  );
};
