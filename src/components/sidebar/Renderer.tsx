import React, { useContext } from 'react';
import { SetIdContext } from '../../SlackApp';
import { UserProfile1, userProfileCollection } from '../imageContainer/ImageConatiner';

export const Renderer = ({
  id,
  name,
  isChannel,
  prefix,
}: {
  id: string;
  name: string;
  isChannel?: boolean;
  prefix?: string;
}): React.ReactElement => {
  const setId = useContext(SetIdContext);
  const handleOnclick = (e: any): void => {
    // don't know the type of event
    setId(parseInt(e.target.id));
  };
  const ImagePrefix = userProfileCollection[parseInt(id) % 3];
  return (
    <button key={id} className="renderer-button" onClick={handleOnclick}>
      <span id={id} className="renderer-text">
        {isChannel ? prefix : <ImagePrefix />}
        {name}
      </span>
    </button>
  );
};
