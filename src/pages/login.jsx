import { useState } from "react";
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Login=(props)=>{
    const navigate = useNavigate();
    const[eusername,setEusername] = useState("");
    const[epassword,setEpassword] = useState("");
    const[ruser,setRuser] = useState(true);
    
    const users = props.users;
    /* const setUsers = props.setUsers; */

    const handleChangeUserInput=(evt)=>{
        setEusername(evt.target.value);
    }

    const handleChangePasswordInput=(evt)=>{
        setEpassword(evt.target.value);
    }
    
    const checkUser=()=>{
        var rusersfound = false;
        users.forEach(function(item){
            console.log(users);
            if(item.username === eusername && item.password === epassword){
                setRuser(true);
                rusersfound = true;
                navigate("/landing",{state:{user:eusername}});
            }
        });
        if(rusersfound === false){
            console.log("Login Failed");
            setRuser(false);
        }
    }

    return(
        <div className="bg-black border rounded-md p-16">
            <div className="bg-[#EFEFEF] border rounded-md p-10">
                
                    <h1 className="text-3xl font-medium">Hey Hi</h1>
                    {ruser? <p>You can Login here:)</p> : <p className="text-red-700">Please Signup before Login</p>}
                    <div className="flex flex-col gap-2 my-2">
                        <input type="text" placeholder="Username" className="border border-black bg-transparent rounded-md p-1 w-52" onChange={handleChangeUserInput}/>
                        <input type="text" placeholder="Password" className="border border-black bg-transparent rounded-md p-1  w-52" onChange={handleChangePasswordInput}/>
                        <button className="bg-[#8373DA] border-0 rounded-md p-1 w-24" onClick={checkUser}>Login</button>
                        <p>Don't have an account ? <Link to={"/Signup"} className="underline">Sign Up</Link></p>
                    </div>
            </div>
        </div>
    );
}

export default Login;