import VideoCard from "./VideoCard";
import { useEffect, useState } from "react";
import { YouTube_URL } from "../utils/constants";
import { Link } from "react-router";
const VideoContainer=()=>{
      const[myvideos,setMyVideos]=useState([]);
    useEffect(()=>{
        getvideos();
    },[])
    const getvideos=async()=>{
        const data=await fetch(YouTube_URL);
        const json= await data.json();
        console.log(json);
        setMyVideos(json.items);
    }
    if(myvideos.length===0)
    {
        return <h1>Empty</h1>
    }
    return(
        <div className="flex flex-wrap justify-between">
            {
             myvideos.map((video)=><VideoCard data={video}/>)
            }
        </div>
    )
}
export default VideoContainer;