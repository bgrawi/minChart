module.exports = function(grunt) {

  // Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		clean: {
			build: ["build"],
		},
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= pkg.version %> <%= grunt.template.today("yyyy-mm-dd") %> License: MIT */\n'
			},
			build: {
				src: 'src/<%= pkg.name %>.js',
				dest: 'build/<%= pkg.name %>.min.js'
			}
		},
		watch: {
			files: ['src/*'],
			tasks: ['default']
		},
		connect: {
			server: {
				options: {
					port: 8080,
					base: './',
					keepalive: true
				}
			}
		}
	});

  // Load Plugins
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Register all the task(s).
  
  grunt.registerTask('default', ['clean:build', 'uglify']);
  
  grunt.registerTask('server', ['connect']);

};