module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      concat: {
        dist: {
          src: [
            '_assets/javascript/jquery.min.js',
            '_assets/javascript/post.js',
            '_assets/javascript/particle-field.js'
          ],
          dest: 'assets/javascript/site.js'
        }
      },
      uglify: {
          build: {
              src:  'assets/javascript/site.js',
              dest: 'assets/javascript/site.min.js'
          }
      }
    });

    // Load Grunt plug-ins
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    
    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat', 'uglify']);
};
