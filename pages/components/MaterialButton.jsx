let MaterialButton = ({title, onClick})=>{
    return <>
        <button onClick={onClick} className="w-full shadow-lg hover:shadow-xl bg-gray-800 py-3 my-4 text-sm text-white rounded-md  font-medium">
            {title}
        </button>
    </>
}
export default MaterialButton