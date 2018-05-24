const doHeavyLifting = (num) => {
  if (num === 1 || num === 2) {
    return 1;
  }
  return doHeavyLifting(num - 1) + doHeavyLifting(num - 2);
};

module.exports = function longLoader(source) {
	
      for (let i = 0; i < 1000; i ++) {
        doHeavyLifting(Math.floor((Math.random() * 20) + 15));
      }
	
	
  return source;
}