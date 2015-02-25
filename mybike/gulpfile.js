var gulp = require('gulp');

//Plugins
var jshint = require('gulp-jshint');
var nodemon = require('gulp-nodemon');
var livereload = require('gulp-livereload');

gulp.task('lint', function() {
    gulp.src('./**/*.js')
    .pipe(jshint());
});

gulp.task('serve', function() {
    nodemon({
        script: 'bin/www',
        ext: 'html js',
        env: {
            'NODE_ENV': 'development'
        }
    })
    .on('start', function(){
        livereload.listen();
    })
    .on('change', ['lint'])
    .on('restart', function() {
        setTimeout(livereload.changed, 1000);
        console.log('Server restarted.');
    });
});

gulp.task('default', ['lint', 'serve']);
