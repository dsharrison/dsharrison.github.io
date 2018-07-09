var gulp = require('gulp');
var git = require('gulp-git');

gulp.task('commit', function() {
  return gulp.src(['./*', '!node_modules'])
      .pipe(git.commit(
          `production deploy: ${new Date(Date.now()).toLocaleString()}`));
});

gulp.task('push', function() {
  return git.push('origin', 'master', function(err) {
    if (err) throw err;
  });
});

gulp.task('deploy', gulp.series('commit', 'push'));
