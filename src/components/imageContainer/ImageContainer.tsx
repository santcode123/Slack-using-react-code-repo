import React from 'react';
import './ImageContainer.css';

const UserProfile = (): React.ReactElement => (
  <img
    className="user-profile ml-1 mr-1"
    src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png"
    width={25}
    height={25}
    alt="user-profile"
  />
);
const UserProfile1 = (): React.ReactElement => (
  <img
    className="user-profile-1 "
    src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
    width={25}
    height={25}
    alt="user-profile-1"
  />
);

const UserProfile2 = (): React.ReactElement => (
  <img
    className="user-profile-2"
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaH95MYy4lQdqXKOR2FCcv2KIHRhz7rCj4N8VKm4zbQmfaOU7lU_m_ykDR6sWGMMEKof8&usqp=CAU"
    width={25}
    height={25}
    alt="user-profile-2"
  />
);

const UserProfile3 = (): React.ReactElement => (
  <img
    className="user-profile-3"
    src="https://images.ctfassets.net/hrltx12pl8hq/31f9j3A3xKasyUMMsuIQO8/6a8708add4cb4505b65b1cee3f2e6996/9db2e04eb42b427f4968ab41009443b906e4eabf-people_men-min.jpg?fit=fill&w=368&h=207"
    width={25}
    height={25}
    alt="user-profile-3"
  />
);

export const userProfileCollection = [UserProfile1, UserProfile2, UserProfile3];

export { UserProfile, UserProfile1, UserProfile2, UserProfile3 };
