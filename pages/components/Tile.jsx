let Tile = ({title,onClick})=>{
    let returnTitle = ()=>{
        return title
    }
    return(
        <div onClick={onClick} className="tile w-full bg-slate-100 mt-10 p-5 cursor-pointer">
            <label>{title}</label>
        </div>
    )
}
export default Tile