const ftoc = function(temp) {
  let fTemp = (temp -32) * (5/9);
  fTemp = Math.round(fTemp * 10) / 10;
  return fTemp;
};

const ctof = function(temp) {
  let cTemp = (temp * (9/5)) + 32;
  cTemp = Math.round(cTemp * 10) / 10;
  return cTemp;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
