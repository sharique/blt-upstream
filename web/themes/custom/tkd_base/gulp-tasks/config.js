module.exports = {
  scss: {
    source: ['components/**/[^_]*.scss'],
    all: ['components/**/*.scss'],
    destination: 'dist/components',
    options: {
      outputStyle: 'expanded',
      includePaths: ['./node_modules'],
      errLogToConsole: true,
      importer: require('node-sass-globbing'),
    },
  },
  ts: {
    source: ['components/**/*.ts'],
    destination: 'dist/components',
  },
  libs: {
    source: [
      'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
      'node_modules/bootstrap/dist/js/bootstrap.bundle.js',
    ],
    destination: 'dist/libs',
  },
  svg: {
    source: ['svg/**/*.svg'],
    destination: 'dist/svg',
  },
  images: {
    source: ['images/**/*'],
    destination: 'dist/images',
  },
  stylelint: {
    options: {
      reporters: [
        {
          formatter: 'verbose',
          console: true,
        },
      ],
      failOnError: process.env.CI === 'true',
    },
  },
};
