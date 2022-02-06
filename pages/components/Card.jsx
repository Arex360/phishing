import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

let Card = ({icon,title,onClick})=>{
    return (
        <div className="card bg-white w-1/5 h-1/3 flex flex-col justify-center items-center rounded-lg shadow-2xl cursor-pointer" onClick={onClick}>
            <FontAwesomeIcon icon={icon} color='#4329f0' size='6x'></FontAwesomeIcon>
            <lable className="text-2xl my-5">{title}</lable>
        </div>
    )
}
export default Card