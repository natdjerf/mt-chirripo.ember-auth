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
  app.import('bower_components/gmaps.js');


  // app.import('bower_components/bootstrap-sass/assets/fonts/Redbud-Regular.ttf', {
  //   destDir: 'fonts'
  // });
  // app.import('bower_components/bootstrap-sass/assets/fonts/Redbud-Spurs.ttf', {
  //   destDir: 'fonts'
  // });
  // app.import('bower_components/bootstrap-sass/assets/fonts/MelmaCracked.ttf', {
  //   destDir: 'fonts'
  // });
  // app.import('bower_components/bootstrap-sass/assets/fonts/MelmaLine.tff', {
  //   destDir: 'fonts'
  // });
  // app.import('bower_components/bootstrap-sass/assets/fonts/MoonLight.otf', {
  //   destDir: 'fonts'
  // });



  return app.toTree();
};
