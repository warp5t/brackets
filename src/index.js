module.exports = function check(str, bracketsConfig) {
 const spreadEl = bracketsConfig.map(item => item.join(''));
  while (spreadEl.length) {
    let counter = 0;
    spreadEl.forEach((el) => {
      if (str.indexOf(el) != -1) {
        str = str.replace(el, '');
      } else {
        counter += 1;
      }
    });

    if (counter === spreadEl.length) {
      spreadEl.length = 0;
    }
  }
  return str.length === 0 ? true : false;
}
