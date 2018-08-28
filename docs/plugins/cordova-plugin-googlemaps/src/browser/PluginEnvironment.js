cordova.define("cordova-plugin-googlemaps.PluginEnvironment", function(require, exports, module) {

var envOptions = {};

module.exports = {
  'isAvailable': function(onSuccess, onError, args) {
    onSuccess();
  },
  'setBackGroundColor': function(onSuccess, onError, args) {
    // stub
    onSuccess();
  },
  'getLicenseInfo': function(onSuccess, onError, args) {
    // stub
    onSuccess("cordova-plugin-googlemaps for browser does not need to display any open source lincenses. But for iOS, you still need to display the lincense.");
  },
  'setEnv': function(onSuccess, onError, args) {
    var options = args[0];
    var keys = Object.keys(options);
    keys.forEach(function(key) {
      envOptions[key] = options[key];
    });
    onSuccess();
  },
  '_getEnv': function() {
    // internal method
    return envOptions;
  }
};


require('cordova/exec/proxy').add('PluginEnvironment', module.exports);

});
