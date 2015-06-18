var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('default',function(){
  // place code for default task here
});

gulp.task('serve', function(){
  browserSync({
    server: {
      baseDir: './'
    }
    });

    gulp.watch(['*.html', 'css/**/*.css', 'js/**/*.js'], {cwd: './'}, reload);
});
