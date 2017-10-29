function reverseNumber(num){
    num = num+'';
    var input = num.split('').reverse().join('');
      return parseInt(input);
}
console.log(reverseNumber(12345));
