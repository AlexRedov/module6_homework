function sum(term1) {
    return function(term2) {
      return term1+term2;
    }
  }
  console.log(sum(3)(-3))
  