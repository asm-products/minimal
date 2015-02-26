var gulp = require('gulp'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    nodemon = require('gulp-nodemon');

gulp.task('develop', function () {
  nodemon({ script: 'app.js', ext: 'html js jade css', ignore: ['ignored.js'] })
    .on('restart', function () {
      console.log('restarted!');
    });
});

gulp.task('styles', function() {
    gulp.src('./resources/sass/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('./public/stylesheets'));
});

// gulp.task('scripts', function() {
//   gulp.src(['bower_components/jquery/dist/jquery.min.js'])
//     // .pipe(concat('libs.js'))
//     // .pipe(uglify())
//     .pipe(gulp.dest('./public/javascripts/'));
// });

gulp.task('watch', function() {
	gulp.watch('resources/sass/*.scss', ['styles']);
});

gulp.task('default', ['styles', 'watch', 'develop'], function() {

});

// var es     = require('event-stream'),
//     gulp   = require('gulp'),
//     sass   = require('gulp-ruby-sass'),
//     notify = require("gulp-notify"),
//     bower  = require('gulp-bower');

// var config = {
// 	targetStyleDir: 'public/stylesheets',
// 	sassDir: 'resources/sass',
// 	bowerDir: 'bower_components'
// };

// gulp.task('bower', function() {
// 	return bower()
// 		.pipe(gulp.dest(config.bowerDir));
// });

// gulp.task('css', function(){
// 	var vendorFiles = gulp.src(config.bowerDir + '/bootstrap-sass-official/assets/stylesheets');
//     var appFiles = gulp.src(config.sassDir)
//         .pipe(sass({ style: 'compressed' }).on('error', gutil.log));

// 	return es.concat(vendorFiles, appFiles)
//         .pipe(concat('output-file-name.css'))
//         .pipe(autoprefix('last 10 version'))
//         .pipe(gulp.dest(config.targetStyleDir));
// });

// // Rerun the task when a file changes
// gulp.task('watch', function(){
// 	gulp.watch(conf.sassPath + '/**/*.scss', ['css']);
// });

// gulp.task('default', ['bower', 'css']);