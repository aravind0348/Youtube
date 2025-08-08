import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";
import { Outlet } from "react-router";

const Body=()=>{
    return(
        <div className="flex mt-0">
           <Sidebar/>
           <Outlet/>
        </div>
    )
}
export default Body;