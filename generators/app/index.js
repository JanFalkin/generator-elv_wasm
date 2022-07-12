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

module.exports = class extends Generator {
  // The name `constructor` is important here
  constructor(args, opts) {
    // Calling the super constructor is important so our generator is correctly set up
    super(args, opts);

    // Next, add your custom code
    //this.option('babel'); // This method adds support for a `--babel` flag
  }

  async prompting(){
      this.log(yosay('Create your own ' + chalk.red('Eluvio') + ' content fabric bitcode library!'));
      this.answers = await this.prompt([{
        type: 'input',
        name: 'name',
        message: 'Your project name',
        default: this.appname, // appname return the default folder name to project
        store: true,
      },
      {
        type: 'input',
        name: 'email',
        message: 'Your email for contact',
        default: "someuser@somewhere", // appname return the default folder name to project
        store: true,
      },
      {
        type: 'input',
        name: 'license',
        message: 'License type',
        default: "MIT", // appname return the default folder name to project
        store: true,
      },
      {
        type: 'input',
        name: 'repoUrl',
        message: 'repo url',
        default: "https://www.github.com/myrepo", // appname return the default folder name to project
        store: true,
      },
      {
        type: 'checkbox',
        name: 'language',
        message: 'What source language would you like to create?',
        choices: [
          { name: 'Rust Language',
            value: {
              name: 'Rust',
              slugname: 'eluvio_rust',
              description: 'A Rust wasm library',
              build: 'To buildthe bitcode wasm, run:\n```$ cargo build --target wasm32-unknown-unknown --release```',
              test: 'To run Cargo tests, run:\n```$ cargo test```'
            },
            checked: true },
          { name: 'AssemblyScript Language',
            value: {
              name: 'AssemblyScript',
              slugname: 'eluvio_asm',
              description: 'An AssemblyScript wasm library',
              build: 'To buildthe bitcode wasm, run:\n```$npm i```',
              test: 'To run Cargo tests, run:\n```$ npm test```'
            },
            checked: false },
        ]
      }
    ]);
   }

    writing(){
      this.fs.copyTpl(
        this.templatePath('Cargo.toml'),
        this.destinationPath('Cargo.toml'),
        {
          slugname: this.answers.language[0].slugname,
          author: this.answers.name,
          email: this.answers.email,
          license: this.answers.license,
          repoUrl : this.answers.repoUrl,
          description: this.answers.language[0].description
        }

      )
      this.fs.copyTpl(
        this.templatePath('src/lib.rs'),
        this.destinationPath('src/lib.rs'),
        {
          slugname: this.answers.language[0].slugname,
          author: this.answers.name,
          email: this.answers.email,
          license: this.answers.license,
          repoUrl : this.answers.repoUrl,
          description: this.answers.language[0].description
        }

      )
      this.fs.copyTpl(
        this.templatePath('tests/lib.rs'),
        this.destinationPath('tests/lib.rs'),
        {
          slugname: this.answers.language[0].slugname,
          author: this.answers.name,
          email: this.answers.email,
          license: this.answers.license,
          repoUrl : this.answers.repoUrl,
          description: this.answers.language[0].description
        }

      )

    }

    end() {
      this.log(chalk.green('------------'))
      this.log(chalk.magenta('***---***'))
      this.log(chalk.blue('Jobs is Done!'))
      this.log(chalk.green('------------'))
      this.log(chalk.magenta('***---***'))
    }

};



