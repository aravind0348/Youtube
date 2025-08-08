
import { useDispatch } from "react-redux";
import { togglemenu } from "../utils/newSlice";
const Header=()=>{
    const dispatch=useDispatch();
    return(
        <div className="flex  justify-between bg-black items-center">
            <div className="flex m-4 ">
            <img  onClick={
                ()=>{
                  dispatch(togglemenu());
                }
            } className="w-10" alt="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf6leXdBQdbfMIB2IgtTmHAlO6VeyUxOThqzup-PHc7pNfJ2eIBMLhLIosyJhiet_2gPQ&usqp=CAU"/>
            <img  className="w-20 ml-3" alt="utube"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcU560l55GT4frppFcMy8DsNNFJIA00iHL6A&s"/>
            </div>
            <div className="flex w-3/6  border-2 border-stone-700 rounded-full justify-between  h-10">
                <input type="text" placeholder="Search" className=" w-4/5 rounded-full  px-4"></input>
                <button>
                    <img className="w-8 mr-3" alt="mg"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsdacHxVoZXNEzEJzq2CLW_01Gbh25ZxRh1w&s"></img>
                </button>
            </div>
            <div className="flex m-4 ">
                <button className="h-10 w-20 border-1 bg-stone-700 text-white rounded-lg m-2">+Create</button>
                <img className="w-5 ml-4" alt="bell" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSrmFfJs6hLb-a6s8IX6h6P2GJExESiDj1IA&s"/>
            </div>
        </div>
        
    )
}
export default Header;