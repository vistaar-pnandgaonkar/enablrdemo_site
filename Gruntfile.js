module.exports = function (grunt) {
  grunt.initConfig({
    concat: {
      css: {
        src: ["css/main.css", "css/pharma.css", "css/real-estate.css", "css/animated-slide.css", "css/animation.css", "css/animated-slide-demo.css", "css/feature-clm-platform.css"],
        dest: "css/style.css",
      },
    },

    uglify: {
      js: {
        files: {
          "js/main.min.js": ["js/main.js", "js/animated-slide.js"],
        },
      },
    },

    cssmin: {
      target: {
        files: {
          "css/style.min.css": ["css/style.css"],
        },
      },
    },

    watch: {
      scripts: {
        files: ["js/**/*.js"],
        files: ["css/**/*.css"],
        tasks: ["concat", "uglify", "cssmin"],
      },
    },
  });

  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-contrib-watch");

  grunt.registerTask("build", ["concat", "uglify", "cssmin"]);
  grunt.registerTask("default", ["concat", "uglify", "cssmin", "watch"]);
};
