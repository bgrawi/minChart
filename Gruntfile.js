module.exports = function(grunt) {

  // Project configuration.
	grunt.initConfig({
		common: {
			banner: '/*! <%= pkg.name %> <%= pkg.version %> <%= grunt.template.today("yyyy-mm-dd") %> License: MIT */'
		},
		pkg: grunt.file.readJSON('package.json'),
		clean: {
			build: ["build"],
		},
		uglify: {
			options: {
				banner: '<%=common.banner%>\n'
			},
			build: {
				src: 'src/<%= pkg.name %>.js',
				dest: 'build/<%= pkg.name %>.min.js'
			}
		},
		cssmin: {
			options: {
				banner: '<%=common.banner%>'
			},
			minify: {
				src: 'src/minChart.css',
				dest: 'build/minChart.min.css',
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
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Register all the task(s).
  
  grunt.registerTask('default', ['clean:build', 'uglify', 'cssmin:minify']);
  
  grunt.registerTask('server', ['connect']);

};