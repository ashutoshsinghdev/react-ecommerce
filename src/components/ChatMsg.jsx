import aiProfileImage from '../assets/ai.png'//we write./ to find file in same folder and if there is a folder inside which our file is locateded and that folder is inside same folder then we do ./fname/ 

import userProfileImage from '../assets/user.png'

import './ChatMsg.css'


  export function ChatMsg({msg,sender}){
      
       
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