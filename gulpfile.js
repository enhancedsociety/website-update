 var gulp   = require('gulp');
  var deploy = require('gulp-gh-pages');

  gulp.task('deploy', function () {
    return gulp.src("./**/*")
      .pipe(deploy({ 
        remoteUrl: "https://github.com/enhancedsociety/website-update.github.io.git",
        branch: "master"
      }))
  });