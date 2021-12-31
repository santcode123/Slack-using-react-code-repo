import React from 'react';

//material-ui components

import SearchIcon from '@mui/icons-material/Search';

export const HeaderMiddle = (): React.ReactElement => {
  return (
    <div className="header__search">
      <SearchIcon />
      <input placeholder="Search sprinklr" />
    </div>
  );
};
