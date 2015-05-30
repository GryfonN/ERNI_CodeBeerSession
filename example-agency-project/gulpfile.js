var gulp = require('gulp');

var jshint = require('gulp-jshint');
var size = require('gulp-size');


gulp.task('hello-world', function () {
    console.log('Hello world');
});

gulp.task('jshint', function () {
    gulp.src(['./src/**/*.js', './*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(size());
});