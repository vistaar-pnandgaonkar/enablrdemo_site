# Enablr Sales 

Enablr Sales website setup and usage guide. 

## Setup
To set up the necessary dependencies for the project, please follow the steps below:
1. Clone the repository:
```shell
git clone git@github.com:vistaardigital/enablr.in.git
```
2. Navigate to the project directory:
```shell
cd enablrsales.com/v1
```
3. Install the required node_modules by running the following command:
```shell
npm install
```
4. Install Grunt and its command-line interface (CLI) globally:
```shell
npm install -g grunt-cli
```

This will add the plugin to your project's devDependencies.

## Usage
Once you have completed the project setup, you can use the following commands for different purposes:
- ##### Development
```shell
grunt
```
This command will execute the tasks specified in your Gruntfile.js and is intended for development purposes. It will process your JavaScript and CSS files and perform any necessary tasks.

- ##### Production
```shell
grunt build
```
Use this command to create a production-ready version of your project. It will optimize and bundle your files for deployment.

For more information about Grunt and its usage, please refer to the official documentation at https://gruntjs.com/getting-started