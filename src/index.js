module.exports = function check(str, bracketsConfig) {
  let bracckets = bracketsConfig.map(item => item.join(""));
  for (let i = 0; i < bracckets.length; i++) {
    if (str.includes(bracckets[i])) {
      str = str.replace(bracckets[i], "");
      i = -1;
    }
  }

return (str) ? false : true;
}
