function solution(record) {
  var answer = [];
  let logs = [];

  for (let i = 0; i < record.length; i++) {
    var split = record[i].split(" ")
    let users = {
      command: split[0],
      userId: split[1],
    }
    if (split[2]) {
      users.userName = split[2]
    }
    logs.push(users)
  }

  let actual = [{
    command: logs[0].command,
    userId: logs[0].userId,
    userName: logs[0].userName,
  }]
  for (let i = 1; i < logs.length; i++) {
    for (let j = 0; j < actual.length; j++) {
      if (logs[i].userId === actual[j].userId && logs[i].command === "Change") {
        actual[j].userName = logs[i].userName

      } else if (logs[i].userId === actual[j].userId && logs[i].command === "Enter") {
        actual[j].userName = logs[i].userName

      } else if (logs[i].userId !== actual[j].userId && logs[i].command !== "Change") {
        actual.push(logs[i])
      }
    }
  }

  for (let i = 0; i < actual.length; i++) {
    if (actual[i].command === 'Enter') {
      answer.push(actual[i].userName + ' came in')
    } else if (actual[i].command === 'Leave') {
      answer.push(actual[i].userName + ' has left')
    }
  }

  return answer;
}


console.log(solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"]))


// There is an open chat.

// When a person enters the chat, the following message is displayed.
// "[Nickname] came in."

// When a person leaves the chat, the following message is displayed.
// "[Nickname] has left."

// There are two ways to change nicknames in a chat:
// After leaving the chat, you can re-enter with the new nickname.
// Change nickname in a chat.

// When changing a nickname, the nickname of the previous messages displayed in the chat is also changed.

// For example, if a person uses the nickname "Muzi" and "Prodo" in the chat in order, the following message is displayed in the chat.

// "Muzi came in." "Prodo came in."

// When “Muzi” leaves the room, the following message is left.
// "Muzi came in." "Prodo came in." "Muzi has left."

// When Muzi comes back in again with the new nickname, Prodo, the previous messages are changed to Prodo as follows.

// "Prodo came in." "Prodo came in." "Prodo has left." "Prodo came in."

// Since the chat allows duplicate nicknames, there are currently two people in the chat who use the nickname, Prodo. Now, when Prodo (the second person) changes his nickname to Ryan, the chat message is changed as follows.

// "Prodo came in." "Ryan came in." "Prodo has left." "Prodo came in."

// Complete the function that returns the entire chat messages.