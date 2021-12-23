let arr = [0,11,17,13,22,2,1,8,6,1,0,12,'hhhh',null];
function showEvenOddZero(arr){
let countEven = 0;
let countZero = 0;
let countOdd = 0;

for (let i=0; i<arr.length; i++) {
  
  if (isNaN(arr[i]) || arr[i]==null) {
    console.log('Это не числа '+arr[i])
  } else if (arr[i] === 0) {
    countZero = countZero +1;
  } else if (arr[i]%2 !== 0) {
    countOdd = countOdd +1;
  } else if (arr[i]%2 === 0) {
    countEven = countEven +1;
  }
  }

console.log('Количество четных в массиве '+countEven,'Количество нечетных в массиве '+countOdd,'Количество нулей '+countZero);
}
showEvenOddZero(arr);