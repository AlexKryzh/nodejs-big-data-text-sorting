var clean = require('gulp-clean');

//delete output and tmp files
gulp.task('clean', function(){
    return gulp.src(['tmp/*', 'output.txt'], {read: false})
    .pipe(clean());
});