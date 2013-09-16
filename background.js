chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
  if (request.method == "getSetting") {
    if(!localStorage[request.settingName]) {
      localStorage[request.settingName] = true;
    }

    sendResponse({status: localStorage[request.settingName]});
  } else {
    sendResponse({}); // snub them.
  }
});