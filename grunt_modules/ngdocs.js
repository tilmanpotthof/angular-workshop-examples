module.exports = {
  options: {
    dest: 'generated/docs',
    title: 'angular-workshop-setup',
    scripts: [
      '//localhost:35729/livereload.js',
      'generated/dist/js/vendor.js',
      'generated/dist/js/app.js'
    ],
    styles: [
    ],
    editExample: false,
    sourceLink: true
  },
  all: ['src/app/**/*.js']
};
