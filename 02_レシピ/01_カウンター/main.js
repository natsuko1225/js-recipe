let count = 0
let maxValue = 0

const a = function (number) {
  maxValue = number
  //setIntervalの引数の関数は引数を持つことができない
  setInterval(countUp, 1000)
}

const countUp = function () {
  count += 1
  if (count > maxValue) {
    //setIntervalを止める
    clearInterval(a)
  } else {
    count += 1
    if (count % 3 === 0 || /3/.test(count)) {
      console.log(`${count}!!!!!!!`)
    } else {
      console.log(count)
    }
  }
}
