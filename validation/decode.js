const decode = temp => {
  let str = '';
  for (let i = 0; i < temp.length; i += 2) {
    str += temp.slice(i, i + 1);
  }
  return str;
};

module.exports = decode;
