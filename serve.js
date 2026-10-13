const http=require('http'),fs=require('fs'),path=require('path');
http.createServer((q,r)=>{const f=path.join(__dirname,q.url==='/'?'index.html':decodeURIComponent(q.url.split('?')[0]));
fs.readFile(f,(e,d)=>{if(e){r.writeHead(404);r.end('nf');return;}r.writeHead(200,{'Content-Type':f.endsWith('.html')?'text/html; charset=utf-8':'application/octet-stream'});r.end(d);});}).listen(8080,()=>console.log('http://localhost:8080'));
