const encrypt = temp => {
  var k = 'k';
  let str = '';
  for (let i = 0; i < temp.length; i++) {
    str = str.concat(temp.charAt(i) + k);
  }
  return str;
};

module.exports = encrypt;
