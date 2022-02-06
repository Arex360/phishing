import fs from 'fs'
export default function handler(req, res) {
    let {html,id} = req.body
    let path = `C:\\Users\\arex\\Desktop\\phish\\phishing\\pages\\api\\out\\${id}.html`
    let path2 = __dirname
    path2 = path2.split('\\.next\\server\\')
    path2 = path2[0] + '\\'+ path2[1] +`\\out\\${id}.html`
    console.log(path)
    console.log(path2)
    fs.writeFile(`${path2}`,html,()=>{
        console.log('done')
    })
    res.status(200).json({ name: 'done' })
  }
  