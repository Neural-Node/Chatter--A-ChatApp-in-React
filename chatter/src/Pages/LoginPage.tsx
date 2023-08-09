import React from "react";
import ChatBox from "../Components/ChatBox";
import ContactBox from "../Components/ContactBox";
import TextField from "../Components/TextField";

const LoginPage=()=>{
    return(
        <div className="relative flex flex-col justify-center min-h-screen overflow-y-scroll no-scrollbar">
            <div className="flex h-full items-center justify-center">
                <div className="w-[600px] h-[800px] bg-slate-600">
                     <div className="text-[50px] font-mono p-2">Login Page</div>
                <TextField
                    id="userName"
                    label="Username: "
                    //  value={this.state.userName}
                    //  onChange={this.handleChange('userName')}
                    
                />
                <TextField
                    id="password"
                    label="Password: "
                    // value={this.state.password}
                    // onChange={this.handleChange('password')}
                
                />
                </div>
            </div>
            
        </div>
    )
}; export default LoginPage