const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('autoprefixer');
const imagemin = require('imagemin');
const jpg = require('imagemin-jpegtran');
const png = require('imagemin-pngquant');

gulp.task('default', ['imagemin'], () => {});

gulp.task('autoprefixer', () =>
  gulp
    .src('./admin/assets/css/*.css')
    .pipe(sourcemaps.init())
    .pipe(
      postcss([
        autoprefixer({
          browsers: ['last 2 versions'],
          cascade: false
        })
      ])
    )
    .pipe(cleanCss({ compatibility: 'ie8' }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dest'))
);

gulp.task('imagemin', () => {
  (async () => {
    const files = await imagemin(['./dist/img/*.{jpg,png}'], './dist/img', {
      plugins: [jpg(), png({ quality: '65-80' })]
    });
  })();
});
