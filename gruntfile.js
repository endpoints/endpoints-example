module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    express: {
      options: {
        port: 8080
      },
      dev: {
        options:
        {
          port:8080,
          script: './index.js',
          keepalive: true
        }
      }
    },
    mochaTest: {
      test: {
        options: {
          reporter: 'spec'
        },
        src: ['test/*_test.js']
      }
    }
  });

  grunt.registerTask('default', 'An alias of test', ['test']);

  grunt.registerTask('test', 'Lint and Test  the Javascript', [
    'express',
    'mochaTest'
  ]);

};
