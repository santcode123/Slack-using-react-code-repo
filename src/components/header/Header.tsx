import React from 'react';

//material-ui components
import FiberManualRecordSharpIcon from '@mui/icons-material/FiberManualRecordSharp';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import SearchIcon from '@mui/icons-material/Search';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

//style
import './Header.css';

export const Header = (): React.ReactElement => {
  return (
    <div className="header">
      <div className="header__left">
        <AccessTimeIcon />
      </div>

      <div className="header__search">
        <SearchIcon />
        <input placeholder="Search sprinklr" />
      </div>

      <div className="header__right">
        <HelpOutlineIcon />
        {
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            badgeContent={<FiberManualRecordSharpIcon className="green__cirlce" />}
          >
            <Avatar
              alt="user-profile"
              src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png"
              sx={{ width: 30, height: 30 }}
            />
          </Badge>
        }
      </div>
    </div>
  );
};
