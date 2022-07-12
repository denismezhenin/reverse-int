module.exports = function reverse (n) {
    let result = '';
    let bac = Math.abs(n).toString();
    // console.log(typeof bac)
    for (let i = 0; i < bac.length; i++) {
   result = `${bac[i]}${result}`;
  }
  return (Number(result));
}
