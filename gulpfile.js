const gulp = require('gulp'),
      imageop = require('gulp-image-optimization'),
      minifyHtml = require('gulp-minify-html'),
      minifyCss = require("gulp-minify-css");
      uglify = require('gulp-uglify');
      concat = require('gulp-concat');


gulp.task('images', function(cb) {
    gulp.src(['./views/src/images/*.png','./views/src/images/*.jpg','./views/src/images/*.gif','./views/src/images/*.jpeg'])
        .pipe(imageop({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true
    })).pipe(gulp.dest('./views/dist/images/')).on('end', cb).on('error', cb);
});

// including plugins

// task
gulp.task('minify-html', function () {
    gulp.src('./views/src/*.html') // path to your files
        .pipe(minifyHtml())
        .pipe(gulp.dest('./views/dist/'));
});



// task
gulp.task('minify-css', function () {
    gulp.src('./views/src/css/*.css') // path to your file
        .pipe(minifyCss())
        .pipe(gulp.dest('./views/dist/css/'));
});

gulp.task('minify-js', function () {
    gulp.src('./views/src/js/*.js') // path to your files
        .pipe(uglify())
        .pipe(gulp.dest('./views/dist/js/'))
});


gulp.task('minify-all', ()=>{
    gulp.run(['minify-html', 'minify-css', 'minify-js'])
});