const FizzBuzz = function (number) {
  for (let i = 1; i <= number; i++) {
    if (i.toString().indexOf("3") !== -1) {
      console.log(`${i}!!!!!!!`)
    } else {
      console.log(i)
    }
  }
}

FizzBuzz(100)
