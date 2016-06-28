require('../modules/string.js');
require('../modules/catalogue.js');
require('../modules/file.js');
var input_file = 'file.txt',
    output_file = 'output.txt';

gulp.task('sort-lines', ['index-lines'], function(cb){
    catalogue.loop(0, output_file, function(){
        cb();
    });
});

gulp.task('index-lines', ['clean'], function(cb){
    file.indexLines(input_file, function(){
        cb();
    });
});