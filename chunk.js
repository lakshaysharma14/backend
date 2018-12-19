var https = require("https"); // core module present in node

var fs = require("fs");		 //core module to work with files

var options = 
{
	hostname:"en.wikipedia.org",
	path:"/wiki/Shashi_Tharoor",
	method:"GET",
	port:443
};

var req = https.request(options,function(res)	//Parameters => (1st paarmeter where request is sent, 2nd Parameter after sending request what you have to do )				
	{
		res.setEncoding("UTF-8");   			//Character Codning to avoid display the buffer
		var resStr="";

		res.on("data",function(chunk)			//here data is an event
		{
			console.log(chunk.length);
			resStr+=chunk;
		})

		res.on("end" ,function()
		{
			fs.writeFile("wiki.html", resStr,function(err) //PARAMETERS => (filename,content ,callbackfunction-for-displaying-error)
			{
				if(err)
				{
					throw err
				}			
				else
				{
					console.log("Total Chunks=");
					console.log(resStr.length);
					console.log("File downloaded !! ")
				}


		})

	})
	
})

req.end(); // after this statement request will be send to the server otherwise if we dont include this req will only be created but not send