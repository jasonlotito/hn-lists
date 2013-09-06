(function() {

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

  var pageTop = document.getElementsByClassName('pageTop')[0];
  var menu = document.createElement('span');
  menu.setAttribute('style', 'display:none;wiidth:150px;position:absolute;background-color:#ff6600;margin:18px 0 0 -51px;padding:0 3px 3px 3px;');
  menu.setAttribute('class', 'hn-lists-links');

  var dropdownTrigger = document.createElement('a');
  dropdownTrigger.innerText = ' | more ↧';
  dropdownTrigger.setAttribute('href', '#');
  dropdownTrigger.setAttribute('style', 'position:relative');
  dropdownTrigger.addEventListener('click', function(e) {
    e.preventDefault();
    var styles = menu.getAttribute('style');

    if (styles.indexOf('display:inline-block;') == - 1) {
      styles = styles.replace('display:none;', 'display:inline-block;');
      dropdownTrigger.innerText = ' | more ↥';
    } else {
      styles = styles.replace('display:inline-block;', 'display:none;');
      dropdownTrigger.innerText = ' | more ↧';
    }

    menu.setAttribute('style', styles);
  });

  var closingTimer;
  menu.addEventListener('mouseout', function(){
    closingTimer = setTimeout(function() {
      dropdownTrigger.click();
    }, 500);
  });

  menu.addEventListener('mouseover', function(){
    clearTimeout(closingTimer);
  });

  var clearedOnDropdownTrigger = false;

  dropdownTrigger.addEventListener('mouseover', function(){
    clearedOnDropdownTrigger = true;
    clearTimeout(closingTimer);
  });

  dropdownTrigger.addEventListener('mouseout', function(){
    if(clearedOnDropdownTrigger){
      clearedOnDropdownTrigger = false;
      closingTimer = setTimeout(function() {
        dropdownTrigger.click();
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
  pageTop.appendChild(dropdownTrigger);
  pageTop.appendChild(menu);

  // Attributions
  var author = document.createElement('a');
  author.innerText = 'jasonlotito';
  author.setAttribute('href', 'https://news.ycombinator.com/user?id=jasonlotito');
  var imageAttribution = document.createElement('a');
  imageAttribution.innerText = 'icon by position relative (CC BY-SA 3.0)';
  imageAttribution.setAttribute('href', 'http://www.position-relative.com/');
  var bottom = document.getElementsByTagName('center')[0];

  bottom.appendChild(author);
  bottom.appendChild(document.createTextNode(' | '));
  bottom.appendChild(imageAttribution);
  bottom.appendChild(document.createElement('br'));

})();