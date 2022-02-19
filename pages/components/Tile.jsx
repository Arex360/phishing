import {AiFillDelete, AiFillPushpin, AiTwotoneStar} from 'react-icons/ai'
let Tile = ({title,onClick})=>{
    let returnTitle = ()=>{
        return title
    }
    return(
        <div onClick={onClick} className="tile flex rounded-md items-center justify-between gap-2 w-full bg-slate-100 hover:bg-gray-700  duration-100 group mt-2 p-5 cursor-pointer shadow-md">
            <div className="left flex  items-center  gap-8 group-hover:text-white  duration-75">
                <AiTwotoneStar/>
                <label>{title}</label>
            </div>
            <div className="right flex  items-center  gap-2 group-hover:text-white  duration-75">
                <AiFillDelete className=' duration-300'/>
            </div>
        </div>
    )
}
export default Tile