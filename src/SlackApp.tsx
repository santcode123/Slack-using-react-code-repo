import { useReducer } from 'react';

//components
import { Header } from 'components/header/Header';
import { SideBar } from 'components/sidebar/SideBar';
import { ChatBox } from 'components/maincontent/ChatBox';

//utils
import reducer from './reducer';

const initialState = {
  users: {},
  channels: {},
  apps: {},
  messageStreamMap: {},
};

export const SlackApp = (): React.ReactElement => {
  const [slackState, dispatch] = useReducer(reducer, initialState);

  const id = slackState.id ?? '';

  return (
    <>
      <Header />
      <div className="slack__body">
        <SideBar onAction={dispatch} channels={slackState.channels} users={slackState.users} apps={slackState.apps} />
        <ChatBox
          id={id}
          channelName={slackState.channels[id]}
          userName={slackState.users[id]}
          appName={slackState.apps[id]}
          messageStreamMap={slackState.messageStreamMap}
          onAction={dispatch}
        />
      </div>
    </>
  );
};
