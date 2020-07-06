function solution(A, B) {
    // write your code in JavaScript (Node.js 8.9.4)
    let value = A * B
  function dec2bin(dec){
    return (dec >>> 0).toString(2);
  }
  let str = dec2bin(value)
  let array = str.split("")
  let result = 0
  for (let i = 0; i < array.length; i++ ){
    if(array[i]!==0){
      result += Number(array[i])
    }
  }
  return result
}

console.log(solution(3,7))

