(function() {
  const TWITTER_IMAGE = 'data:image/gif;base64,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';

  var pageTopList = document.getElementsByClassName('pageTop');
  var linkTitles = document.getElementsByClassName('title');

  function centerPoint(windowDimension, popupDimension) {
    return (windowDimension / 2) - (popupDimension / 2);
  }

  function getSetting(name, callback) {
    chrome.extension.sendRequest({method: "getSetting", settingName:name}, function(response) {
      callback(response.status);
    });
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
    dropDownTrigger.setAttribute('href', '#');
    dropDownTrigger.setAttribute('style', 'position:relative');

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
      if (! lists.hasOwnProperty(link)) {
        continue;
      }

      var listItem = lists[link];
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

})();