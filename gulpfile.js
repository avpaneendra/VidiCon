var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var javascriptObfuscator = require('gulp-javascript-obfuscator');
var htmlmin = require('gulp-html-minifier2');
// var uglify = require('gulp-uglify');
// var pump = require('pump');


gulp.task('minify-css', () => {
    return gulp.src('src/css/*.css')
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(gulp.dest('dist/css'));
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

    return gulp.src('src/js/*.js')
    .pipe(javascriptObfuscator({
        compact:true,
        sourceMap: false
    }))
    .pipe(gulp.dest('dist/js'));

  })

  gulp.task('minify', function() {
    gulp.src('./src/*.html')
      .pipe(htmlmin({collapseWhitespace: true}))
      .pipe(gulp.dest('./dist'))
  });

  gulp.task('move_extra_files', function() {
    
      gulp.src(['src/manup.js','src/pwabuilder-sw.js','src/pwabuilder-sw-register.js', 'src/icon.png','src/generationInfo','src/x.htaccess','src/generationInfo.json','src/images/','src/img/','src/manifest.json'])
      .pipe(gulp.dest('dist/'));
  });

  gulp.task('move_img_files', function() {
    
      gulp.src(['src/img/**.*'])
      .pipe(gulp.dest('dist/img'));
  });

  gulp.task('move_images_files', function() {
    
      gulp.src(['src/images/**.*'])
      .pipe(gulp.dest('dist/images'));
  });


  gulp.task('move_fonts_files', function() {
    
      gulp.src('src/css/fonts/**.*')
      .pipe(gulp.dest('dist/css/fonts'));
  });

  gulp.task('default', ['minify-css','js-ob','minify','move_extra_files','move_fonts_files','move_images_files','move_img_files']);