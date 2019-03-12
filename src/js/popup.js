import "../css/popup.css";
import hello from "./popup/example";
let tabURL;
let login;
let str = [];
let hey = 1;
function cutUrl(str) {
    var matched = str.match(/([^/]*\/){6}/);
    return matched ? matched[0] : str/* or null if you wish */;
}
chrome.tabs.query({
    active: true,
    currentWindow: true
}, function(tabs) {
    tabURL = tabs[0].url;
		var erl = cutUrl(tabURL);
    document.write(erl+ "\n");
});

chrome.runtime.sendMessage({data:"Handshake"},function(response){
			});
			window.onload = function() {
				chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
				  str = message.data;
					//str = JSON.stringify(message.data);
					let i =0;
					for(i;i<str.length;i++){
					//if(str[i].website == erl)
				//	{
					//
				//	}
				}
				login = str[0].email + "\n" + str[0].password + "\n";
				document.write(login);
				chrome.tabs.query(params, gotTab);
					//if (hey == 1){
						//document.write("sendign data");
					//	chrome.runtime.sendMessage({data:login},function(response){
							});
							let params = {
								active: true,
								currentWindow: true
							}

							function gotTab(tabs){
								let msg = {
									txt: "hello"
								}
								chrome.tabs.sendMessage(tabs[0].id, login);
							}

			};





//import stuff from "./greeting_component"
//stuff();
//hello();
//let hello2 = hello();
//console.log(hello2);
