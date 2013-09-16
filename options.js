(function(){
  const SHOW_TWITTER = 'showTwitter';

  var showTwitter = document.getElementById('showTwitter');
  var showTwitterText = document.getElementById('showTwitterText');

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


})();