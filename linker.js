(function() {

  var pageTopList = document.getElementsByClassName('pageTop');

  // Load username menu
  (function(){
    var pageTop = pageTopList[1];
    if(!pageTop) return;
    var usernameLink = pageTop.firstChild;
    var username = usernameLink.innerText;
    var matches = pageTop.innerText.match(/\([0-9]*\)/);
    if (!matches) return;
    var karmaContainer =[0];
    var commentLink = '/threads?id=' + encodeURI(username);
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