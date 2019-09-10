let chalk = require("chalk");

 
module.exports.getLog = (text,color) => {
    console.log(chalk[color](text));
}