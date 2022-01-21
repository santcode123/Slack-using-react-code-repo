// material-ui components
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import DraftsIcon from '@mui/icons-material/Drafts';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export const USER = 'user';
export const CHANNEL = 'channel';
export const APP = 'app';

export const DEFAULT_USER = 'Santosh';

export const THREADS = 'Threads';
export const MENTIONS_AND_REACTIONS = 'Mentions and reactions';
export const DRAFTS = 'Drafts';
export const SAVED_ITEMS = 'Saved items';
export const MORE = 'More';
export const DEFAULT_HEADER_MESSAGE = 'please select any channel,personal chat or app to start conversation';

export const SIDEBAR_FIXED_ICONS = [
  { id: THREADS, Icon: InsertCommentIcon, title: 'Threads' },
  { id: MENTIONS_AND_REACTIONS, Icon: AlternateEmailIcon, title: 'Mentions and reactions' },
  { id: SAVED_ITEMS, Icon: BookmarkIcon, title: 'Saved Items' },
  { id: DRAFTS, Icon: DraftsIcon, title: 'Drafts' },
  { id: MORE, Icon: MoreVertIcon, title: 'More' },
];

export const MODAL_TYPES = {
  APP: 'app',
  CHANNEL: 'channel',
  USER: 'user',
} as const;

export const MODAL_INPUT_PLACEHOLDER: { [name in typeof MODAL_TYPES[keyof typeof MODAL_TYPES]]: string } = {
  [MODAL_TYPES.CHANNEL]: 'Enter a channel name',
  [MODAL_TYPES.APP]: 'Enter app name',
  [MODAL_TYPES.USER]: 'Enter a username',
};

export const MODAL_SUBMIT_BUTTON_TEXT: { [name in typeof MODAL_TYPES[keyof typeof MODAL_TYPES]]: string } = {
  [MODAL_TYPES.USER]: 'Create personal chat',
  [MODAL_TYPES.CHANNEL]: 'Create a channel',
  [MODAL_TYPES.APP]: 'Create a app',
};

export const MODAL_HEADER_TITLE: { [name in typeof MODAL_TYPES[keyof typeof MODAL_TYPES]]: string } = {
  [MODAL_TYPES.USER]: 'Start a new personal chat',
  [MODAL_TYPES.CHANNEL]: 'Create a new channel',
  [MODAL_TYPES.APP]: 'Create a new app',
};

export const MODAL_TYPE_NAME_MAP: { [name in typeof MODAL_TYPES[keyof typeof MODAL_TYPES]]: string } = {
  [MODAL_TYPES.CHANNEL]: 'Channel name',
  [MODAL_TYPES.APP]: 'App name',
  [MODAL_TYPES.USER]: 'User name',
};
