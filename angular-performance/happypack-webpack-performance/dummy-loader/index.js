loaderUtils = require('loader-utils');

const doHeavyLifting = (num) => {
  if (num === 1 || num === 2) {
    return 1;
  }
  return doHeavyLifting(num - 1) + doHeavyLifting(num - 2);
};

module.exports = function(source) {
 
  console.log("Slow Loader\n");
  
  for (let i = 0; i < 1000; i ++) {
    doHeavyLifting(Math.floor((Math.random() * 20) + 15));
  }

  return source;
}