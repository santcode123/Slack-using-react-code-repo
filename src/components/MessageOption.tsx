import React from 'react';

//material-ui
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import ReplySharpIcon from '@mui/icons-material/ReplySharp';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export const MessageOption = (): React.ReactElement => {
  return (
    <>
      <ThumbUpOffAltIcon />
      <CheckBoxIcon />
      <InsertCommentIcon />
      <ReplySharpIcon />
      <BookmarkIcon />
      <MoreVertIcon />
    </>
  );
};
