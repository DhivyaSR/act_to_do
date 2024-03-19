import { useLocation } from "react-router-dom";
import Header from "../components/header";
import Card from "../components/card";
import ToDoContainer from "../components/TodoContainer";

const Landing=()=>{
    const data = useLocation();
    console.log(data);
    let login_username = data.state.user;
    return(
        <div className="bg-black p-16">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                    <Header username = {login_username}/>
                    <div className="flex my-5 gap-10 flex-wrap justify-between">
                        <Card bgcolor={"#8272DA"} title={"23"} subtitle={"Chennai"}/>
                        <Card bgcolor={"#FD6663"} title={"December 20"} subtitle={"14:23:06"}/>
                        <Card bgcolor={"#FCA201"} title={"Built Using"} subtitle={"React"}/>
                    </div>
                    <ToDoContainer/>
            </div>
        </div>
    );
}

export default Landing;