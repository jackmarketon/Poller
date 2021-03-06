'use strict';

var gulp = require('gulp'),
  nodemon = require('gulp-nodemon'),
  mocha = require('gulp-mocha-co'),
  plumber = require('gulp-plumber'),
  watch = require('gulp-watch');


gulp.task('test', function () {
  gulp.src('./test/*.js')
    .pipe(mocha({
      ignoreLeaks: false,
      reporter: 'nyan'
    }))
    .pipe(plumber());
});

gulp.task('nodemon', function () {
  nodemon({ script: 'app.js', env: { 'NODE_ENV': 'development' }, nodeArgs: ['--debug=9999', '--harmony-generators']})
    .on('restart');
});

// Rerun the task when a file changes

gulp.task('watch', function() {
    gulp.src(['*.js','routes/*.js', 'models/*.js', 'config/*.js'], { read: true })
        .pipe(watch({ emit: 'all' }));
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['test', 'nodemon', 'watch']);