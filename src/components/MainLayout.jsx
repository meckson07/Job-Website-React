import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const OutLet=()=>{
    return(
        <>
        <Navbar/>
        <Outlet/>
        </>
    )
}

export default OutLet