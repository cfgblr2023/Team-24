import React from "react";

import {
  useMultiChatLogic,
  MultiChatSocket,
  MultiChatWindow,
} from "react-chat-engine-advanced";

const ChatsPage = () => {
  
  const chatProps = useMultiChatLogic(
    "dba1bb99-0859-49ca-a022-7a24b8630d50",
    "lagan",
    "lagan"
  );

  return (
    <>
      <div style={{ height: "100vh" }}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow {...chatProps} style={{ height: "100%" }} />
    </div>
    </>
    
  );
};

export default ChatsPage;
