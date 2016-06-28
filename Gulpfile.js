gulp  = require('gulp');
util = require('gulp-util');

require('./tasks/generate.js');
require('./tasks/sort.js');
require('./tasks/clean.js');

gulp.task('default', function(){
    util.log(util.colors.green('Available tasks:'));
    util.log(util.colors.cyan('   \'generate-file --lines AAA\', generate file.txt, where AAA is are number of lines'));
    util.log(util.colors.cyan('   \'sort-lines\', order lines in alphabetical order and save it in output file'));
    util.log(util.colors.cyan('   \'clean\', delete tmp files and output.txt'));
});