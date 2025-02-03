// import React, { useEffect } from 'react';
// import axios from 'axios';

// const ChatPage = () => {
//     const [chats,setchats]=React.useState([]);
//         const fetchChats = async () =>{
//         const {data} = await axios.get('/');
//         setchats(data);
//     };

    
//     useEffect(()=>{
//        fetchChats();
//     },[])
//   return (
//     <div>
//       <h1>Hi</h1>
//     </div>
//   )
// }

// export default ChatPage

import { Box } from "@chakra-ui/react";
import { useState } from "react";
import Chatbox from "../components/ChatBox";
import MyChats from "../components/MyChats";
import SideDrawer from "../components/miscellaneous/sideDrawer.js";
import { ChatState } from "../Context/ChatProvider";

const Chatpage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box display="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </div>
  );
};

export default Chatpage;
