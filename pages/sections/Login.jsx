import {useState} from 'react'
let Login = ({onEmailEnter,onPasswordEnter,onSignIn,onSingup})=>{
    let [email,setEmail] = useState('')
    let [password,setPassword] = useState('')
    //let signUp=()=>{
    //    let auth = getAuth()
    //    createUser(auth,email,password)
    //    alert('welcome')
    //}
    return (
        <div className="login bg-slate-700 w-full h-screen flex justify-evenly items-center">
            <div className="w-full max-w-xs">
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
        Username
      </label>
      <input onChange={onEmailEnter}  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
        Password
      </label>
      <input onChange={onPasswordEnter} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
    
    </div>
    <div className="flex items-center justify-between">
      <button onClick={onSignIn} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Sign In
      </button>
      <button onClick={onSingup} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Sign Up
      </button>
      
    </div>
  </form>
  
</div>
        </div>
    )
}
export default Login