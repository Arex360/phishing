let TableRow = ({username,email,role,admin})=>{
    return(
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">{username}</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{email}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"> {role} </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{admin}</td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>
              </td>
            </tr>
    )
}
export default TableRow