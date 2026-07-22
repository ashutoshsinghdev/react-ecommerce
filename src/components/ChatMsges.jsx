import { useEffect,useRef } from 'react'

import { ChatMsg } from './ChatMsg.jsx'
import './ChatMsges.css'



    
    export function ChatMsges({ChatList}){
      //Hooks:-
      const ChatListRef=useRef(null);

      useEffect(
        ()=>{
          const containerElem=ChatListRef.current;
          if(containerElem){
            containerElem.scrollTop=containerElem.scrollHeight;
          }
        },[ChatList] 
      );
 


        return(  
          <div className="displaymsgcontainer" ref={ChatListRef}>

               { ChatList.map((Chat)=>{
                    return(
                        <ChatMsg 
                            msg={Chat.msg}
                            sender={Chat.sender}
                            key={Chat.id}
                        />
                    );
                }
            )
            
        }
        </div>

    );
}

