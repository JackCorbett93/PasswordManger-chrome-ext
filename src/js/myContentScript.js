import $ from "jquery";
$(window).on( "load", function() {
chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {

    if (message != " ") {
      console.log(message);
      //console.log($('input[name*=uname').val("help"));
      $('input:password').val("help");
      $("input[name*='username']").val("help");
         F1('username','password2');
        //  F1("password", "username");
      //  $('td[name*=uname').val("name@email.com")
        //  $("#psw").val("pass123")

    }
    function F1(ele, val) {
      console.log("hello3");
        //if (document.getElementsByName(ele)[0] && val != " ") {
          console.log("hello");
          //console.log(document.getElementById(ele)[0].value);
            document.getElementsByName(ele)[0].value = val;
      //  }
    }

}
  });





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
