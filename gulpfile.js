// @ts-check
const gulp = require('gulp'),
      minifyHtml = require('gulp-minify-html'),
      minifyCss = require("gulp-minify-css"),
      uglify = require('gulp-uglify'),
      concat = require('gulp-concat'),
      image = require('gulp-image');

gulp.task('image', function () {
    gulp.src('./views/src/images/*')
        .pipe(image())
        .pipe(gulp.dest('./views/dist/images/'));
});

gulp.task('default', ['image']);

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

gulp.task('concat-css', function() {
    gulp.src('./views/dist/css/*.css')
        .pipe(concat('main.css'))
        .pipe(gulp.dest('./views/dist/css/'))
});

gulp.task('minify-all', ()=>{
    gulp.run(['image','minify-html', 'minify-css', 'concat-css'])
});