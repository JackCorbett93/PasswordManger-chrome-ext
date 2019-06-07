import '../img/icon-128.png';
import '../img/icon-34.png';
import axios from 'axios';
axios.get('https://www.letmein.eu/api/posts', {
  'headers': {
    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjA4NjVjOWI2ZDlkYzMxMmM1YTQ4ZDBkYTljNDM2NmNjNzQ5NmQ3MjdhMGMwNDJiOTRiNDJiYzFjYmIzNGE1ZjM4NjRlNTM4MzEyMjZkNDA1In0.eyJhdWQiOiIyIiwianRpIjoiMDg2NWM5YjZkOWRjMzEyYzVhNDhkMGRhOWM0MzY2Y2M3NDk2ZDcyN2EwYzA0MmI5NGI0MmJjMWNiYjM0YTVmMzg2NGU1MzgzMTIyNmQ0MDUiLCJpYXQiOjE1NTgzMDY5NzQsIm5iZiI6MTU1ODMwNjk3NCwiZXhwIjoxNTg5OTI5Mzc0LCJzdWIiOiIyNyIsInNjb3BlcyI6W119.CEQrBURCWQ7wH0pHGnWPKcZMLwOX0pWY1inbMg8xaI8wqDnZQLLnmJdoKfe1qnu1eec6_7JdV5zTgEA9ugG-hfevCkGv0cXZVJZuSlBQm3F8RVw7R2egZN6612eY3s34g_3aePDnenRX0LPhIhehnBtq87pqP54Zf5B1O7OzDp977B0FaG4pmYylwLYdOkWxECrVkFpi21wAUjWtERS45NpliRdmouWfzVwpezTr0J1-bEH4p2kCXcIQdfgtOR7gaITYYPrs6vR3HtMrjTMKoeO6xqUnY2H_4VKUZ8LqXIIogBqxrBxIYXnK3w6FPYuHTwANsCAMUJ7NgC5WEy9keYnG6jYqm_Y2pBj-jwb0V7pJdQBEnIOo-uhmmPDucH_D5NO7UkxJC5VRMffmoT5KErmPismH_RoHHS4OCMqNDXlT44EcEyWU_Fa_JtayV_d7nx_fQZTyE0JsCjfuRxdowSYRyI40rm4U44yl4h-PEgEXWrEMszWAn_vwnvMhXpMnNrJEvwbCbwpAoB3W9ivsh5-yb1mkp7SsZh2m45NxQRWwr6ItGEg9U34V9A3PkTqgP8sjF-gLl1ISPgXBYvFtFm5dFiAAGhTo_D9YVuLwIhv0PQzkVN-85ucn9vmjaYs4g8hQMSpASgFXYu9Ggj0ZSMBODZTNojoNHwwEEmg-Yus'
  }
})
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
       document.write(logins);
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
