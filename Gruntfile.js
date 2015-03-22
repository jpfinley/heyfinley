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
      },
      watch: {
        scripts: {
          files: ['_assets/javascript/*.js'],
          tasks: ['concat', 'uglify'],
          options: {
            spawn: false,
          },
        },
        images: {
          files: ['assets/img/source/*.{png,jpg,gif}'],
          tasks: ['imagemin'],
          options: {
            spawn: false,
          },
        }
      }
    });

    // Load Grunt plug-ins
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    
    // Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat', 'uglify', 'imagemin']);
};
