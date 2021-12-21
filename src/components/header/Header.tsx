import React from 'react';

//components
import {UserProfile} from '../imageContainer/ImageConatiner';

//style
import './Header.css';

export const Header = (): React.ReactElement => {
  return (
    <div className="main-header ">
       <UserProfile/>
      <span className="ml-1 mr-1">Santosh</span>
    </div>
  );
};
