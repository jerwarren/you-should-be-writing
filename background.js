// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Called when the user clicks on the browser action.
var idle;
function action(){
  chrome.tabs.executeScript({
    code: 'alert("test2");var x=0;var myAudio = new Audio(chrome.runtime.getURL("school-bell.mp3"));function loop(){idle = document.querySelector(".docs-title-save-label-text").innerText;console.log(idle);if (idle == "Last edit was 10 minutes ago"){myAudio.play();console.log("test");}setTimeout(loop, 30000);}loop();'
  });
}
chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  
    chrome.tabs.executeScript({
      code: 'var x=0;var myAudio = new Audio(chrome.runtime.getURL("school-bell.mp3"));function loop(){idle = document.querySelector(".docs-title-save-label-text").innerText;console.log(idle);if (idle == "Last edit was 10 minutes ago"){myAudio.play();console.log("test");}setTimeout(loop, 30000);}loop();'
    });

});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.greeting == "hello"){
      sendResponse({farewell: "goodbye"});
      action();
    }
  });


