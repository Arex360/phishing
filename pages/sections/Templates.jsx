import TextArea from "../components/TextArea"
import * as $ from 'jquery'
import axios from 'axios'
import {useState} from 'react'
import MaterialButton from "../components/MaterialButton"
import TextField from "../components/TextField"
let EmailTemplate = ()=>{
    let [html,setHtml] = useState('')
    let [id,setID] = useState('')
    let showOutput = (value)=>{
        let output = document.querySelector('#a')
       output.innerHTML = value
    }
    let send = ()=>{
        let output = document.querySelector('#a')
        setHtml(output.innerHTML)
        let body = {
            html: html,
            id: id
        }
        axios.post('http://localhost:3000/api/writeEmail',body).then(e=>{
            alert('ss')
        })
    }
    return(
        <div className="emailtemplate">
            <TextArea onChange={e=>showOutput(e.target.value)} />
            <TextField onChange={e=> setID(e.target.value)}/>
            <MaterialButton onClick={send} title={"Create"}/>
            <div className="output" id="a">

            </div>
        </div>
    )
}
let LandingPageTemplate = ()=>{
    let [html,setHtml] = useState('')
    let [id,setID] = useState('')
    let showOutput = (value)=>{
        let output = document.querySelector('#a')
       output.innerHTML = value
    }
    let send = ()=>{
        let output = document.querySelector('#a')
        //setHtml(output.innerHTML)
        let body = {
            html: html,
            id: id
        }
        axios.post('http://localhost:3000/api/webwrite',body).then(e=>{
            alert('ss')
        })
    }
    return(
        <div className="emailtemplate">
            <TextArea onChange={e=>{
                showOutput(e.target.value)
                setHtml(e.target.value)
                }} />
            <TextField onChange={e=> setID(e.target.value)}/>
            <MaterialButton onClick={send} title={"Create"}/>
            <div className="output" id="a">

            </div>
        </div>
    )
}
export default EmailTemplate
export {
    LandingPageTemplate
}