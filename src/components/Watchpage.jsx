import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router";
import { closeMenu } from "../utils/newSlice";
const Watchpage=()=>{
   const [searchParams]=useSearchParams();
    const dispatch=useDispatch();
   useEffect(()=>{
    dispatch(closeMenu());
   },[]);
    return (
        <div>
           <iframe alt="" width="800" height="400" src={"https://www.youtube.com/embed/"+searchParams.get("v")} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    )
}
export default Watchpage;