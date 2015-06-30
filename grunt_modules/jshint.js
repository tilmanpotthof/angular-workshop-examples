module.exports = {
	options: {
		jshintrc: '.jshintrc'
  },
  all: [
    'src/app/**/*.js',
    'grunt_modules/*.js'
  ],
  extraScripts: [
    'src/assets/scripts/*.js'
  ]
};
