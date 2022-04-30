import { useContext, useEffect } from "react"
import { Outlet } from "react-router-dom"
import { Navbar } from "../components/navbar"
import { AuthContext } from "../context/authProvider"
import '../css/homepage.css';
export const HomePage=()=>{

    const {role,token} = useContext(AuthContext);
    useEffect(()=>{
        console.log(role);
        console.log(token);
        
    },[])
    return(
        <div >
        <img src={require("../css/6607.jpg")} alt="" className="img-responsive" />
        <Navbar />
        <Outlet />
        </div>
    )
}