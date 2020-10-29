module.exports = function loggedIt(string, type="log") {
  if(type==='table') console.table(string)
  else if(type==='error') console.error(string)
  else console.log(string)
};
