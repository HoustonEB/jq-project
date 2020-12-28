var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var webServer = require('gulp-webserver');
var less = require('gulp-less');
var LessAutoprefix = require('less-plugin-autoprefix');
var autoprefix = new LessAutoprefix({ browsers: ['last 2 versions'] });
var sourcemaps = require('gulp-sourcemaps');

gulp.task('css', function(cb) {
    console.log('1')
   gulp.src('./css/**/*.less')
       .pipe(sourcemaps.init())
       .pipe(less({plugins: [autoprefix]}))
       .pipe(sourcemaps.write())
       .pipe(
       gulp.dest('./release/css')
   );
    cb()
});

gulp.task('test', function(cb) {
    console.log('2');
    cb();
});

gulp.task('test1', function(cb) {
    console.log('start1')
    setTimeout(function() {
        console.log('test1');
        cb();
    },2000)
});
gulp.task('test2', function(cb) {
    console.log('start2')
    console.log('test2');
    cb();
});
gulp.task('default', gulp.parallel('test1', 'test2', function() {
    console.log('end')
}));

gulp.task('dev', gulp.series('css', 'test', function() {
    gulp.src('./')
        .pipe(webServer({
            host: 'localhost',
            port: '8000',
            fallback: 'main.html',
            livereload: true,
            directoryListing: true,
            open: 'main.html'
        }));
}));