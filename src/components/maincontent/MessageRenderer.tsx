import React from 'react';

//component
import { UserProfile } from '../imageContainer/ImageContainer';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import ReplySharpIcon from '@mui/icons-material/ReplySharp';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import MoreVertIcon from '@mui/icons-material/MoreVert';

//helper
import { getCurrentTime } from '../helper';

export const MessageRenderer = ({ message, userName }: { message: string; userName: string }): React.ReactElement => {
  return (
    <div className="message__rendered__box">
      <UserProfile />
      <div className="message__renderer">
        <div>
          <span>{userName}</span>
          <span className="username__time__gap">{getCurrentTime()}</span>
        </div>
        <div>{message}</div>
      </div>
      <div className="message__options">
        <ThumbUpOffAltIcon />
        <CheckBoxIcon />
        <InsertCommentIcon />
        <ReplySharpIcon />
        <BookmarkIcon />
        <MoreVertIcon />
      </div>
    </div>
  );
};
