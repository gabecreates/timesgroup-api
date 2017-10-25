const gulp = require('gulp');
const markdownToJSON = require('gulp-markdown-to-json');
const marked = require('marked');

marked.setOptions({
  pedantic: true,
  smartypants: true
});

gulp.task('markdown', () => {
  gulp.src('./posts/**/*.md')
    .pipe(markdownToJSON(marked))
    .pipe(gulp.dest('./site/api'))
});
