//making the bricks of the wall
console.log("Don't mind me, just building a wall.");
//check and make sure the wall wasn't already accidentally built
var shouldNotExist = document.getElementById("distractionDeterrentWall");
if(shouldNotExist === null){
//all is right with the worlds, let's make us a wall!
	chrome.extension.sendRequest({msg: "gimmeBlockTime"}, function(response){
		blockTime = response.msg / 1000;
		var wallDiv = document.createElement('div');
		wallDiv.id = 'distractionDeterrentWall';
		wallDiv.setAttribute('style', 
			'position: fixed; left: 0px; top: 0px; width: 100%; height: 100%; '
			+ 'z-index: 9000001; background-image: '
			+ '-webkit-linear-gradient(bottom, rgb(204, 204, 204) 0%, rgb(255, 255, 255) 75%); '
			+ 'padding-top: 5em; padding-right: 1em; padding-bottom: 1em; padding-left: 1em; '
			+ 'text-align: center; color: rgb(0, 0, 0); font-family: sans-serif; font-size: '
			+ '16px; font-style: normal; font-variant: normal; font-weight: normal; '
			+ 'line-height: 1;' 
			);
		var wallImg = document.createElement('img');
		wallImg.setAttribute('src', chrome.extension.getURL("icon128.png"));
		wallImg.setAttribute('alt', 'Hour glass...');
		wallImg.setAttribute('style', 'margin-bottom: 1em;');
		var wallP = document.createElement('p');
		wallP.setAttribute('style', 
			'margin-top: 0px; margin-right: 0px; margin-bottom: 0.5em; margin-left: 0px;'
			);
		var wallText = document.createTextNode("Page blocked for " + blockTime + " seconds.  "
			+ "Do you really need to be here?"
			);

		//building the wall
		wallDiv.appendChild(wallImg);
		wallDiv.appendChild(wallP);
		wallP.appendChild(wallText);

		//putting up the wall
		document.body.appendChild(wallDiv);

		console.log("OK, I'm out!");
	});
} else {
	console.warn("Wall already exists!  This script should not have been called!");
}


	