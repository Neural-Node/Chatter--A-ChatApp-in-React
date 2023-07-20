import React from "react";
import ChatBox from "../Components/ChatBox";
import ContactBox from "../Components/ContactBox";

const LoginPage=()=>{
    return(
        <div className="flex space-x-3">
            <ContactBox/>
            <ChatBox/>
            
        </div>
    )
}; export default LoginPage