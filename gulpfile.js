var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

var paths = {
  // jsSource: ['public/app/**/*.js', '!/public/app/lib'],
  sassSource: ['./public/styles/*.scss'],
  // dependenciesSource: ['public/lib/**/*.js']
}

gulp.task('styles', function () {
  return gulp.src('./public/styles/*.scss')
  .pipe(sass())
  .pipe(concat('main.css'))
  .pipe(gulp.dest('./public/styles/'))
})

gulp.task('watch', function () {
  gulp.watch(paths.sassSource, ['styles']);
})

gulp.task('default', ['watch', 'styles'])
