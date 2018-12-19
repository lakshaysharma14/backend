var http=require("http");  //CORE MODULE(**DIFF FROM THE PREV ONE**) importing some sort of module from node packages

var server=http.createServer(function(req,res) //CREATING A SEVER LOCALLY
{
	console.log("Recevied Request");
	res.writeHead(200,{"Content-Type":"text/html"}); //200=>Succcess Code
	res.end(`
		
			<!Doctype html>
			
			<html>
			
				<head>
				
				<title>Codechef</title>
				
				</head>
			
			<body>
			
				<h1> Lunchtime@Codechef </h1>
			
			</body>
			
			</html>
		`);
})

server.listen(3000);

console.log("Server is Listening");