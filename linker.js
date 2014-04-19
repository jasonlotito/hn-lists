(function() {
  const TWITTER_IMAGE = 'data:image/gif;base64,R0lGODlhDwAPALMAAIKCgoyMjJKTkpqamqKjoqmpqbCwsLu8u8DAwMzNzNXV1dna2ePk4+jo6P7+/gAAACH5BAkKAA8AIf8LSUNDUkdCRzEwMTL/AAAHqGFwcGwCIAAAbW50clJHQiBYWVogB9kAAgAZAAsAGgALYWNzcEFQUEwAAAAAYXBwbAAAAAAAAAAAAAAAAAAAAAAAAPbWAAEAAAAA0y1hcHBsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALZGVzYwAAAQgAAABvZHNjbQAAAXgAAAVsY3BydAAABuQAAAA4d3RwdAAABxwAAAAUclhZWgAABzAAAAAUZ1hZWgAAB0QAAAAUYlhZWgAAB1gAAAAUclRSQwAAB2wAAAAOY2hhZAAAB3wAAAAsYlRSQwAAB2wAAAAOZ1RS/0MAAAdsAAAADmRlc2MAAAAAAAAAFEdlbmVyaWMgUkdCIFByb2ZpbGUAAAAAAAAAAAAAABRHZW5lcmljIFJHQiBQcm9maWxlAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABtbHVjAAAAAAAAAB4AAAAMc2tTSwAAACgAAAF4aHJIUgAAACgAAAGgY2FFUwAAACQAAAHIcHRCUgAAACYAAAHsdWtVQQAAACoAAAISZnJGVQAAACgAAAI8emhUVwAAABYAAAJkaXRJVAAAACgAAAJ6bmJOTwAAACYAAAKia29LUgAAABYAAP8CyGNzQ1oAAAAiAAAC3mhlSUwAAAAeAAADAGRlREUAAAAsAAADHmh1SFUAAAAoAAADSnN2U0UAAAAmAAAConpoQ04AAAAWAAADcmphSlAAAAAaAAADiHJvUk8AAAAkAAADomVsR1IAAAAiAAADxnB0UE8AAAAmAAAD6G5sTkwAAAAoAAAEDmVzRVMAAAAmAAAD6HRoVEgAAAAkAAAENnRyVFIAAAAiAAAEWmZpRkkAAAAoAAAEfHBsUEwAAAAsAAAEpHJ1UlUAAAAiAAAE0GFyRUcAAAAmAAAE8mVuVVMAAAAmAAAFGGRhREsAAAAuAAAFPgBWAWEAZQBvAGIAZQD/YwBuAP0AIABSAEcAQgAgAHAAcgBvAGYAaQBsAEcAZQBuAGUAcgBpAQ0AawBpACAAUgBHAEIAIABwAHIAbwBmAGkAbABQAGUAcgBmAGkAbAAgAFIARwBCACAAZwBlAG4A6AByAGkAYwBQAGUAcgBmAGkAbAAgAFIARwBCACAARwBlAG4A6QByAGkAYwBvBBcEMAQzBDAEOwRMBD0EOAQ5ACAEPwRABD4ERAQwBDkEOwAgAFIARwBCAFAAcgBvAGYAaQBsACAAZwDpAG4A6QByAGkAcQB1AGUAIABSAFYAQpAadSgAIABSAEcAQgAggnJfaWPPj/AAUAByAG8AZgBp/wBsAG8AIABSAEcAQgAgAGcAZQBuAGUAcgBpAGMAbwBHAGUAbgBlAHIAaQBzAGsAIABSAEcAQgAtAHAAcgBvAGYAaQBsx3y8GAAgAFIARwBCACDVBLhc0wzHfABPAGIAZQBjAG4A/QAgAFIARwBCACAAcAByAG8AZgBpAGwF5AXoBdUF5AXZBdwAIABSAEcAQgAgBdsF3AXcBdkAQQBsAGwAZwBlAG0AZQBpAG4AZQBzACAAUgBHAEIALQBQAHIAbwBmAGkAbADBAGwAdABhAGwA4QBuAG8AcwAgAFIARwBCACAAcAByAG8AZgBpAGxmbpAaACAAUgBHAEIAIGPPj//wZYdO9k4AgiwAIABSAEcAQgAgMNcw7TDVMKEwpDDrAFAAcgBvAGYAaQBsACAAUgBHAEIAIABnAGUAbgBlAHIAaQBjA5MDtQO9A7kDugPMACADwAPBA78DxgOvA7sAIABSAEcAQgBQAGUAcgBmAGkAbAAgAFIARwBCACAAZwBlAG4A6QByAGkAYwBvAEEAbABnAGUAbQBlAGUAbgAgAFIARwBCAC0AcAByAG8AZgBpAGUAbA5CDhsOIw5EDh8OJQ5MACAAUgBHAEIAIA4XDjEOSA4nDkQOGwBHAGUAbgBlAGwAIABSAEcAQgAgAFAAcgBvAGYAaQBsAGkAWQBsAGX/AGkAbgBlAG4AIABSAEcAQgAtAHAAcgBvAGYAaQBpAGwAaQBVAG4AaQB3AGUAcgBzAGEAbABuAHkAIABwAHIAbwBmAGkAbAAgAFIARwBCBB4EMQRJBDgEOQAgBD8EQAQ+BEQEOAQ7BEwAIABSAEcAQgZFBkQGQQAgBioGOQYxBkoGQQAgAFIARwBCACAGJwZEBjkGJwZFAEcAZQBuAGUAcgBpAGMAIABSAEcAQgAgAFAAcgBvAGYAaQBsAGUARwBlAG4AZQByAGUAbAAgAFIARwBCAC0AYgBlAHMAawByAGkAdgBlAGwAcwBldGV4dAAAAABDb3B5cmlnaHQgMjAwrzcgQXBwbGUgSW5jLiwgYWxsIHJpZ2h0cyByZXNlcnZlZC4AWFlaIAAAAAAAAPNSAAEAAAABFs9YWVogAAAAAAAAdE0AAD3uAAAD0FhZWiAAAAAAAABadQAArHMAABc0WFlaIAAAAAAAACgaAAAVnwAAuDZjdXJ2AAAAAAAAAAEBzQAAc2YzMgAAAAAAAQxCAAAF3v//8yYAAAeSAAD9kf//+6L///2jAAAD3AAAwGwALAAAAAAPAA8AAARQsJ1Cqy2n3W2JLwrijeSoOE6pEgu6ekPcojRDxPgw0y4u/CfHYXgw/I5AFHIZaCZQg6Z02jTUGAzFFMANNHhQrrh7WGAZiXFgzFZr2+yAIgIAOw==';

  var pageTopList = document.getElementsByClassName('pageTop');
  var linkTitles = document.getElementsByClassName('title');

  var USERNAME;

  function PopUp(title, content){

    var mouseIsDown = false,
      that = this,
      initialOffsetX = 0,
      initialOffsetY = 0;

    this.screen = document.createElement('div');
    this.screen.style.backgroundColor = 'rgba(0,0,0,0.2)';
    this.screen.style.display = 'none';
    this.screen.style.position = 'absolute';
    this.screen.style.top = 0;
    this.screen.style.left = 0;
    this.screen.style.right = 0;
    this.screen.style.bottom = 0;
    this.isShowing = false;
    this.width = '300px';
    this.title = title;
    this.content = content;
    this.left = 0;
    this.body = document.body;
    this.body.appendChild(this.screen);
    this.ePopup = document.createElement('div');
    this.ePopup.style.display = 'none';

    this.ePopup.style.position = 'absolute';
    this.ePopup.style.border = '1px solid rgba(0,0,0,0.5)';
    this.ePopup.style.top = '100px';
    this.ePopup.style.boxShadow = 'rgba(0,0,0,0.5) 0px 0px 10px';

    this.eTitleContainer = document.createElement('div');
    this.eTitleContainer.setAttribute('style', 'background-color: #ff6600; color: #000;padding: 2px 4px');
    this.eTitleContainer.style.cursor = 'pointer';
    this.eTitleContainer.appendChild(document.createTextNode(this.title));

    this.eTitleContainer.addEventListener('mousedown',function(e){
      e.preventDefault();
      mouseIsDown = true;
      that.eTitleContainer.style.cursor = 'move';
      initialOffsetX = e.layerX;
      initialOffsetY = e.layerY;
    });

    window.addEventListener('mousemove', function(e){
      if(mouseIsDown){
        that.ePopup.style.left = e.clientX - initialOffsetX;
        that.ePopup.style.top = e.clientY - initialOffsetY;
      }
    });

    window.addEventListener('mouseup', function(e){
      mouseIsDown = false;
      that.eTitleContainer.style.cursor = 'pointer';
    });

    var closeLink = document.createElement('a');
    closeLink.innerText = 'X';
    closeLink.title = 'Close Window';
    closeLink.style.cursor = 'pointer';
    closeLink.style.float = 'right';
    closeLink.addEventListener('click', function(e){
      e.preventDefault();
      e.stopPropagation();
      that.hide();
    });

    this.screen.addEventListener('click', function(e){
      closeLink.click();
    });

    this.eTitleContainer.appendChild(closeLink);

    this.eContentContainer = document.createElement('div');
    this.eContentContainer.setAttribute('style', 'background-color: #f6f6ef; color: #000;padding: 2px 4px;max-height:450px;overflow:scroll;');
    this.eContentContainer.addEventListener('mouseover', function(e){
//      if(isOverflowed(this.eContentContainer)){
        document.body.style.overflow = 'hidden';
//      }
    });

    this.eContentContainer.addEventListener('mouseout', function(e){
//      if(isOverflowed(this.eContentContainer)){
        document.body.style.overflow = 'auto';
//      }
    });

    this.ePopup.appendChild(this.eTitleContainer);
    this.ePopup.appendChild(this.eContentContainer);
    this.body.appendChild(this.ePopup);
  }

  PopUp.prototype.show = function(){
    if(this.isShowing) return;

    this.eContentContainer.innerHTML = this.content;
    this.ePopup.style.width = this.width;
    this.ePopup.style.display = 'block';
    this.left = (window.innerWidth / 2) - (this.width / 2);
    this.ePopup.style.left = this.left + 'px';
    this.isShowing = true;
    this.screen.style.display = 'block';

  };

  PopUp.prototype.hide = function(){
    this.screen.style.display = 'none';
    this.ePopup.style.display = 'none';
    this.isShowing = false;
  };

  function isOverflowed(element){
    return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
  }

  function centerPoint(windowDimension, popupDimension) {
    return (windowDimension / 2) - (popupDimension / 2);
  }

  function getSetting(name, callback) {
    chrome.extension.sendRequest({method: "getSetting", settingName:name}, function(response) {
      callback(response.status);
    });
  }

  function addFriend(name, callback){
    chrome.extension.sendRequest({method: "addFriend", name:name}, function(response) {
      callback(response.friendList);
    });
  }

  function deleteFriend(name, callback){
    chrome.extension.sendRequest({method: "deleteFriend", name:name}, function(response) {
      callback(response.friendList);
    });
  }

  function getFriends(callback){
    chrome.extension.sendRequest({method: "getFriends"}, function(response) {
      callback(response.friendList);
    });
  }

  function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  }


  function Popover(){}

  Popover.prototype.show = function(name, url) {
    var windowWidth = 400,
      windowHeight = 275,
      left = centerPoint(window.innerWidth, windowWidth),
      top = centerPoint(window.innerHeight, windowHeight),
      options = [
        'toolbar=no',
        'location=no',
        'directories=no',
        'status=no',
        'menubar=no',
        'scrollbars=no',
        'copyhistory=no',
        'width=' + windowWidth,
        'height=' + windowHeight,
        'top=' + top,
        'left=' + left
      ].join(',');
    return window.open(url, name, options);
  };

  (function(){
    getSetting('showTwitter', function(showTwitter){
      if(showTwitter === 'false') return;

      for(linkTitleKey in linkTitles){
        if(!linkTitles.hasOwnProperty(linkTitleKey)){
          continue;
        }

        var titleContainer = linkTitles[linkTitleKey];

        if(!titleContainer.childNodes || titleContainer.childNodes[0].nodeName !== 'A') continue;

        var titleAnchor = titleContainer.childNodes[0],
          anchor = document.createElement('a'),
          twitterImg = document.createElement('img'),
          tweet = titleAnchor.innerText,
          uri = titleAnchor.href;

        twitterImg.setAttribute('src', TWITTER_IMAGE);
        twitterImg.setAttribute('width', 10);
        twitterImg.setAttribute('height', 10);
        twitterImg.setAttribute('alt', 'Twitter icon');
        twitterImg.setAttribute('title', 'Tweet about: ' + tweet);

        anchor.innerText = ' ';
        anchor.setAttribute('href', 'https://twitter.com/intent/tweet?source=webclient'
          + '&text=' + encodeURIComponent(tweet)
          + '&url=' + encodeURIComponent(uri) );
        anchor.setAttribute('style', 'font-size:10px;');
        anchor.addEventListener('click', function(e){
          e.preventDefault();
          (new Popover()).show(this.innerText, this.getAttribute('href'));
        });
        anchor.appendChild(twitterImg);
        titleContainer.appendChild(anchor);
      }
    });
  })();

  // Load username menu
  (function(){
    var pageTop = pageTopList[1];

    if(!pageTop) return;

    var usernameLink = pageTop.firstChild,
      username = usernameLink.innerText,
      matches = pageTop.innerText.match(/\([0-9]*\)/);

    USERNAME = username;

    if (!matches) return;

    var karmaContainer = matches[0],
      commentLink = '/threads?id=' + encodeURI(username);

    pageTop.innerHTML = pageTop.innerHTML.replace(karmaContainer, '<a href="' + commentLink + '">'+ karmaContainer +'</a>');

    var savedLink = document.createElement('a');
    savedLink.setAttribute('href', 'saved?id=' + encodeURI(username));
    savedLink.innerText = 'saved'

    pageTop.insertBefore(savedLink, pageTop.firstChild);
    pageTop.insertBefore(document.createTextNode(' | '), pageTop.childNodes[1]);
  })();

  var lists = {
    'leaders': {
      linkLabel: 'leaders',
      description: 'Users with most karma.'
    },
    'best': {
      linkLabel: 'best',
      description: 'Highest voted recent links.'
    },
    'active': {
      linkLabel: 'active',
      description: 'Most active current discussions.'
    },
    'bestcomments': {
      linkLabel: 'best comments',
      description: 'Highest voted recent comments.'
    },
    'noobstories': {
      linkLabel: 'noob stories',
      description: 'Submissions from new accounts.'
    },
    'noobcomments': {
      linkLabel: 'noob comments',
      description: 'Comments from new accounts.'
    },
    'lists': {
      linkLabel: 'lists',
      description: 'The lists page.'
    },
    '^friendList': {
      linkLabel: 'friends',
      description: 'Your friends list',
      id: 'friendsPopup'
    },
    'splitter': {
      linkLabel: '-'
    },
    'http://hnnotify.com/': {
      linkLabel: 'hn notify',
      description: 'third-party: Email Reply Notifications for Hacker News'
    }
  };

  (function(){
    var closingTimer;
    var clearedOnDropdownTrigger = false;
    var pageTop = pageTopList[0];
    if(!pageTop) return;
    var menuIsOpen = false;

    var menu = document.createElement('span');
    menu.setAttribute('style', 'display:none;wiidth:150px;position:absolute;background-color:#ff6600;margin:18px 0 0 -52px;padding:0 3px 3px 3px;');
    menu.setAttribute('class', 'hn-lists-links');

    var dropDownTrigger = document.createElement('a');
    dropDownTrigger.innerText = ' | more ↧';
    dropDownTrigger.setAttribute('style', 'position:relative;cursor:pointer;');

    dropDownTrigger.addEventListener('click', function(e) {
      e.preventDefault();
      var styles = menu.getAttribute('style');

      if (!menuIsOpen) {
        menuIsOpen = true;
        styles = styles.replace('display:none;', 'display:inline-block;');
        dropDownTrigger.innerText = ' | more ↥';
      } else {
        menuIsOpen = false;
        clearTimeout(closingTimer);
        clearedOnDropdownTrigger = false;
        styles = styles.replace('display:inline-block;', 'display:none;');
        dropDownTrigger.innerText = ' | more ↧';
      }

      menu.setAttribute('style', styles);
    });

    menu.addEventListener('mouseout', function() {
      closingTimer = setTimeout(function() {
        dropDownTrigger.click();
      }, 500);
    });

    menu.addEventListener('mouseover', function() {
      clearTimeout(closingTimer);
    });

    dropDownTrigger.addEventListener('mouseover', function() {
      clearedOnDropdownTrigger = true;
      clearTimeout(closingTimer);
    });

    dropDownTrigger.addEventListener('mouseout', function() {
      if (clearedOnDropdownTrigger && menuIsOpen) {
        clearedOnDropdownTrigger = false;
        closingTimer = setTimeout(function() {
          dropDownTrigger.click();
        }, 500);
      }
    });

    for (var link in lists) {
      if ( ! lists.hasOwnProperty(link)) {
        continue;
      }

      var listItem = lists[link];

      if (listItem.linkLabel == '-'){
        var topSelContainer = document.createElement('span');
        var hrElement = document.createElement('hr');
        hrElement.setAttribute('style', 'border-top: 1px solid #000;border-bottom: 0px solid transparent; margin:3px 0 2px');
        topSelContainer.appendChild(hrElement);
      } else if (link == '^friendList') {
        var anchor = document.createElement('a');
        anchor.setAttribute('title', listItem.description);
        anchor.setAttribute('style', 'display:block;cursor:pointer;');
        anchor.setAttribute('id', listItem.id);
        anchor.innerText = listItem.linkLabel;
        var popup = new PopUp('Following', 'content');

        anchor.addEventListener('click', function(){
          getFriends(function(friendsList){
            var content = document.createElement('table'),
              hRow = document.createElement('tr'),
              hUsername = document.createElement('th'),
              hComments = document.createElement('th'),
              hSubmissions = document.createElement('th');

            content.style.width = '100%';

            hUsername.style.fontSize = '12px';
            hComments.style.fontSize = '12px';
            hSubmissions.style.fontSize = '12px';

            hUsername.innerText = 'Username';
            hComments.innerText = 'Comments';
            hSubmissions.innerText = 'Submissions';

            hRow.appendChild(hUsername);
            hRow.appendChild(hComments);
            hRow.appendChild(hSubmissions);

            content.appendChild(hRow);

            for(var x in friendsList) {
              if(!friendsList.hasOwnProperty(x)) continue;
              var name = friendsList[x],
              tableRow = document.createElement('tr'),
              tableUsernameCell = document.createElement('td'),
              tableCommentsCell = document.createElement('td'),
              tableSubmissionsCell = document.createElement('td');

              var profilePageLink = document.createElement('a');
              profilePageLink.setAttribute('href', 'user?id=' + name);
              profilePageLink.innerText = name;
              tableUsernameCell.appendChild(profilePageLink);

              var commentsPageLink = document.createElement('a');
              commentsPageLink.setAttribute('href', 'threads?id=' + name);
              commentsPageLink.innerText = 'view';
              tableCommentsCell.style.textAlign = 'center';
              tableCommentsCell.appendChild(commentsPageLink);

              var submittedPageLink = document.createElement('a');
              submittedPageLink.setAttribute('href', 'submitted?id=' + name);
              submittedPageLink.innerText = 'view';
              tableSubmissionsCell.style.textAlign = 'center';
              tableSubmissionsCell.appendChild(submittedPageLink);

              tableRow.appendChild(tableUsernameCell);
              tableRow.appendChild(tableCommentsCell);
              tableRow.appendChild(tableSubmissionsCell);

              content.appendChild(tableRow);
            }

            popup.content = content.outerHTML;
            popup.width = 350;
            popup.show();
          });
        });
      } else {
        var anchor = document.createElement('a');

        if ('/' + link == window.location.pathname) {
          var topSelContainer = document.createElement('span');
          topSelContainer.setAttribute('class', 'topsel');
          topSelContainer.appendChild(anchor);
        }

        anchor.setAttribute('href', link);
        anchor.setAttribute('title', listItem.description);
        anchor.setAttribute('style', 'display:block');
        anchor.innerText = listItem.linkLabel;

      }

      if (topSelContainer) {
        menu.appendChild(topSelContainer);
        topSelContainer = null;
      } else {
        menu.appendChild(anchor);
      }
    }

    pageTop.appendChild(dropDownTrigger);
    pageTop.appendChild(menu);
  })();

  getFriends(function(currentFriendsList){

    function makeLinkAdder(e){
      e.innerText = ' ☆';
      e.setAttribute('data-type', 'add');
      e.setAttribute('title', 'Follow user');
      e.nameLink.setAttribute('style', '');
    }

    function makeLinkDeleter(e){
      e.innerText = ' ★';
      e.setAttribute('data-type', 'remove');
      e.setAttribute('title', 'Stop following user');
      e.nameLink.setAttribute('style', 'background-color: #828282; color: #fff;padding: 2px 4px; border-radius: 3px;');
    }

    function updateUserLinks(name, adderOrDeleter, linkList){

      if(adderOrDeleter == 'add') {
        modFunc = makeLinkAdder;
      } else {
        modFunc = makeLinkDeleter;
      }


      for(var x in linkList){
        if (!linkList.hasOwnProperty(x)) continue;
        var link = linkList[x];
        if(link.getAttribute('data-name') != name) continue;
        modFunc(link);
      }
    }

    var links = Array.prototype.slice.call(document.getElementsByTagName('a')),
      userLinkList = [];
    var userLinkRegex = /^http[s]?:\/\/news.ycombinator.com\/user\?id=/;

    for(var x in links){
      if (!links.hasOwnProperty(x)) continue;
      var userLink = links[x];

      if(userLink.innerText == USERNAME) continue;

      if (userLink.href && userLink.href.match(userLinkRegex)) {

        var addFriendElement = document.createElement('a');
        addFriendElement.nameLink = userLink;
        userLinkList.push(addFriendElement);

        if(currentFriendsList.indexOf(userLink.innerText) == -1) {
          makeLinkAdder(addFriendElement);
        } else {
          makeLinkDeleter(addFriendElement);
        }

        addFriendElement.setAttribute('style', 'cursor:pointer;font-weight: bold;text-decoration:none;font-size:8px;');
        addFriendElement.setAttribute('data-name', userLink.innerText);


        addFriendElement.addEventListener('click', function(e){
          e.preventDefault();
          var that = this;
          var modType = that.getAttribute('data-type');
          if (modType == 'add') {
            addFriend(that.getAttribute('data-name'), function(friendList){
              currentFriendsList = friendList;
              updateUserLinks(that.getAttribute('data-name'), 'deleter', userLinkList);
            });
          } else if (modType == 'remove') {
            deleteFriend(that.getAttribute('data-name'), function(friendList){
              currentFriendsList = friendList;
              updateUserLinks(that.getAttribute('data-name'), 'add', userLinkList);
            });
          }

        });
        insertAfter(userLink, addFriendElement);
      }
    }
  });

})();