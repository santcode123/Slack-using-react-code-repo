import { useReducer, useMemo } from 'react';

//components
import { Header } from 'components/header/Header';
import { SideBar } from 'components/sidebar/SideBar';
import { ChatBox } from 'components/chatBox/ChatBox';

//constants
import { CHANNEL, APP, USER } from './constants';

//helper
import { objectFilter } from 'helper';

//utils
import reducer from './reducer';

const initialState = {
  id: undefined,
  messageStreamConfig: {},
};

export const SlackApp = (): React.ReactElement => {
  const [slackState, dispatch] = useReducer(reducer, initialState);

  const { id = '', messageStreamConfig } = slackState;

  const channels = useMemo(() => objectFilter(messageStreamConfig, CHANNEL), [messageStreamConfig]);
  const apps = useMemo(() => objectFilter(messageStreamConfig, APP), [messageStreamConfig]);
  const users = useMemo(() => objectFilter(messageStreamConfig, USER), [messageStreamConfig]);

  return (
    <>
      <Header />
      <div className="slack__body">
        <SideBar onAction={dispatch} channels={channels} users={users} apps={apps} />
        <ChatBox id={id} messageStreamConfig={messageStreamConfig[id]} onAction={dispatch} />
      </div>
    </>
  );
};
