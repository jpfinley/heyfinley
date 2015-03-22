module.exports = function(grunt) {

    // All configuration goes here 
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
      },
      imagemin: {
        dynamic: {
          files: [{
            expand: true,
            cwd: 'assets/img/source/',
            src: ['**/*.{png,jpg,gif}'],
            dest: 'assets/img/portfolio/'
          }]
        }
      }
    });

    // Load Grunt plug-ins
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    
    // Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat', 'uglify', 'imagemin']);
};
