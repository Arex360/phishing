import fs from 'fs'
export default function handler(req, res) {
    let {html,id} = req.body
    console.log(id)
    fs.writeFile(`C:\\Users\\arex\\Desktop\\phish\\phishing\\pages\\api\\out\\${id}.html`,html,()=>{
        console.log('done')
    })
    res.status(200).json({ name: 'done' })
  }
  