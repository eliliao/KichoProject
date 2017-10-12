const gulp = require('gulp');
const sass = require('gulp-sass');
const gutil = require('gulp-util');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const notify = require('gulp-notify');

gulp.task('sass', () =>
  gulp.src('./sass/**/*.scss')
      // .pipe(sourcemaps.init())
      .pipe(sass(gutil.env.production ? { outputStyle: 'compressed' } : {}))
      .on('error', notify.onError('Error: <%= error.message %>'))
      .pipe(autoprefixer({ browsers: ['last 2 versions'] }))
      // .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('./css'))
      .pipe(notify('File: ./css/<%= file.relative %> Compiled!'))
);

gulp.task('watch', () => {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('default', ['watch']);
