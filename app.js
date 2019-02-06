
var http = require('http');
var stat=10;
var server= http.createServer(function(req,res){
  console.log('request was made:'+req.url)
  res.writeHead(200,{'content-Type':'text/html'});
  if (req.url ==='/add'){
    res.write(`<h4>add 1 to the  state: ${stat++}</h4`)
  }
   else if(req.url=='/subtract'){
    res.write(`<h4>subtract 1 from   state: ${stat--}</h4`)
   }
   else if (req.url=="/rest") {
   res,write(`state is :${stat}`)
   }
 
  res.end()
});
server.listen(3000,'127.0.0.1');
console.log('hdshjdhsl 3000')