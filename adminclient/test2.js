// A Candidate Key is an attribute or a set of attributes that can uniquely identify a tuple of a relation in the relational database and satisfies the following two properties.
// - Uniqueness: The relation does not have two distinct tuples (i.e. rows or records in common database language) with the same values for these attributes.
// - Minimality: There should no subset of these attributes satisfy uniqueness, which means if we exclude one of these attributes, then uniqueness will be broken.

// [Student number, Name, Major, Grade]

// [100,”ryan”,”music”,2]
// [200,”apeach”,”math”,2]
// [300,”tube”,”computer”,3]
// [400,”con”,”computer”,4]
// [500,”muzi”,”music”,3]
// [600,”apeach”,”music”,2]

// In the above example, each student has a unique "student number".
// Thus, the ["student number"] can be the candidate key of the relation.

// Then, because there are students who use the same name ("apeach") for "name", "name" can not be a candidate key.

// However, if you use ["name", "major"] together, all the tuples of the relation can be uniquely identified, so they can become candidate keys.

// Of course, it is possible to uniquely identify all tuples in a relation using ["name", "major", "grade"], but it can not be a candidate key because it does not satisfy the minimum.

// Therefore, the candidate key of the input above is ["student number"], ["name", "major"].

// Find how many candidate keys are there for given array relation.

// relation: 
// [["100","ryan","music","2"],["200","apeach","math","2"],["300","tube","computer","3"],["400","con","computer","4"],["500","muzi","music","3"],["600","apeach","music","2"]]

// answer: 2
let soal = [
  ["100", "ryan", "music", "2"],
  ["200", "apeach", "math", "2"],
  ["300", "tube", "computer", "3"],
  ["400", "con", "computer", "4"],
  ["500", "muzi", "music", "3"],
  ["600", "apeach", "music", "2"]
]

function solution(relation) {
  var answer = 0;
  let arrayOfObj = []
  for (let i = 0; i < relation.length; i++) {
    arrayOfObj.push({
      id: relation[i][0],
      name: relation[i][1],
      major: relation[i][2],
      grade: relation[i][3]
    })
  }

  let arrayPembanding = [arrayOfObj[0]]
  let flags = []
  let flagNameMajor = true
  let flagNameGrade = true
  let flagMajorGrade = true
  let flagId = true
  let flagName = true
  let flagMajor = true
  let flagGrade = true
  for (let i = 1; i < arrayOfObj.length; i++) {
    for (let j = 0; j < arrayPembanding.length; j++) {
      if (arrayOfObj[i].id == arrayPembanding[j].id) {
        flagId = false
      }
      if (arrayOfObj[i].name == arrayPembanding[j].name) {
        flagName = false
      }
      if (arrayOfObj[i].major == arrayPembanding[j].major) {
        flagMajor = false
      }
      if (arrayOfObj[i].grade == arrayPembanding[j].grade) {
        flagGrade = false
      }
      if (arrayOfObj[i].name + arrayOfObj[i].major == arrayPembanding[j].name + arrayPembanding[j].major) {
        flagNameMajor = false
      }
      if (arrayOfObj[i].name + arrayOfObj[i].grade == arrayPembanding[j].name + arrayPembanding[j].grade) {
        flagNameGrade = false
      } else {}
      if (arrayOfObj[i].major + arrayOfObj[i].grade == arrayPembanding[j].major + arrayPembanding[j].grade) {
        flagMajorGrade = false
      }
    }
    if (flagMajorGrade || flagNameGrade || flagNameMajor) {
      arrayPembanding.push(arrayOfObj[i])
    }
  }
  if (flagNameMajor === true) {
    flags.push('name & major')
  }
  if (flagNameGrade === true) {
    flags.push('name & grade')
  }
  if (flagMajorGrade === true) {
    flags.push('major & grade')
  }
  if (flagId === true) {
    flags.push('id')
  }
  if (flagGrade === true) {
    flags.push('grade')
  }
  if (flagMajor == true) {
    flags.push('major')
  }
  if (flagName == true) {
    flags.push('name')
  }
  answer = flags.length
  return answer
}

console.log(solution(soal))

// for (let i = 0 ; i < relation.length; i++){
//   flag = true
//   flags = []
//   flagNameMajor = true
//   flagsNameMajor =[]
//   flagNameGrade = true
//   flagsNameGrade = []
//   flagMajorGrade = true
//   flagsMajorGrade = []
//   for (let j = 1; j < relation.length; j++){
//     let nameMajorI = `${relation[i][1]+relation[i][2]}`
//     let nameMajorJ = `${relation[j][1]+relation[j][2]}`
//     let nameGradeI = `${relation[i][1]+relation[i][3]}`
//     let nameGradeJ = `${relation[j][1]+relation[j][3]}`
//     let majorGradeI = `${relation[i][2]+relation[i][3]}`
//     let majorGradeJ = `${relation[j][2]+relation[j][3]}`

//    if (nameMajorI === nameMajorJ){
//      flagsNameMajor.push(false)
//      console.log('===========namemajor================')
//      console.log(i,j)
//      console.log(nameMajorI,nameMajorJ)
//      console.log('=================================')
//    } else {
//      flagsNameMajor.push(true)
//      console.log('===========namemajor================')
//      console.log(i,j)
//      console.log(nameMajorI,nameMajorJ)
//      console.log('=================================')
//    }

//    if (nameGradeI === nameGradeJ){
//      flagsNameGrade.push(false)
//     //  console.log(i,j)
//    }else {
//      flagsNameGrade.push(true)
//     //  console.log(i,j)
//    }

//    if (majorGradeI === majorGradeJ){
//      flagsMajorGrade.push(false)
//     //  console.log(i,j)
//    }else {
//      flagsMajorGrade.push(true)
//     //  console.log(i,j)
//    }
    
//   }
// }
// console.log(flagsMajorGrade,flagsNameGrade,flagsNameMajor)



// let arrayPembanding = [relation[0][0],relation[0][1],relation[0][2],relation[0][3]]
//   let arrayResult =[[],[]]
//   for (let i = 1; i < relation.length ; i++ ){
//     let flag = true
//     let flagNameMajor = true
//     for (let j = 0; j < relation[i].length; j++){
//       if (arrayPembanding[j]===relation[i][0]){
//         flag=false
//       }
      
      

//       if (arrayPembanding[j+1] && arrayPembanding[j+2] && relation[i][j+1] && relation[i][j+2]){
//         if (arrayPembanding[j+1]+arrayPembanding[j+2]===relation[i][j+1]+relation[i][j+2]){
//           console.log(arrayPembanding[j+1]+arrayPembanding[j+2],"ini false")
//           flagNameMajor = false
//         }else {
//           console.log(arrayPembanding[j+1]+arrayPembanding[j+2],"ini true")
//         }
//       }

//     }
//     if(flag===true){
//       arrayResult[0].push(flag)
//     }
//     if (flagNameMajor===true){
//       arrayResult[1].push(flagNameMajor)
//     }
//   }