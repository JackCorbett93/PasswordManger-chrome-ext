import '../img/icon-128.png'
import '../img/icon-34.png'
fetch('https://www.letmein.eu/api/posts/1.json')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }
      response.json().then(response => {
       //console.log(response.data[0].password);
       let logins = [];
       logins = response.data;
       let curwin = window.location.toString();
       console.log(curwin);
       console.log(logins);
       //let i = 0;
      // for(i;i<data.length;i++){
      //   document.write(data[i].website + " " + data[i].email + " " + data[i].password);
    //   }
    chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
    //alert(message.data);
    	chrome.runtime.sendMessage({data:logins},function(response){
    			});
    			});
        return logins;
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);

  });
  
