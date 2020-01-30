const gulp = require("gulp");
const browsersync = require("browser-sync").create();

function browserSync() {
  browsersync.init({
    server: {
      baseDir: "./"
    },
    port: 3000
  });
}

function browserSyncReload() {
  browsersync.reload();
}

function watchFiles() {
  gulp.watch("css/style.css").on('change', browserSyncReload);
  gulp.watch("index.html").on('change', browserSyncReload);
  gulp.watch("catalog.html").on('change', browserSyncReload);
}

const watch = gulp.parallel(watchFiles, browserSync);
watch();
