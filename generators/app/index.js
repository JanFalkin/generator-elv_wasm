var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var slug = require('slug');

var extractGeneratorName = function (appname) {
  var slugged = slug(appname);
  var match = slugged.match(/^generator-(.+)/);

  if (match && match.length === 2) {
    return match[1].toLowerCase();
  }
  return slugged;
};


// module.exports = class extends Generator {};

// module.exports = class extends Generator {
//   // The name `constructor` is important here
//   constructor(args, opts) {
//     // Calling the super constructor is important so our generator is correctly set up
//     super(args, opts);

//     // Next, add your custom code
//     this.option('babel'); // This method adds support for a `--babel` flag
//   }
//   method1() {
//     this.log('method 1 just ran');
//   }

//   method2() {
//     this.log('method 2 just ran');
//   }
// };


module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: {
    greet: function() {
      this.log(yosay('Create your own ' + chalk.red('Eluvio') + ' content fabric bitcode library!'));
    },

    askForBindings: function() {
      var done = this.async();

      var prompts = [
        { type: 'checkbox',
          name: 'language',
          message: 'What source language would you like to create?',
          choices: [
            { name: 'Rust Language',
              value: {
                name: 'Rust',
                slugname: 'rs',
                description: 'A Rust wasm library',
                build: 'To buildthe bitcode wasm, run:\n```$ cargo build --target wasm32-unknown-unknown --release```',
                test: 'To run Cargo tests, run:\n```$ cargo test```'
              },
              checked: true },
            { name: 'AssemblyScript Language',
              value: {
                name: 'AssemblyScript',
                slugname: 'as',
                description: 'An AssemblyScript wasm library',
                build: 'To buildthe bitcode wasm, run:\n```$npm i```',
                test: 'To run Cargo tests, run:\n```$ npm test```'
              },
              checked: false },

          ] }
      ];

      this.prompt(prompts, function(props) {
        var bindings = {};
        props.bindings.forEach(function(binding) {
          bindings[binding.slugname] = binding;
        });
        this.bindings = bindings;

        done();
      }.bind(this));
    },

    // askForGitHubUser: function () {
    //   var done = this.async();

    //   var prompts = [{
    //     name: 'githubUser',
    //     message: 'Would you mind telling me your username on GitHub?',
    //     default: 'someuser'
    //   }];

    //   this.prompt(prompts, function (props) {
    //     this.githubUser = props.githubUser;

    //     done();
    //   }.bind(this));
    // },

    askForProjectProps: function () {
      var done = this.async();

      var prompts = [
        { name: 'name',
          message: 'Module name',
          default: extractGeneratorName(this.appname) },
        { name: 'description',
          message: 'Description',
          default: 'A Rust library with bindings!' },
        { name: 'keywords',
          message: 'Key your keywords (comma to split)',
          default: '' },
        { name: 'license',
          message: 'License',
          default: 'MIT' }
      ];
      this.prompt(prompts, function (props) {
        this.name = props.name;
        this.slugname = slug(this.name);
        this.description = props.description;
        this.keywords = props.keywords;
        this.license = props.license;

        done();
      }.bind(this));
    }
  },

  configuring: {
    // userInfo: function () {
    //   var done = this.async();

    //   githubUserInfo(this.githubUser, function (res) {
    //     /*jshint camelcase:false */
    //     this.author = res.name;
    //     this.email = res.email;
    //     this.githubUrl = res.html_url;
    //     this.repoUrl = this.githubUrl + '/' + this.slugname;
    //     done();
    //   }.bind(this), this.log);
    // },

    keywords: function() {
      this.keywords = this.keywords.split(',').map(function(el) {
        return el.trim();
      }).filter(function(el) {
        return !!el;
      });
    }
  },

  writing: {
  //   jsFiles: function () {
  //     if (!this.bindings.js) { return; }
  //     this.template('package.json');
  //     this.copy('jshintrc', '.jshintrc');
  //     this.template('js/lib/index.js');
  //     this.template('js/tests/index.js');
  //   },

    rustFiles: function() {
      this.template('Cargo.toml');
      this.copy('src/lib.rs');
      this.template('tests/lib.rs');
    },

    projectFiles: function () {
      this.copy('editorconfig', '.editorconfig');
      this.copy('gitignore', '.gitignore');
      this.copy('gitattributes', '.gitattributes');
      this.template('README.md');
    }
  },

  install: function () {
    if (this.bindings.js) {
      this.installDependencies({
        skipInstall: this.options['skip-install'],
        bower: false
      });
    }
  }
});
