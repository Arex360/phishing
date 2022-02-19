let TestLogin = ({onEmailEnter,onPasswordEnter,onSignIn,onSingup})=>{
    return(
        <div className="form">
            <h1>Hello</h1>
            <input onChange={onEmailEnter} type="text" />
            <input onChange={onPasswordEnter} type="text" />
            <button onClick={onSignIn} >Login</button>
        </div>
    )
}
export default TestLogin