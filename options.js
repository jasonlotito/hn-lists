(function(){
  const SHOW_TWITTER = 'showTwitter';

  var showTwitter = document.getElementById('showTwitter');
  var showTwitterText = document.getElementById('showTwitterText');
  var followersList = document.getElementById('followersList');

  function SettingsUpdate() {
    this.timeouts = {};
  }

  SettingsUpdate.prototype.updated = function(optionName, e){
    var name = optionName + 'Text';

    localStorage[optionName] = e.checked;
    this.timeouts[name] && clearTimeout(this.timeouts[name].timeout);

    if(!this.timeouts[name]){
      this.timeouts[name] = {};
      this.timeouts[name].element = document.getElementById(name);
    }

    showTwitterText.innerText = 'Updated';
    this.timeouts[name].element = document.getElementById(name);
    this.timeouts[name].timeout = setTimeout(function(){
      showTwitterText.innerText = '';
    },2000);
  };

  var settingsUpdate = new SettingsUpdate();

  // Save settings
  (function(){
    showTwitter.addEventListener('change', function(){
      settingsUpdate.updated(SHOW_TWITTER, this)
    });
  })();

  // Set settings
  (function(){

    if(!localStorage[SHOW_TWITTER] || localStorage[ SHOW_TWITTER] === 'undefined'){
      localStorage[SHOW_TWITTER] = true;
    }

    localStorage[SHOW_TWITTER] === 'true' && showTwitter.setAttribute('checked', 'checked');
  })();

  // Show followers
  var showFollowers = function(){
    followersList.innerHTML = '';
    var friendsList = JSON.parse(localStorage['friendsList']);
    for(var x in friendsList) {
      if(!friendsList.hasOwnProperty(x)) continue;
      var name = friendsList[x],
        stopFollowingText  = document.createTextNode(' ' + name),
        stopFollowingLink = document.createElement('a');
      stopFollowingLink.setAttribute('style', 'cursor:pointer');
      stopFollowingLink.setAttribute('data-name', name);
      stopFollowingLink.setAttribute('title', 'stop following');
      stopFollowingLink.innerText = '(x)';
      stopFollowingLink.addEventListener('click', function(){
        var index = friendsList.indexOf(this.getAttribute('data-name'));

        if( index > -1 ){
          friendsList.splice(index, 1);
        }
        localStorage['friendsList'] = JSON.stringify(friendsList);
        showFollowers();
      });

      followersList.appendChild(stopFollowingLink);
      followersList.appendChild(stopFollowingText);
      followersList.appendChild(document.createElement('br'));
    }
  };
  showFollowers();


})();