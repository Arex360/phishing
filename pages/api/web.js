import fs from 'fs';
export default function handler(req, res) {
    const filename = 'C:\\Users\\arex\\Desktop\\phish\\phishing\\pages\\api\\index.html';
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    let file = fs.readFileSync(filename)
    res.write(file);
    res.end();
  }
  