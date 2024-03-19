import { useState } from "react";
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Signup=(props)=>{

    const navigate = useNavigate();

    const users = props.users;
    const setUsers = props.setUsers;

    const [eusername,setEusername] = useState("");
    const [epassword,setEpassword] = useState("");

    const handleChangeUserInput=(evt)=>{
        setEusername(evt.target.value);
    }

    const handleChangePassInput=(evt)=>{
        setEpassword(evt.target.value);
    }

    const handleUserRegisterd=()=>{
        setUsers([...users,{username:eusername,password:epassword}]);
        navigate("/");
    }

    return(
        <div className="bg-black border rounded-md p-16">
            <div className="bg-[#EFEFEF] border rounded-md p-10">
                
                    <h1 className="text-3xl font-medium">Hey Hi</h1>
                    <p>You can Signup here:)</p>
                    <div className="flex flex-col gap-2 my-2">
                        <input type="text" placeholder="Username" className="border border-black bg-transparent rounded-md p-1 w-52" onChange={handleChangeUserInput}/>
                        <input type="text" placeholder="Password" className="border border-black bg-transparent rounded-md p-1  w-52" onChange={handleChangePassInput}/>
                        <input type="text" placeholder="Confirm Password " className="border border-black bg-transparent rounded-md p-1  w-52" />
                        <button className="bg-[#FCA201] border-0 rounded-md p-1 w-24" onClick={handleUserRegisterd}>Sign Up</button>
                        <p>Already have an account ? <Link to={"/"} className="underline">Login</Link></p>
                    </div>
            </div>
        </div>
    );
}

export default Signup;