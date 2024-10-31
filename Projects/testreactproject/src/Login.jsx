import React from "react";
import Input from "./Input";
import './App.css';
function Login()
{
    return <form className="Form">
        <Input type = "text" placeholder = "Username" />
        <Input type = "text" placeholder = "Password" />
        <button type ="Sumbit">Login</button>
    </form>
}
export default Login;