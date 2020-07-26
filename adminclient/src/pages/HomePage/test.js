// // function solution(x,a,b,i,j){

// //   let k = j
// //   let ct = 0

// //   while (k > i-1) {
// //     if (x[k] <= b && x[k]>a){
// //       ct = ct + 1
// //     } 
// //     k = k - 1
// //   }

// //   return ct


// // }

// // let x = [11,10,10,5,10,15,20,10,7,11]
// // console.log(solution(x,8,18,3,6))
// // console.log(solution(x,10,20,0,9))
// // console.log(solution(x,8,28,6,3))
// // console.log(solution(x,20,10,0,9))
// // console.log(solution(x,6,7,8,8))


// function g (str){
//   let i = 0
//   let new_str = ""
//   while (i < str.length - 1) {
//     new_str = new_str  + str[i+1]
//     i = i + 1
//   }
//   return new_str
// }

// function f (str){
//   if (str.length == 0){
//     return ""
//   } else if (str.length==1){
//     return str
//   } else {
//     return  g(str) + str[0]
//   }
// }

// function h (n ,str){
//   while (n!=1) {
//     if (n % 2 == 0){
//       console.log('n%2')
//       n=n/2
//     } else {
//       console.log('n!%2')
//       n = 3*n +1
//     } 
//     str = f(str)
//   }
//   return str
// }

// function powz(x,y){
//   if (y==0){
//     return 1
//   } else {
//     return x * powz(x,y-1)
//   }
// }

// console.log(h(1,"fruits"))
// console.log(h(2,"fruits"))
// console.log(h(5,"fruits"))
// // console.log(h(powz(2,1000000000000000),"fruits"))
// // console.log(h(4,"fruits"))


function solution(a,b,k){
  let count = 0
  while ( a <=b){
    if (a%k==0){
      count = count+1
    }
    a++
  }
  return count
}

function test(array){
  let result = []
  let totalCase = 1
  for (let i = 0; i < array.length;i++){
    if (array[i] && array[i+1] && array[i+2]){
      result.push(`Case ${totalCase}:${solution(array[i],array[i+1],array[i+2])}`)
      totalCase++
    }
  }
  return(result)
}



for (let i = 0; i < test([2,1,10,3,8,20,4]).length;i++){
  console.log(test([2,1,10,3,8,20,4])[i])
}