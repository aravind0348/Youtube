import { useSelector } from "react-redux";
import { Link } from "react-router";
const Sidebar=()=>{
   const isopen=useSelector(state=>state.app.isopen)
   if(isopen===false)
   {
    return null;
   }
    return(
        <div className="w-1/6 shadow-stone-900 bg-stone-900 text-white pl-6">
          <h1 className="font-bold"><Link to="/">Home</Link></h1>
          <ul className="px-2">
            <li>Music</li>
            <li>Cricket</li>
            <li>Movies</li>
            <li>Songs</li>
          </ul>
          <h1 className="font-bold">Subscriptions</h1>
          <ul className="px-2">
              <li>Music</li>
            <li>Cricket</li>
            <li>Movies</li>
            <li>Songs</li>
          </ul>
         <h1 className="font-bold">Explore</h1>
          <ul className="px-2">
              <li>Music</li>
            <li>Cricket</li>
            <li>Movies</li>
            <li>Songs</li>
          </ul>
        </div>
    )
}
export default Sidebar;