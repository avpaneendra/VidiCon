var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var javascriptObfuscator = require('gulp-javascript-obfuscator');
var htmlmin = require('gulp-html-minifier2');
// var uglify = require('gulp-uglify');
// var pump = require('pump');


gulp.task('minify-css', () => {
    return gulp.src('src/*.css')
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(gulp.dest('dist'));
  });

//   gulp.task('compress', function (cb) {
//     pump([
//           gulp.src('src/js/*.js'),
//           uglify(),
//           gulp.dest('dist/js')
//       ],
//       cb
//     );
//   });


  gulp.task ('js-ob', function(){

    return gulp.src('src/*.js')
    .pipe(javascriptObfuscator({
        compact:true,
        sourceMap: false
    }))
    .pipe(gulp.dest('dist'));

  })

  gulp.task('minify', function() {
    gulp.src('./src/*.html')
      .pipe(htmlmin({collapseWhitespace: true}))
      .pipe(gulp.dest('./dist'))
  });

  

  gulp.task('move_img_files', function() {
    
      gulp.src(['src/img/**.*'])
      .pipe(gulp.dest('dist/img'));
  });

  

  gulp.task('default', ['minify-css','js-ob','minify', 'move_img_files']);