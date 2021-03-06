var gulp = require('gulp');

var jshint = require('gulp-jshint');
var size = require('gulp-size');
var wiredep = require('wiredep').stream;
var gulpInject = require('gulp-inject');
var browserSync = require('browser-sync');

var optionsWiredep = {
    directory: 'bower_components'
};

var optionsInject = {
    relative: true
};

var injectSources = [
    './src/js/**/*.js',
    './src/css/**/*.css',
    '!./src/css/**/*.{green,lightblue,pink,red,turquoise,violet}.css'
];

gulp.task('hello-world', function () {
    console.log('Hello world');
});

gulp.task('jshint', function () {
    gulp.src(['./src/**/*.js', './*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(size());
});

gulp.task('inject', function () {
    return gulp
        .src('./src/index.html')
        .pipe(wiredep(optionsWiredep))
        .pipe(gulpInject(gulp.src(injectSources, {read: false}), optionsInject))
        .pipe(gulp.dest('./.tmp/serve'));
});

gulp.task('serve', ['inject', 'watch'], function () {
    browserSync.instance = browserSync.init({
        startPath: '/',
        server: {
            baseDir: [
                '.tmp/serve',
                'src'
            ],
            routes: {
                '/bower_components': 'bower_components'
            }
        },
        browser: 'default'
    });
});


gulp.task('watch', function () {
    gulp.watch([
        './src/css/**/*.css',
        './src/js/**/*.js'
    ], function (event) {
        browserSync.reload(event.path);
    });

    gulp.watch([
        './src/index.html'
    ], function (event) {
        gulp.start('inject');
        setTimeout(function () {
            browserSync.reload(event.path);
        }, 300);
    });
});

