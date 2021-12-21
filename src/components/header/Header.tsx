import React from 'react';
import './Header.css';
import {UserProfile} from '../imageContainer/ImageConatiner';

export const Header = (): React.ReactElement => {
  return (
    <div className="main-header ">
       <UserProfile/>
      <span className="ml-1 mr-1">Santosh</span>
    </div>
  );
};
