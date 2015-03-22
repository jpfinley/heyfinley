module.exports = function(grunt) {

    // All configuration goes here 
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      // ---- Concatenation
      concat: {
        js: {
          src: [
            'assets/javascript/src/jquery.min.js',
            'assets/javascript/src/post.js',
            'assets/javascript/src/particle-field.js'
          ],
          dest: 'assets/javascript/build/site.js'
        },
        css: {
          src: [
            'assets/css/src/bootstrap.min.css',
            'assets/css/build/main.css'
          ],
          dest: 'assets/css/site.css'
        }
      },
      // ---- JS Compression
      uglify: {
          build: {
              src:  'assets/javascript/build/site.js',
              dest: 'assets/javascript/site.min.js'
          }
      },
      // ---- Image Compression
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
      // ---- SASS
      sass: {
        dist: {
          options: {
            style: 'compressed'
          },
          files: {
            'assets/css/build/main.css': 'assets/css/src/main.scss'
          }
        } 
      },
      // ---- Watch
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
        },
        css: {
          files: ['assets/css/src/*.scss'],
          tasks: ['sass'],
          options: {
            spawn: false,
          }
        }
      }
    });

    // Load Grunt plug-ins
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    
    // Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['sass', 'concat', 'uglify']);
};
