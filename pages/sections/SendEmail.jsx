import axios from "axios"
import { useEffect, useState } from "react"
import MaterialButton from "../components/MaterialButton"
import TextField from "../components/TextField"

let SendEmail = ({user})=>{
    let [html,setHtml] = useState('')
    let [to,setTo] = useState('')
    let [title,setTitle] = useState('')
    let getWebSite = ()=>{
        axios.get('/api/preview?id=phishing').then(res=>{
            res= res.data
            let doc = document.querySelector('#preview')
            setHtml(res)
            doc.innerHTML = res
        })
    }
    let SendEmail = ()=>{
        axios.post('/api/sendmail',{
            to: to,
            body: html,
            title: title
        }).then(e=>{
            alert('sent Email')
        })
    }
    useEffect(()=>{
        getWebSite()
    },[])
    return(
        <div className="email bg-slate-50 w-5/6  p-4">
            <div className="row w-1/2">
                <label>To </label>
                <TextField onChange={e=>setTo(e.target.value)} placeholder="Enter target destination"/>
            </div>
            <div className="row w-1/2">
                <label>Title </label>
                <TextField onChange={e=>setTitle(e.target.value)} placeholder="Enter Title"/>
            </div>
            <div id="preview">
                
            </div>
            <MaterialButton onClick={SendEmail} title={"send"}/>
        </div>
    )
}
export default SendEmail