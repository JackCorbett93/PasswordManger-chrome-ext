
//chrome.runtime.onMessage.addListener(gotMessage);
chrome.tabs.query({
    active: true,
    currentWindow: true
}, function(tabs) {
    //tabURL = tabs[0].url;
});
  chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){

    if (message != " ") {
      //console.log(message.data);
      //console.log($('input[name*=uname').val("help"));
      //$('input:password').val("help");
      //$("input[name*='username']").val("help");
        // F1('username','password2');
        //  F1("password", "username");
      //  $('td[name*=uname').val("name@email.com")
        //  $("#psw").val("pass123")
        var contextMenuItem = {
          "id": "letmein",
          "title": "letmeinpassmanager",
          "contexts": ["editable"]
        };
chrome.contextMenus.create(contextMenuItem);
    }
    function F1(ele, val) {
      console.log("hello3");
        //if (document.getElementsByName(ele)[0] && val != " ") {
          console.log("hello");
          //console.log(document.getElementById(ele)[0].value);
            document.getElementsByName(ele)[0].value = val;
      //  }
    }
})

chrome.contextMenus.onClicked.addListener(function(info, clickdata){
  if (clickdata.menuItemId == contextMenuItem.id){
//console.log(clickdata);
let params = {
  active: true,
  currentWindow: true
}
chrome.tabs.query(params, gotTab);
function gotTab(tabs){
  let msg = {
    txt: "hello"
  }
  console.log("im here");
  chrome.tabs.executeScript((tabs[0].id, {
        frameId: clickdata.frameid || 0,
        matchAboutBlank: true,
        code: `document.execCommand('insertText', false, 'hello')`,
      }))
}

  }
});
