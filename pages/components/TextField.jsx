let TextField = ({onChange})=>{
    return(
        <>
        <div className="my-4">
        <input onChange={onChange} placeholder="Enter template ID" className="input border border-gray-400 appearance-none rounded w-full px-3 py-3 pt-5 pb-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600" id="email" type="text" autoFocus/>
        
    </div>
        </>
    )
}
export default TextField