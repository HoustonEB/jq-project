var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var webServer = require('gulp-webserver');

gulp.task('dev', function() {
    gulp.src('./')
        .pipe(webServer({
            host: '127.0.0.1',
            port: '8001',
            fallback: 'main.html',
            livereload: true,
            directoryListing: true,
            open: true
        }));
});