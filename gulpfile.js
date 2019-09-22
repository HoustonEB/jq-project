var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var webServer = require('gulp-webserver');
var less = require('gulp-less');

gulp.task('css', function(cb) {
    console.log('1')
   gulp.src('./css/**/*.less').pipe(
       less()
   ).pipe(
       gulp.dest('./release/css')
   );
    cb()
});

gulp.task('test', function(cb) {
    console.log('2');
    cb();
});

gulp.task('dev', gulp.series('css', 'test', function() {
    gulp.src('./')
        .pipe(webServer({
            host: '127.0.0.1',
            port: '8001',
            fallback: 'main.html',
            livereload: true,
            directoryListing: true,
            open: true
        }));
}));