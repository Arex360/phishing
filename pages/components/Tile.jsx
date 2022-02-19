import {AiFillDelete, AiFillPushpin} from 'react-icons/ai'
let Tile = ({title,onClick})=>{
    let returnTitle = ()=>{
        return title
    }
    return(
        <div onClick={onClick} className="tile flex rounded-md items-center justify-between gap-2 w-4/6 hover:w-full mx-auto bg-slate-100 hover:bg-sky-400 duration-300 group mt-2 p-5 cursor-pointer shadow-md">
            <div className="left flex  items-center  gap-2 group-hover:text-white group-hover:text-2xl duration-75">
                <AiFillPushpin/>
                <label>{title}</label>
            </div>
            <div className="right flex  items-center  gap-2 group-hover:text-white group-hover:text-2xl duration-75">
                <AiFillDelete className='hover:text-4xl duration-300'/>
            </div>
        </div>
    )
}
export default Tile