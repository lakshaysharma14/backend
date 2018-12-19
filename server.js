console.log("hi");

//process.stdout.write("hey");

process.stdin.on("data" , function(data)
{
	console.log(String(data));

	if(data.toString().trim() === "exit")    //trim function trims the new line chaarcter fedded by console.log
	{
		process.exit();
	} 
})

process.on("exit" ,function()
{

console.log("Exiting");

})	