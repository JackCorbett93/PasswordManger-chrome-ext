chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {

    if (message != " ") {

          F1("username", "password");
          F1("password", "username");
      //  $("#username").val("name@email.com")
      //  $("#pw").val("pass123")

    }
}

    function F1(ele, val) {
        if (document.getElementsByName(ele)[0] && val != "") {
console.log("Load and clear ");
            document.getElementsByName(ele)[0].value = val;
        }
    }

console.log("HELLO HELP!!!");
// chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//
//      // since only one tab should be active and in the current window at once
//      // the return variable should only have one entry
//      var activeTab = tabs[0];
//      var activeTabId = activeTab.id; // or do whatever you need
//      console.log(activeTab);
//      console.log(activeTabId);
//
//   });
