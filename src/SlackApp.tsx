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

  const id = slackState.id ?? '';
  const channels = useMemo(
    () => objectFilter(slackState.messageStreamConfig, CHANNEL),
    [slackState.messageStreamConfig]
  );
  const apps = useMemo(() => objectFilter(slackState.messageStreamConfig, APP), [slackState.messageStreamConfig]);
  const users = useMemo(() => objectFilter(slackState.messageStreamConfig, USER), [slackState.messageStreamConfig]);

  return (
    <>
      <Header />
      <div className="slack__body">
        <SideBar onAction={dispatch} channels={channels} users={users} apps={apps} />
        <ChatBox
          id={id}
          displayName={slackState.messageStreamConfig[id]?.name ?? ''}
          messageStreamConfig={slackState.messageStreamConfig[id] ?? {}}
          onAction={dispatch}
        />
      </div>
    </>
  );
};
