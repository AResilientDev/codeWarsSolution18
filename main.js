function solution(number){
  // convert the number to a roman numeral
  //defines empty string to hold our result
  //defines all of the numbers
  //defines all of the roman numerals
  var result = '';
  var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var roman = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];
  //iterates the array of numbers
  //while the number passed in divided by a number in the
  //number array is less than the value of the passed in number
  //the respective roman numeral gets concatenated into our result string
  //the respective # in the decimal array is subtracted from number
  //return our results string
  for (var i = 0;i<=decimal.length;i++) {
    while (number%decimal[i] < number) {
      result += roman[i];
      number -= decimal[i];
    }
  }
  return result;
}
