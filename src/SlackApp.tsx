import { useReducer } from 'react';

//components
import { Header } from 'components/header/Header';
import { SideBar } from 'components/sidebar/SideBar';
import { ChatBox } from 'components/maincontent/ChatBox';

//constants
import { CHANNEL, APP, USER } from 'Constants';

//helper
import { objectFilter } from 'components/helper';

//utils
import reducer from './reducer';

const initialState = {
  id: undefined,
  messageStreamConfig: {},
};

export const SlackApp = (): React.ReactElement => {
  const [slackState, dispatch] = useReducer(reducer, initialState);

  const id = slackState.id ?? '';
  const channels = objectFilter(slackState.messageStreamConfig, CHANNEL);
  const apps = objectFilter(slackState.messageStreamConfig, APP);
  const users = objectFilter(slackState.messageStreamConfig, USER);

  return (
    <>
      <Header />
      <div className="slack__body">
        <SideBar onAction={dispatch} channels={channels} users={users} apps={apps} />
        <ChatBox
          id={id}
          displayName={slackState.messageStreamConfig[id]?.name ?? ''}
          type={slackState.messageStreamConfig[id]?.type}
          messageStreamConfig={slackState.messageStreamConfig[id] ?? {}}
          onAction={dispatch}
        />
      </div>
    </>
  );
};
