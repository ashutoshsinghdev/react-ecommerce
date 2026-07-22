import { useState } from 'react'
import { ChatInput } from './components/ChatInput'
import { ChatMsges } from './components/ChatMsges'
 
import './App.css'


function App(){
        const[ChatList,Newchat]=useState([{msg:"hey bro",sender:"user",id:"id1"},
    {msg:"fine mate",sender:"ai",id:"id2"}])//it can store any type of value but gives only array.
        return(
          <div className="App-container">

            <ChatMsges ChatList={ChatList} />
            <ChatInput ChatList={ChatList} Newchat={Newchat}/>
          </div>
        );
      }

export default App
