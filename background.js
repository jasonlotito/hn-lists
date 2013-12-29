chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {

  var friendsList;

  if(!localStorage['friendsList']) {
    localStorage['friendsList'] = JSON.stringify([]);
    friendsList = [];
  } else {
    friendsList = JSON.parse(localStorage['friendsList']);
  }

  // This needs to be cleaned up
  if (request.method == "getSetting") {
    if(!localStorage[request.settingName]) {
      localStorage[request.settingName] = true;
    }

    sendResponse({status: localStorage[request.settingName]});
  } else if (request.method == 'getFriends') {
    sendResponse({friendList: friendsList});
  } else if (request.method == 'addFriend') {
    if( friendsList.indexOf(request.name) == -1 ){
      friendsList.push(request.name);
      localStorage['friendsList'] = JSON.stringify(friendsList);
    }

    sendResponse({friendList: friendsList});

  } else if (request.method == 'deleteFriend') {
    var index = friendsList.indexOf(request.name);

    if( index > -1 ){
      friendsList.splice(index, 1);
    }

    localStorage['friendsList'] = JSON.stringify(friendsList);
    sendResponse({friendList: friendsList});
  } else {
    sendResponse({}); // snub them.
  }

});