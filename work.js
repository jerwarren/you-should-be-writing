var x=0;var myAudio = new Audio(chrome.runtime.getURL("school-bell.mp3"));function loop(){idle = document.querySelector('.docs-title-save-label-text').innerText;console.log(idle);if (idle == "Last edit was 1 minute ago"){myAudio.play();console.log("test");}setTimeout(loop, 30000);}loop();


