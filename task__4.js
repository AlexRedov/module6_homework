function intervalNum(num1, num2) {
    let i = num1;
    const timeId = setInterval(function(){
      console.log(i);
      if (i === num2) {
        clearInterval(timeId)
      } i++;
    }, 1000);
  }
  intervalNum(135, 142);