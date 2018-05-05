'use strict';

// If the app environment is not set, we default to development
var ENV = process.env.APP_ENV || 'development';

var gulp = require('gulp');
var ngConfig = require('gulp-ng-config');
var fs = require('fs');
var path = require('path');
var conf = require('./conf');
/*
 *  We first generate the json file that gulp-ng-config uses as input.
 *  Then we source it into our gulp task.
 *  The env constants will be a saved as a sub-module of our app, ngEnVars.
 *  So we shall name it ngEnvVars.config.
 */
gulp.task('ngConfig', function() {
    fs.writeFileSync(conf.paths.src + '/app/config/baConfig.json',
         JSON.stringify(conf.environments[ENV]));
     gulp.src(conf.paths.src + '/app/config/baConfig.json')
       .pipe(
         ngConfig('BlurAdmin.config', {
           createModule: false
         })
       )
       .pipe(gulp.dest(conf.paths.src + '/app/config'))
   });