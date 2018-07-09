var gulp = require('gulp');
var git = require('gulp-git');

gulp.task('deploy', ['commit', 'push']);

gulp.task('commit', function() {
    gulp.src(['./*', '!node_modules']).pipe(git.commit(`production deploy: ${new Date(Date.now()).toLocaleString()}`));
});

gulp.task('push', function() {
    //Nothing yet
});