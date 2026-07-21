import { useState,useEffect,useRef } from 'react'
import { Chatbot } from 'supersimpledev'
import aiProfileImage from './assets/ai.png'//we write./ to find file in same folder and if there is a folder inside which our file is locateded and that folder is inside same folder then we do ./fname/  
import userProfileImage from './assets/user.png'

import './App.css'

 function ChatInput({ChatList,Newchat}){
      const[InputText,setInputText]=useState("")


      function saveInputText(event){
        setInputText(event.target.value)//this replaeces old value to new value(text) inside inputtext.
      }

      function sentMsg(){
        // console.log(InputText);
        const ourMsg=[
                    ...ChatList,
                    {
                        msg:InputText,
                        sender:"user",
                        id:crypto.randomUUID()
                    }
                ]
        
      const response=Chatbot.getResponse(InputText);
      Newchat(
                [
                    ...ourMsg,//here the msg will be in form of list of obj
                    {
                        msg:response,
                        sender:"ai",
                        id:crypto.randomUUID()
                    }
                ]
            );
      setInputText("")
    }
          return(
            <div className="input-container">
              <input placeholder="Write here your qeary to the chatbot" size="30" onChange={saveInputText} value={InputText} className="chat-input"/>
              <button onClick={sentMsg} className="sent-btn">Send
                </button>
            </div>
          );
        }
   
    function ChatMsg({msg,sender}){
      
       
        return(
         
          <div className={sender==="user"?"usermsg":"aimsg"}>

            {sender==="ai" && <img src={aiProfileImage} width="40"/>}

            <div className="msgtext">
              {msg}
            </div>

            {sender==="user" && <img src={userProfileImage} width="40"/>}
          </div>
      );
    }
   
    function ChatMsges({ChatList}){
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
