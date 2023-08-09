import React from "react";
import ChatBox from "../Components/ChatBox";
import ContactBox from "../Components/ContactBox";

const MainPage=()=>{
    return(
        <div className="">
        <div className=" w-auto flex flex-1 space-x-3">
            {/* <ContactBox/> */}
            <ChatBox/>
        </div>
        </div>
    )
}; export default MainPage