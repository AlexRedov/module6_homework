let i,j,num;
function simpleNumber() {
  
  num=+prompt('Введите число не более 1000');
    if (num>1000) {
    alert('Вы ввели число более 1000')
  }
  j=0;
  for (i=2;((i*i<=num)&&(j!=1));i++) {
    if (num%i===0) {
      j=1;
    }
  }
  if (j==1){
    alert(num+' Составное число');
  } else if (num === 0){
    alert('Вы ввели 0')
  } else if (num === 1){
    alert('Вы ввели 1')
  } else {
    alert(num+' Простое число');
  }
}

simpleNumber();