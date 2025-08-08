 import { Link } from "react-router";
const VideoCard=({data})=>{
     const{channelTitle,thumbnails,title}=data.snippet;  
    return(
        <div className=" w-1/5 shadow-stone-900 rounded-lg m-3">
            <Link to={"/watch?v="+data.id}><img  className="px-4 py-2 rounded-2xl" src={thumbnails.medium.url}/></Link>
            <ul>  
                <li className="font-semibold">{title}</li>
                <li className="font-normal text-white">{data.statistics.viewCount}</li>
                <h1 className="font-normal text-white">{channelTitle}</h1>
            </ul>
        </div>
    )
}
export default VideoCard;