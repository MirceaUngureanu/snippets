import rollup from 'rollup-stream';
import source from 'vinyl-source-stream';
import buffer from 'gulp-buffer';

function gtScriptsInlineNavV2() {
  return rollup({
      'input': `${config.paths.views}/Partials/Components/SiteHeader/NavigationV2JS/Navigation.js`,
      'format': 'umd',
      'name': 'NavV2'
    })
    .pipe(source('_SiteHeaderInlineV2.js'))
    .pipe(buffer())
    .pipe(babel(BabelConfigV2))
    .pipe(gulpIf(isProd, uglify()))
    .pipe(rename({ extname: '.cshtml', basename: '_SiteHeaderInlineV2' }))
    .pipe(dest(`${config.paths.views}/Partials/Components/SiteHeader`));
}