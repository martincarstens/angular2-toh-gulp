const gulp = require('gulp');
const del = require('del');
const typescript = require('gulp-typescript');
const tscConfig = require('./tsconfig.json');
const sourcemaps = require('gulp-sourcemaps');

// clean the contents of the distribution directory
//gulp.task('clean', function () {
  //return del('dist/**/*');
//});

// copy dependencies
gulp.task('copy:libs', function() {
  return gulp.src([
      'node_modules/core-js/client/shim.min.js',
      'node_modules/zone.js/dist/zone.js',
      'node_modules/reflect-metadata/Reflect.js',
      'node_modules/systemjs/dist/system.src.js',
    ])
    .pipe(gulp.dest('dist/lib'))
});

gulp.task('copy:assets', ['copy:libs'], function() {
  return gulp.src(['app/**/*', 'index.html', 'styles.css', 'systemjs.config.js', '!app/**/*.ts'], { base : './' })
    .pipe(gulp.dest('dist'))
});

// TypeScript compile
gulp.task('compile', ['copy:assets'], function () {
  return gulp
    .src('app/**/*.ts')
    .pipe(sourcemaps.init())          // <--- sourcemaps
    .pipe(typescript(tscConfig.compilerOptions))
    .pipe(sourcemaps.write('.'))      // <--- sourcemaps
    .pipe(gulp.dest('dist/app'));
});

gulp.task('build', ['compile']);
gulp.task('default', ['build']);