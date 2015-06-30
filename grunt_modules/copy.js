module.exports = {
  assets: {
    files: [
      {
        cwd: 'src/',
        expand: true,
        src: ['assets/**', '!assets/stylesheets/**', '!assets/images/icons/**/*'],
        dest: 'generated/dist/'
      }
    ]
  },
  htmlmocks: {
    files: [
      {
        cwd: 'src/',
        expand: true,
        src: 'example-pages/**/*',
        dest: 'generated/'
      }
    ]
  },
  styleguide: {
    files: [{
      cwd: 'generated/dist',
      expand: true,
      src: ['assets/**/*'],
      dest: 'generated/styleguide'
    }]
  },
  ngdocsAssets: {
    files: [{
      cwd: 'grunt_modules/ngdocs_assets',
      expand: true,
      src: ['*'],
      dest: 'generated/docs/ngdocs_assets'
    }]
  }
};
