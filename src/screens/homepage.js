import { Outlet } from "react-router-dom"
import { Navbar } from "../components/navbar"
export const HomePage=()=>{
    
    return(
        <div >
        <Navbar />
        
        {/* <img style={{position:'absolute'}}src={require("../css/lib.jpg")} alt="" className="img-responsive" /> */}
        <Outlet />
        </div>
    )
}