import React from 'react';

// material-ui
import CreateIcon from '@mui/icons-material/Create';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const SideBarHeader = (): React.ReactElement => {
  return (
    <div className="sidebar__header">
      <div className="sprinklr__logo">
        <h2>Sprinklr</h2>
        <ExpandMoreIcon />
      </div>
      <CreateIcon />
    </div>
  );
};
