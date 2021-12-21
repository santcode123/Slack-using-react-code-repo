import React, { useState, useCallback } from 'react';

//components
import { Header } from './components/header/Header';
import { SideBar } from './components/sidebar/SideBar';
import { ChatBox } from './components/maincontent/ChatBox';

//types
import { MessageStreamMapType, channelType, userType, SetIdContextType } from './types';

export const SetIdContext = React.createContext<SetIdContextType>(() => {});

export const SlackApp = (): React.ReactElement => {
  const [numChannelAndUser, setnumChannelAndUser] = useState(0);
  const [MessageStreamMap, setMessageStreamMap] = useState<MessageStreamMapType>({});
  const [channels, setChannnels] = useState<channelType>({});
  const [users, setUsers] = useState<userType>({});
  const [Id, setId] = useState(0);

  const handleMainContent = useCallback(
    ({ channelName, userName }: { channelName: string; userName: string }) => {
      setnumChannelAndUser(numChannelAndUser + 1); // new channel or direct chat is created....

      if (channelName) setChannnels((prev: channelType) => ({ ...prev, [numChannelAndUser]: channelName }));
      if (userName) setUsers((prev: userType) => ({ ...prev, [numChannelAndUser]: userName }));

      setMessageStreamMap((prev: MessageStreamMapType) => ({ ...prev, [numChannelAndUser]: [] }));
    },
    [numChannelAndUser]
  );
  console.log('id :', Id);
  return (
    <>
      <Header />
      <div className="slack-app m-1">
        <SetIdContext.Provider value={(id: number) => setId(id)}>
          <SideBar handleMainContent={handleMainContent} channels={channels} users={users} />
        </SetIdContext.Provider>
        <ChatBox
          id={Id}
          channelName={channels[Id]}
          userName={users[Id]}
          setMessageStreamMap={setMessageStreamMap}
          MessageStreamMap={MessageStreamMap}
        />
      </div>
    </>
  );
};
