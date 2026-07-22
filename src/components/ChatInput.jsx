import { useState} from 'react'
import { Chatbot } from 'supersimpledev'

export function ChatInput({ChatList,Newchat}){
      const[InputText,setInputText]=useState("")


      function saveInputText(event){
        setInputText(event.target.value)//this replaeces old value to new value(text) inside inputtext.
      }

      function sentMsg(){
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