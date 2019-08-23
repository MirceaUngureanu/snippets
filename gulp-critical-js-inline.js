import rollup from 'rollup-stream';
import source from 'vinyl-source-stream';
import buffer from 'gulp-buffer';

function gtScriptsInlineNavV2() {
  return rollup({
      'input': `path/to/js/entry/point/Navigation.js`,
      'format': 'umd',
      'name': 'NavV2'
    })
    .pipe(source('_SiteHeaderInlineV2.js'))
    .pipe(buffer())
    .pipe(babel(BabelConfigV2))
    .pipe(gulpIf(isProd, uglify()))
    .pipe(rename({ extname: '.cshtml', basename: '_SiteHeaderInlineV2' }))
    .pipe(dest(`/pipe/to/final/destination/of/inline/js`));
}
