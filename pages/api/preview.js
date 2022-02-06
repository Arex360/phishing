import fs from 'fs'
export default function handler(req, res) {
    let {id} = req.query
    let path2 = __dirname
    path2 = path2.split('\\.next\\server\\')
    path2 = path2[0] + '\\'+ path2[1] 
    const filename = path2 + `\\out\\${id}.html`;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    let file = fs.readFileSync(filename)
    res.write(file);
    res.end();
  }
  