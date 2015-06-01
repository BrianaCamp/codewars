//in a given string, return the highest and lowest number

function highAndLow(numbers){
  var result = numbers.split(" "), // splits string into an array
  max = Math.max.apply(null, result),
  min = Math.min.apply(null, result);
  return max + " "+ min;
}
