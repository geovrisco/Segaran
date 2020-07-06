function solution (text){

  let vowel=[]
  let consonant=[]
  for (let i = 0; i < text.length; i++){
    let txt = text[i].toLowerCase()
    if (txt ==='a' ||txt ==='i' ||txt ==='u' ||txt ==='e' ||txt ==='o'){
      vowel.push(txt)
    }
    if (txt !=='a' && txt !=='i' && txt !=='u' && txt !=='e' && txt !=='o' && txt !==' ') {
      consonant.push(txt) 
    }
  }

  return {
    vowel: vowel.sort().join(""),
    consonant: consonant.sort().join("")
  }

}

console.log(solution('Sample Case'))
console.log(solution('Next Case'))



function numbers(num){
  num = num.toString()
  result =[]
  for (let i =0; i < num.length;i++){
    for ( let j = 1 ; j < num.length; j++ ){
      result.push(
        Number(num[i]) + Number(num[j])
      )
    }
  }
  
  return result.sort().reverse()[0]
}

console.log(numbers(12310))
console.log(numbers(11100))