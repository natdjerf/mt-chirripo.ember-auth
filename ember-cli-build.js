/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    sassOptions: {
      includePaths: [
        'bower_components/bootstrap-sass/assets/stylesheets'
      ]
    }
  });

  app.import('bower_components/bootstrap-sass/assets/javascripts/bootstrap.js');
  app.import('bower_components/bootstrap-sass/assets/fonts/bootstrap/glyphicons-halflings-regular.woff2', { destDir: 'fonts/bootstrap' });
  app.import('bower_components/bootstrap-sass/assets/fonts/bootstrap/glyphicons-halflings-regular.woff', { destDir: 'fonts/bootstrap' });
  app.import('vendor/gmaps.js');


  app.import('bower_components/Redbud-Regular/fonts/Redbud-Regular.ttf', {
    destDir: 'assets/fonts'
  });
  app.import('bower_components/Redbud-Spurs/fonts/Redbud-Spurs.ttf', {
    destDir: 'assets/fonts'
  });
  app.import('bower_components/MelmaCracked/fonts/MelmaCracked.ttf', {
    destDir: 'assets/fonts'
  });
  app.import('bower_components/MelmaLine/fonts/MelmaLine.tff', {
    destDir: 'assets/fonts'
  });
  app.import('bower_components/MoonLight/fonts/MoonLight.otf', {
    destDir: 'assets/fonts'
  });



  return app.toTree();
};
