// N: 5
// users: [2,1,2,6,2,4,3,3]
// answer: [3,4,2,1,5]

// A total 8 users played stage one, and one of them was not clear the stage yet. Therefore, the failure rate of stage 1 is as follows.
// Stage 1 failure rate: 1/8

// A total 7 users played stage 2, 3 of which were not clear the stage yet. Therefore, the failure rate of stage 2 is as follows.
// Stage 2 failure rate: 3/7

// Likewise, the failure rates of the remaining stages are as follows.
// Stage 3 failure rate: 2/4
// Stage 4 failure rate: 1/2
// Stage 5 failure rate: 0/1

// Sort the number of stages by failure rate in descending order: [3,4,2,1,5]

// N: 4
// users: [4,4,4,4,4]
// answer: [4,1,2,3]

// Since all users are in the last stage, the failure rate of stage 4 is 1 and the failure rate of the remaining stages is 0.
// If the failure rate is same, then the smaller number of stages should come first.

function solution(N, users) {
  let answer = []
  let arrayOfObject = []
  let count = 0
  for (let i = 1; i <= N; i++) {
    let newUsers = []
    for (let j = 0; j < users.length; j++) {
      if (i === users[j]) {
        count++
      } else {
        newUsers.push(users[j])
      }
    }
    arrayOfObject.push({
      stage: i,
      currentPlayer: users.length,
      peopleFail: count,
      rate: count / users.length
    })
    count = 0
    users = newUsers
  }


  arrayOfObject.sort((a, b) => {
    return b.rate - a.rate
  })

  for (let i = 0; i < arrayOfObject.length; i++) {
    answer.push(arrayOfObject[i].stage)
  }

  return answer
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]))
console.log(solution(4, [4, 4, 4, 4, 4]))