import React from "react";
import ChatBox from "../Components/ChatBox";
import ContactBox from "../Components/ContactBox";

const LoginPage=()=>{
    return(
        <div className="flex space-x-3">
            <TextField
                 id="userName"
                 label="Username: "
                 value={this.state.userName}
                 onChange={this.handleChange('userName')}
                 margin="normal"
            />
            <TextField
                id="password"
                label="Password: "
                value={this.state.password}
                onChange={this.handleChange('password')}
                margin="normal"
            />
            
        </div>
    )
}; export default LoginPage