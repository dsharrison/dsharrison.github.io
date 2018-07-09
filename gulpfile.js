var gulp = require('gulp');
var git = require('gulp-git');

gulp.task('deploy', function(done) {
  gulp.src(['./*', '!node_modules'])
      .pipe(git.add())
      .pipe(git.commit(
          `production deploy: ${new Date(Date.now()).toLocaleString()}`));

  return git.push('origin', 'master', function(err) {
    if (err) throw err;
    done();
  });
});
