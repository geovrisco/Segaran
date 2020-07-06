function solution(A){

  let result =''
  A= A.sort()
  let min =A[0]
  let max =A[A.length-1]
  
  if (max<0 && min<0){
    return 1
  }
  
 for (let i=min; i <=max; i++){
   if(!A.includes(i)){
     result += i
   }
 }
 if (result == 0){
   return A.length+1
 }
return Number(result)
}

console.log(solution([1,3,6,4,1,2]))
console.log(solution([1,2,3]))
console.log(solution([-1,-3]))