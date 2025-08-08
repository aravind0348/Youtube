
const Blist=({name})=>{
    return(
       <button className="h-6 w-20 bg-stone-800 text-white rounded-md m-4">{name}</button> 
    )
}
const Buttons=()=>{
    const names=["All","cinema","podcast","News","Mixes","Live","DSA","Aptitude","Tamil","Ntv"]
    return(
        <div>
            {
              names.map((name1)=><Blist name={name1}/>) 
            }
        </div>
    )
}
export default Buttons;