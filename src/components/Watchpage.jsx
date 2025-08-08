import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router";
import { closeMenu } from "../utils/newSlice";
const CommentBox=({data})=>{
    console.log(data);
    const{name,Text}=data;
    return(
        <div className="mt-3 shadow-2xl bg-neutral-100">
            <div className="flex px-1">
            <img alt="user-icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6xSz0eMW7GmpKukczOHvPWWGDqaBCqWA-Mw&s" className="w-8 h-8"></img>
            <h1 className="ml-5 font-medium">{name}</h1>
            </div>
              <h1 className="px-6 mt-2">{Text}</h1>
        </div>
    )
}
const commentData=
[
    {
       name:"Aravind",
       Text:"So Good to Watch this after a long time",
    },
    {
        name:"Kalyan",
        Text:"Haven't seen like this never before",
    },
     {
        name:"Narsi",
        Text:"Good to Watch",
    },
     {
        name:"vijay",
        Text:"mass editing ,everything on top notch",
    },
     {
        name:"Kumar",
        Text:"very very impressive",
    },
]
const Watchpage=()=>{
   const [searchParams]=useSearchParams();
    const dispatch=useDispatch();
   useEffect(()=>{
    dispatch(closeMenu());
   },[]);
    return ( 
        <div>
           <iframe alt="" width="800" height="400" src={"https://www.youtube.com/embed/"+searchParams.get("v")} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
           <h1 className="font-bold mt-2">Comments</h1>
           {
             commentData.map(comment=> <CommentBox data={comment}/>)
           }
      </div>
    )
}
export default Watchpage;